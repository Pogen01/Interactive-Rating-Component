function submit_button(){
    document.getElementById("hide").classList.toggle("hide")
    document.getElementById("open").classList.toggle("hide")
}

const ratings = document.querySelectorAll('.ratings');

let clickedRating = null;

function toggleActive_getRating() {
  let chosen_rating;
  if (clickedRating)
    clickedRating.classList.remove('active');
  this.classList.add('active');
  chosen_rating = this.innerHTML
  document.getElementById("user-rating").innerHTML = chosen_rating
  clickedRating = this;
}

ratings.forEach(ratings => ratings.addEventListener('click', toggleActive_getRating));
