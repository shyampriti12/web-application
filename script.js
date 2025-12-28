let isDragging = false; 
let boxes = document.querySelectorAll(".box");

// Mousepressed(run some code when that action happens:addeventlistener)

document.addEventListener("mousedown", function () {
  isDragging = true;
});

// Mousereleased 
document.addEventListener("mouseup", function () {
  isDragging = false;
});

// Loopthrougheachboxindividually
boxes.forEach(function (box) {

  // Mouseentersboxarea
  box.addEventListener("mouseenter", function () {

    // Changecursor
    document.body.style.cursor = box.dataset.cursor;

    // Only when dragging
    if (!isDragging) return;

    // Resetboxes
    boxes.forEach(function (a) {
      a.style.backgroundColor = "white";
      a.textContent = "";
      a.classList.remove("active");
    });

    // Activatebox
    box.style.backgroundColor = box.dataset.color;
    box.textContent = "Dragged ";
    box.classList.add("active");
  });

  // Mouseleaves
  box.addEventListener("mouseleave", function () {
    document.body.style.cursor = "default";
  });

});

