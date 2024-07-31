document.addEventListener("DOMContentLoaded", function () {
  const previews = document.querySelectorAll(".preview");
  previews.forEach((img, index) => {
    img.setAttribute("tabindex", 0);
    img.onmouseover = () => upDate(img);
    img.onfocus = () => upDate(img);
    img.onmouseout = unDo;
    img.onblur = unDo;
  });
});

function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
