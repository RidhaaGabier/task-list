let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField =  document.getElementById("inputField");

// action when clicked
  addToDoButton.addEventListener("click",function(){
  let paragraph = document.createElement('p')
  // styles the text after submitted
  paragraph.classList.add('paragraph-styling')
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  // empty input after value submitted
  inputField.value = "";
  // marks list item checked
  paragraph.addEventListener("click",function(){
    paragraph.style.textDecoration = "line-through";
  })
  // To remove item from list (double click)
  paragraph.addEventListener("dblclick",function(){
    paragraph.style.textDecoration = "line-through";
  })
})