//Control Image Carosuel
function startCarousel() {
    let activeImage = 0
    const images = document.querySelectorAll("carousel img")

    function cycleImages() {
        if(!images[activeImage]) {
            clearInterval(intervalId)
            return;
        }

        images[activeImage].classList.remove('active')
        activeImage = (activeImage + 1) % images.length
        images[activeImage].classList.add('active')
    }

    let intervalId = setInterval(cycleImages, 3000)
}


//Handle Edit Requests
function editItem(id, name, description) {
  document.getElementById('updateId').value = id

  document.getElementById('updateName').value = name
  document.getElementById('updateDescription').value = description

  document.getElementById('updateForm').action = `/item/update/${id}`
}


//Handle Delete Requests

//Handle Errors from server if unable to write data (optional)
function checkForError() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('error')) {
    alert("Validation failed. Name and description are required.");
  }
}

window.onload = function() {
  startCarousel();
  checkForError();
}