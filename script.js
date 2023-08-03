// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let row = document.querySelectorAll('.row')
let textArea = document.querySelectorAll("textArea")





$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  
  addEventListener("click", function(e){
    
    if(e.target.matches('i')) {

      localStorage.setItem(e.target.parentElement.parentElement.id, e.target.parentElement.previousElementSibling.value)

    }

  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  for (let i = 0; i < row.length; i++) {

    if (parseInt(row[i].dataset.time) > dayjs().hour()) {
      row[i].setAttribute("class", "row time-block future")
    } else if (parseInt(row[i].dataset.time) < dayjs().hour()) {
      row[i].setAttribute("class", "row time-block past")
    } else {
      row[i].setAttribute("class", "row time-block present")
    }

  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  textArea[0].textContent = localStorage.getItem("hour-9")
  textArea[1].textContent = localStorage.getItem("hour-10")
  textArea[2].textContent = localStorage.getItem("hour-11")
  textArea[3].textContent = localStorage.getItem("hour-12")
  textArea[4].textContent = localStorage.getItem("hour-13")
  textArea[5].textContent = localStorage.getItem("hour-14")
  textArea[6].textContent = localStorage.getItem("hour-15")
  textArea[7].textContent = localStorage.getItem("hour-16")
  textArea[8].textContent = localStorage.getItem("hour-17")

  // TODO: Add code to display the current date in the header of the page.

  $('#currentDay').text(dayjs().format('MM/DD/YYYY'))

});
