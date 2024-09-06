<template>
  <div>

    <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
    </head>
  </div>
  <!-- <div style="height: 100vh;" id="map"></div> -->
  <div class="p-2 z-0 bg-red-500">
    <div class="z-0" id="map" style="height:70vh"></div>
  </div>
  <div class="w-full z-20 fixed mb-3 bottom-24">
    <div class="w-6/12 py-2 text-center mx-auto bg-white text-black  text-lg font-bold">
      Click on the Blue tag to Start Tour
    </div>

  </div>
</template>

<script setup >
if (process.client) {

  var map = L.map('map').setView([18.5093, 73.8551], 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
  }).addTo(map);

  /*------------------------------test code ---------------------------------------------------*/
  // L.Control.textbox = L.Control.extend({
  //   onAdd: function (map) {

  //     var text = L.DomUtil.create('div');
  //     text.id = "info_text";
  //     text.innerHTML = "<b> Click on the Blue tag to view the details </b>";
  //     text.style = "color:black; font-size:10px; background-color:white; padding:10px;"
  //     return text;
  //   },

  //   onRemove: function (map) {
  //     // Nothing to do here
  //   }
  // });
  // L.control.textbox = function (opts) { return new L.Control.textbox(opts); }
  // L.control.textbox({ position: 'bottomleft' }).addTo(map);

  /*---------------------------------------------------------------------------------------------*/

  // Point For Shaniwar Wada
  var Shaniwarwada = L.marker([18.5195, 73.8553]).bindTooltip("Shaniwarwada", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  Shaniwarwada.on('click', function () { window.location.href = "/shaniwarWada" })

  // Point For Lal Mahal
  var LalMahal = L.marker([18.5188, 73.8565]).bindTooltip("Lal Mahal", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  LalMahal.on('click', function () { window.location.href = "/lalMahal" })

  // Point For 
  // var LalMahal = L.marker([18.5188, 73.8565]).bindTooltip("Tambdi Jogeshwarl", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  // LalMahal.on('click', function () { window.location.href = "/shaniwarWada" })

  // Point For Shreemant Dagdusheth Halwai Ganpati Mandir
  var ShreemantDagdushethHalwaiGanpatiMandir = L.marker([18.5165, 73.856]).bindTooltip("Shreemant Dagdusheth Halwai Ganpati Mandir", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  ShreemantDagdushethHalwaiGanpatiMandir.on('click', function () { window.location.href = "/DagdushethGanpati" })

  // //Point For KasbaGanpati 18°31′08″N 73°51′25″E
  // var KasbaGanpati = L.marker([18.3108, 73.8565]).bindTooltip("KasbaGanpati", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  // KasbaGanpati.on('click', function () { window.location.href = "/HistoricD" })

  // Ponit for MahatmaPhuleMandai
  var MahatmaPhuleMandai = L.marker([18.5129, 73.8563]).bindTooltip("Mahatma Phule Mandai", { permanent: true, className: "my-label", offset: [0, 0] }).addTo(map);
  MahatmaPhuleMandai.on('click', function () { window.location.href = "/mahatmaPhuleMandai" })

}
</script>
