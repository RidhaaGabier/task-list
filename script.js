let addInputButton = document.getElementById("addInput-btn");
let toDoContainer = document.getElementById("toDoContainer");
let inputResult =  document.getElementById("inputResult");

// action when clicked
  addInputButton.addEventListener("click",function(){
  let paragraph = document.createElement('p')
  // styles the text after submitted
  paragraph.classList.add('paragraph-styling')
  paragraph.innerText = inputResult.value;
  toDoContainer.appendChild(paragraph);
  // empty input after value submitted
  inputResult.value = "";
  // marks list item checked
  paragraph.addEventListener("click",function(){
    paragraph.style.textDecoration = "line-through";
  })
  // To remove item from list (double click)
  paragraph.addEventListener("dblclick",function(){
    paragraph.style.textDecoration = "line-through";
  })
})