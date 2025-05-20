# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/Joshk7/room-homepage](https://github.com/Joshk7/room-homepage)
- Live Site URL: [https://room-homepage-seven-omega.vercel.app](https://room-homepage-seven-omega.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS

### What I learned

I wanted to do this challenge just to familiarize myself with animations. I used SCSS to partition
all of my animation styles into one file:

```scss
@keyframes fadeImage {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeContent {
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.fade {
  &__image {
    animation: fadeImage 0.5s ease-out;
  }

  &__content {
    animation: fadeContent 0.5s ease-out;
  }
}
```

These are both pretty minimal with just having two states, but I liked that the animation effect
fit into the fade classes so that I could use them when working with javascript to apply animations
whenever I press a button.

### Useful resources

- [https://www.joshwcomeau.com/animation/keyframe-animations](https://www.joshwcomeau.com/animation/keyframe-animations) - This resource by Josh Comeau is very helpful for learning how to layout animations with keyframes.

## Author

- Website - [https://joshuakahlbaugh.pages.dev](https://joshuakahlbaugh.pages.dev)
- Frontend Mentor - [@Joshk7](https://www.frontendmentor.io/profile/Joshk7)
