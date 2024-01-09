let slider = document.getElementById("myRange");
  let output = document.getElementById("demo");
  let container = document.getElementById("container");

  // Function to create the grid
  function createGrid(size) {
    // Clear previous grid
    container.innerHTML = "";

    output.innerHTML = "Number of squares: " + size + "X" + size;

    for (let i = 1; i <= size; i++) {
      // Create a new container div for each row
      let rowContainer = document.createElement("div");
        
      for (let j = 1; j <= size; j++) {
        let div = document.createElement('div');
        div.classList.add('blocks');
        rowContainer.appendChild(div);
      }

      // Append the row container to the main container
      container.appendChild(rowContainer);
    }
  }

  // Display the default grid
  createGrid(slider.value);

  // Update the grid when the slider value changes
  slider.addEventListener("input", function () {
    createGrid(slider.value);
  });

  // Change color of squares on hover
  container.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('blocks')) {
      event.target.classList.add('hovered');
    }
  });