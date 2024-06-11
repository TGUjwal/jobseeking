let bookmark = document.getElementsByClassName('bookmark')
Array.from(bookmark).forEach(v => v.addEventListener('click', function () {

    let el = this.parentElement.getElementsByClassName('bookmark')[0]

    if (el.classList.contains("fa-heart-o")) {
        el.classList.remove("fa-heart-o")
        el.classList.add("fa-heart")
        el.innerText = "Job saved"

    } else {
        el.classList.remove("fa-heart")
        el.classList.add("fa-heart-o")
        el.innerText = "Save Job"
    }
    // JavaScript for toggling the navbar on smaller screens
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const mainMenu = document.querySelector('#mainMenu');
    navbarToggler.addEventListener('click', function() {
      mainMenu.classList.toggle('collapse');
    });
  });
  
  // JavaScript for the search button functionality
  document.querySelector('.search-job .btn').addEventListener('click', function() {
    const skills = document.querySelector('.search-job input[placeholder="Skills, Job Title, Designation"]').value;
    const location = document.querySelector('.search-job input[placeholder="Location"]').value;
    const experience = document.querySelector('.search-job input[placeholder="Experience"]').value;
    console.log(`Searching for jobs with Skills: ${skills}, Location: ${location}, Experience: ${experience}`);
    // Implement the job search functionality here
  });
  
  // JavaScript for the bookmark (Save Job) functionality
  const bookmarkIcons = document.querySelectorAll('.fa-heart-o.bookmark');
  bookmarkIcons.forEach(function(bookmarkIcon) {
    bookmarkIcon.addEventListener('click', function() {
      bookmarkIcon.classList.toggle('fa-heart');
      bookmarkIcon.classList.toggle('fa-heart-o');
      if (bookmarkIcon.classList.contains('fa-heart')) {
        console.log('Job saved');
        // Implement the save job functionality here
      } else {
        console.log('Job removed from saved');
        // Implement the remove job from saved functionality here
      }
    });
  });
  
}));