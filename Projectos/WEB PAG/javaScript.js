// get filter element
const filterElement = document.querySelector("input")
// get cards elements
const cardsElement = document.querySelectorAll('ul li')

// add input event for the filter element
filterElement.addEventListener("input", filterFunction)
// filter function
function filterFunction(){
    
  // if the filter is not empty
  if(filterElement.value != ""){
    console.log(filterElement.value)
    // for each card of cards
    for (let card of cardsElement){
      // get card heading (title)
      let title = card.querySelector("h2")
      // tranform to lower case
      title = title.textContent.toLowerCase();
      // transform filter text value to lower case
        let filterText = filterElement.value.textContent
        filterText = filterText.textContent.toLowerCase()
      // if card title does not include the filter text
      if(!title.includes(filterText)){
        // hide the card element
        card.style.display = "none"
      }// else
      else{
          // unhide the card element
        card.style.display = "block"
      }
    } 
  } // else
  
    
    // for each card of cards
      // unhide the card element
  
}



