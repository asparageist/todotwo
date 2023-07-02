//BL
function Task() {
  this.task = {};
}


//UI

function handleFormSub(event) {
  event.preventDefault();
  const doWhat = document.querySelector("input#new-task").value;
  console.log(doWhat);
}

window.addEventListener("load", function() {
  document.querySelector("form#new-task").addEventListener("submit", handleFormSub);
});