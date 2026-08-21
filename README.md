# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- ## [Author](#author)

## Overview

### The challenge

users should be able to:

- See the social media share links when they click the share icon
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Desktop version

#### Tablet version

#### Mobile version

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- **Semantic HTML5 markup** - For structuring the card content, author information, and sharing portals cleanly.
- **Sass / SCSS** - Used for nested rules, managing theme variables (like `$very-Dark-Grayish-Blue`), and organizing our code modularly (such as our `_card.scss` file).
- **Flexbox** - Employed for card alignment, centering the content, and managing the precise 40/60 column split on desktop.
- **Mobile-first workflow** - Handcrafting the mobile interface globally first, then using media queries (`@media (min-width: 768px)`) for elegant desktop upgrades.
- **JavaScript** - Writing clean, decoupled DOM manipulation in an external `app.js` file to toggle active states dynamically on click.

### What I learned

- Structuring content using the correct HTML tags and Sass pre-processor nesting improved both readability and maintainability

- Using CSS pseudo-classes and absolute positioning helped implement interactive states like hover and focus, as well as display our custom tooltip bubble right above the circular share button

- Using CSS variables for our main colors and border radius to keep all our styling neat and consistent. Next, i added a simple JavaScript file (app.js) that listens for button clicks and toggles an .active class to update the page instantly.

### Continued development

- Smooth Animations: Add a gentle fade-and-slide effect to the share portal so it appears smoothly when opened.

- Better Accessibility: Add simple screen-reader tags (aria-expanded and aria-haspopup) to the button so assistive technology knows when it's open.

### Useful resources

- MDN Web Docs - This helped me understand how to declare and manage our color variables cleanly across our stylesheets. I really liked this pattern and will use it going forward.

- web.dev - This is an amazing platform which helped me finally understand how to implement mobile-first workflows and clean responsive media queries. I'd recommend it to anyone still learning this concept.

### AI Collaboration

- [Gemini Notebook (Mentor Frontend Assistant)](https://gemini.google.com) - Used as an interactive, pedagogical coding partner to brainstorm SCSS structure and debug coordinate alignments. It worked exceptionally well for breaking down complex overflow bugs and absolute coordinates, though it deliberately didn't write the code for me.

- [GitHub Copilot](https://github.com/features/copilot) - Used as an inline autocomplete tool to accelerate typing redundant CSS values and JavaScript event listeners. It worked well for completing boilerplate code blocks, but sometimes suggested outdated syntax patterns.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
