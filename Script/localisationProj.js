 // ── DONNÉES INITIALES ──
    let projets = [
      { id: 1, nom: "Résidence Azur", lieu: "Cocody, Abidjan", budget: "915M FCFA", statut: "vert", lat: 5.3600, lng: -3.9969 },
      { id: 2, nom: "Hôtel Grand Abidjan", lieu: "Zone 4, Abidjan", budget: "484M FCFA", statut: "orange", lat: 5.3134, lng: -4.0122 },
      { id: 3, nom: "Pont de l'Indénienié", lieu: "Yopougon, Abidjan", budget: "1.2Md FCFA", statut: "bleu", lat: 5.3545, lng: -4.0741 },
      { id: 4, nom: "Cité Agbragbo I", lieu: "Yopougon, Abidjan", budget: "100.2Md FCFA", statut: "bleu", lat: 5.3564, lng: -4.0741 },
    ];

    const couleurs = { vert: "#22c55e", orange: "#f97316", bleu: "#3b82f6" };
    const labels = { vert: "EN COURS", orange: "EN ATTENTE", bleu: "PLANIFICATION" };

    // ── INIT CARTE ──
    const map = L.map("map").setView([5.3450, -4.0250], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);

    let markers = {};
    let enAttentePlacement = false;

    function creerIcone(statut) {
      const c = couleurs[statut];
      return L.divIcon({
        className: "",
        html: `<div style="
          width:14px;height:14px;
          background:${c};
          border:3px solid #fff;
          border-radius:50%;
          box-shadow:0 2px 6px rgba(0,0,0,0.35);
        "></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        popupAnchor: [0, -10]
      });
    }

    function ajouterMarqueur(p) {
      const m = L.marker([p.lat, p.lng], { icon: creerIcone(p.statut), draggable: true })
        .addTo(map)
        .bindPopup(`
          <div style="font-family:Poppins,sans-serif;min-width:160px">
            <strong style="font-size:13px">${p.nom}</strong><br>
            <span style="font-size:11px;color:#888">${p.lieu || ""}</span><br>
            <span style="font-size:11px;color:#555;font-weight:600">${p.budget}</span><br>
            <span style="font-size:10px;font-weight:700;color:${couleurs[p.statut]}">${labels[p.statut]}</span><br>
            <button onclick="supprimerProjet(${p.id})" style="
              margin-top:8px;width:100%;padding:5px;border:1px solid #eee;
              border-radius:6px;font-size:11px;cursor:pointer;background:#fff;
              font-family:Poppins,sans-serif;color:#e25b45;font-weight:600
            ">Supprimer</button>
          </div>
        `);

      m.on("dragend", e => {
        const pos = e.target.getLatLng();
        const idx = projets.findIndex(x => x.id === p.id);
        if (idx !== -1) { projets[idx].lat = pos.lat; projets[idx].lng = pos.lng; }
      });

      markers[p.id] = m;
    }

    function rendreListe() {
      const liste = document.getElementById("projets-liste");
      liste.innerHTML = "";
      projets.forEach((p, i) => {
        const div = document.createElement("div");
        div.className = "projet-item" + (i === 0 ? " active" : "");
        div.innerHTML = `
          <div class="projet-item-body">
            <div class="projet-item-info">
              <strong>${p.nom}</strong>
              <span><i class="fa-solid fa-location-dot"></i> ${p.lieu || "Position sur la carte"}</span>
              <span class="budget">Budget : ${p.budget}</span>
            </div>
            <div class="projet-item-droite">
              <span class="statut-badge ${p.statut}">${labels[p.statut]}</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        `;
        div.onclick = () => {
          document.querySelectorAll(".projet-item").forEach(x => x.classList.remove("active"));
          div.classList.add("active");
          map.setView([p.lat, p.lng], 14, { animate: true });
          markers[p.id]?.openPopup();
        };
        liste.appendChild(div);
      });
      document.getElementById("badge-count").textContent = projets.length + " SITES";
    }

    function supprimerProjet(id) {
      map.closePopup();
      markers[id]?.remove();
      delete markers[id];
      projets = projets.filter(p => p.id !== id);
      rendreListe();
    }

    // ── PLACEMENT SUR CARTE ──
    function activerPlacement() {
      const nom = document.getElementById("ajout-nom").value.trim();
      if (!nom) { alert("Donne un nom au projet."); return; }
      enAttentePlacement = true;
      document.getElementById("bouton-ajout").textContent = "Clique sur la carte...";
      document.getElementById("bouton-ajout").style.background = "#e67700";
      map.getContainer().style.cursor = "crosshair";
    }

    map.on("click", e => {
      if (!enAttentePlacement) return;
      const nom = document.getElementById("ajout-nom").value.trim();
      const statut = document.getElementById("ajout-statut").value;
      const budget = document.getElementById("ajout-budget").value.trim() || "—";
      const id = Date.now();
      const p = { id, nom, lieu: "", budget, statut, lat: e.latlng.lat, lng: e.latlng.lng };
      projets.push(p);
      ajouterMarqueur(p);
      rendreListe();
      // reset
      enAttentePlacement = false;
      document.getElementById("ajout-nom").value = "";
      document.getElementById("ajout-budget").value = "";
      document.getElementById("bouton-ajout").textContent = "Placer sur la carte";
      document.getElementById("bouton-ajout").style.background = "";
      map.getContainer().style.cursor = "";
      map.setView([e.latlng.lat, e.latlng.lng], 14, { animate: true });
      markers[id]?.openPopup();
    });

    // ── INIT ──
    projets.forEach(p => ajouterMarqueur(p));
    rendreListe();