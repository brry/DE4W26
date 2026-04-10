window.addEventListener("load", function () {
  var img = document.createElement("img");
  img.src = "externalfig/HPI_logo.png";
  img.className = "hpi-logo";
  document.body.appendChild(img);

  var link = document.createElement("a");
  link.href = "index.html";
  link.textContent = "← DE4W tutorial overview";
  link.className = "course-link";
  document.body.appendChild(link);
});
