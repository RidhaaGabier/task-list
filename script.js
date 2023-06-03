let info = [];

let submit = document.getElementById("submit");
let toDoContainer = document.getElementById("toDoContainer");
let display = document.getElementById("display");



// action when clicked, "submit button"
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let inputResult = document.getElementById("inputResult").value;

  // Pushes data to localStorage
  info.push({
    inputResult
  });
  console.log(info);

  localStorage.setItem('data', JSON.stringify(info));
})

// Display on DOM, "display button"













+

display.addEventListener('click', (e) => {
  e.preventDefault();

  let displayInfo = document.getElementById('list-container')
  let myData = JSON.parse(localStorage.getItem('data'));

  if (myData) {
    displayInfo.innerHTML = '';
    
    //  function() {

    //  }

    myData.forEach(info => {
      let results = document.createElement('li');
      results.textContent = `
      ${info.inputResult}
      `;
      displayInfo.appendChild(results)
    
      // styles the text after submitted
      displayInfo.classList.add('paragraph-styling')
      // empty input after value submitted paragraph.innerText = inputResult.value;
      toDoContainer.appendChild(displayInfo);
      inputResult.value = "";

    });

    // marks list item checked
    displayInfo.addEventListener("click", function () {
      displayInfo.style.textDecoration = "line-through";

    })
    // To remove item from list (double click) 
    displayInfo.addEventListener("dblclick", function () {
      toDoContainer.removeChild(displayInfo);

    })
    
  } else {
    displayInfo.textContent = 'Please enter Data'
  }

});


// old data
