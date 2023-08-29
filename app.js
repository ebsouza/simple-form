var form = document.getElementById('form');
var modal = document.getElementById("my-modal");
var modalSpan = document.getElementsByClassName("close")[0];


// --- HTML elements

modalSpan.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


form.addEventListener('submit', function(event){
  event.preventDefault()

  var userText = document.getElementById("text").value
  
  var message = generateMessage(userText)

  createModal(message);

  document.getElementById("text").value = "";
})


// --- App functions

function createModal(message){
  modal.style.display = "block";
  document.getElementById("model-text").innerText = message;
};


function wordCount(text){
  if(text) {
    return text.trim().split(/\s+/).length;
  } else {
    return 0;
  }
};


function generateMessage(userText){
  var numberOfWords = wordCount(userText) 
  return `Congratulations, you wrote ${numberOfWords} words.`;
};
