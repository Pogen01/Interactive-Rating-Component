# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview
Creating a interactive rating component with HTML, CSS Flexbox and JavaScript

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Desktop Preview](./screenshots/Desktop%20Preview.png)
![Mobile Preview](./screenshots/Mobile%20Preview.png)


### Links

- Solution URL: (https://your-solution-url.com)
- Live Site URL: https://ipogeni.github.io/Interactive-Rating-Component/

## My process
As always, I started the project with the boiler code. Copy pasted the contents in. Started working on the structure of the whole website. Started writing down the HTML first for the desktop view, finished all the markups and then moved to styling from top to bottom. While doing styling, i prefer an external stylesheet and putting all of my styles there. Started by giving a global clear then began to write my own styling codes! Created variables for all the colors to change them anytime in the future if needed to be! Styled the utility classes like button or links at the end of the stylesheet. Finishing the first page, made it hidden and worked on the second page. Finally for the functionality I added javaScript codes to the website.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to manipulate the document elements better with javascript in this project. 


```html
  <div id = "ratings" class="rating-numbers">  
    <a href="#"><div class = "ratings">1</div></a>
    <a href="#"><div class = "ratings">2</div></a>
    <a href="#"><div class = "ratings">3</div></a>
    <a href="#"><div class = "ratings">4</div></a>
    <a href="#"><div class = "ratings">5</div></a>
  </div>
 <div class="btn-submit" onclick="submit_button()">Submit</div
```
```js
function toggleActive_getRating() {
  let chosen_rating;
  if (clickedRating)
    clickedRating.classList.remove('active');
  this.classList.add('active');
  chosen_rating = this.innerHTML
  document.getElementById("user-rating").innerHTML = chosen_rating
  clickedRating = this;
}
```

### Continued development

I am still relatively less knowlegdable when it comes down to DOM, so in the future I would to work on it more!

## Author

- Website - [Protaya Roy](https://ipogeni.github.io/)
- Frontend Mentor - [Pogen](https://www.frontendmentor.io/profile/IPogenI)
- Github - [Pogen](https://github.com/IPogenI)
