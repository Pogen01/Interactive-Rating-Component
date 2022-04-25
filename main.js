// function user_input_1(){
//     user_rating = document.getElementById("ratings_1").innerHTML
//     document.getElementById("user-rating").innerHTML = user_rating
// }

// function user_input_2(){
//     ratings_2.classList.toggle("active");
//     user_rating = document.getElementById("ratings_2").innerHTML
//     document.getElementById("user-rating").innerHTML = user_rating
// }

// function user_input_3(){
//     user_rating = document.getElementById("ratings_3").innerHTML
//     document.getElementById("user-rating").innerHTML = user_rating
// }

// function user_input_4(){
//     user_rating = document.getElementById("ratings_4").innerHTML
//     document.getElementById("user-rating").innerHTML = user_rating
// }

// function user_input_5(){
//     user_rating = document.getElementById("ratings_5").innerHTML
//     document.getElementById("user-rating").innerHTML = user_rating
// }
//Old Process Above - thoughts?, thought I might come back to this to see how much I learned!


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
