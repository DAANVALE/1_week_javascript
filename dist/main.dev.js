"use strict";

function Changed() {
  var text = document.getElementById("myWeb").innerHTML;
  document.getElementById("cambio").innerHTML = text;
}

var text = document.getElementById("myWeb").innerHTML;
document.getElementById("cambio").innerHTML = text;
var title = document.getElementById("title");
title.textContent = 'Dom - Accediendo';