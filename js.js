// Function to show image description
function upDate(previewPic) {
  const desc = document.getElementById("description");
  desc.innerHTML = previewPic.alt;
  desc.style.backgroundColor = "#e3f0ff";
  console.log("Image hover or focus triggered:", previewPic.alt);
}

// Function to reset description
function unDo() {
  const desc = document.getElementById("description");
  desc.innerHTML = "Hover or focus on an image to view its description here.";
  desc.style.backgroundColor = "#eef3ff";
  console.log("Mouse leave or blur event triggered.");
}

// Function to initialize the gallery
function initializeGallery() {
  console.log("Page loaded. Initializing gallery...");
  const images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    // Add tabindex dynamically for keyboard navigation
    images[i].setAttribute("tabindex", i + 1);
    console.log("Added tabindex to:", images[i].alt);

    // Add listeners for mouse and keyboard interactions
    images[i].addEventListener("mouseover", function() { upDate(this); });
    images[i].addEventListener("mouseleave", unDo);
    images[i].addEventListener("focus", function() { upDate(this); });
    images[i].addEventListener("blur", unDo);
  }
}
