document.addEventListener("DOMContentLoaded", function() {
  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");
  const resetBtn = document.getElementById("resetBtn");
  const successMessage = document.createElement("p");
  successMessage.classList.add("success-message");

  let draggedItem = null;

  // Add dragstart event listener to items in container1
  container1.addEventListener("dragstart", function(event) {
    draggedItem = event.target;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", event.target.textContent);
    event.target.classList.add("dragging");
  });

  // Add dragend event listener to items in container1
  container1.addEventListener("dragend", function(event) {
    event.target.classList.remove("dragging");
  });

  // Add dragenter event listener to container2
  container2.addEventListener("dragenter", function(event) {
    event.preventDefault();
    event.target.classList.add("highlight");
  });

  // Add dragover event listener to container2
  container2.addEventListener("dragover", function(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  // Add dragleave event listener to container2
  container2.addEventListener("dragleave", function(event) {
    event.target.classList.remove("highlight");
  });

  // Add drop event listener to container2
  container2.addEventListener("drop", function(event) {
    event.preventDefault();
    event.target.classList.remove("highlight");
    const data = event.dataTransfer.getData("text/plain");
    const newItem = document.createElement("li");
    newItem.textContent = data;
    container2.appendChild(newItem);
    container2.appendChild(successMessage);
    successMessage.textContent = "Item dropped successfully!"; 
    setTimeout(function() {
      message.innerHTML = "Item dropped successfully!";
    }, 2000); // Remove the success message after 2 seconds
 
  });

  // Add click event listener to reset button
  resetBtn.addEventListener("click", function() {
    container2.innerHTML = "update";
    successMessage.textContent = "Item dropped successfully!";
  });
});
