
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
 
  //data to local storage
  // saveData();
  // marks list item checked
  paragraph.addEventListener("click",function(){
    paragraph.style.textDecoration = "line-through";

    // saveData();
  })
  // To remove item from list (double click)
  paragraph.addEventListener("dblclick",function(){
   toDoContainer.removeChild(paragraph);
  //  saveData();
  })
  paragraph.addEventListener("dblclick",function(){
    toDoContainer.removeChild(paragraph);
   //  saveData();

   })
   
})

// function saveData(){
//   localStorage.setItem("task",listContainer.innerHTML);
// }

//Display data when we open or close website
// function showTak(){
//   listContainer.innerHTML = localStorage.getItem("task");
// }
// showTak();