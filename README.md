# Frontend Mentor - Room homepage

![Design preview for the Room homepage coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [Intro](#intro)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Features](#features)
  - [Useful resources](#useful-resources)

## Overview

### Intro
Hello! This is my solution to [Room Homepage - Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq) challenge. The challenge was more difficult than I thought but it was fun to get throught the problems I faced.

⭐**Featured solution in [Vol. 50 of the Frontend Mentor Newsletter](https://mailchi.mp/e298ca965958/frontend-mentor-newsletter-vol-53?e=212d9dcf83).**


### The challenge

>Your challenge is to build out this e-commerce homepage and get it looking as close to the design as possible.
>
>You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
>
>Your users should be able to:
>
>- View the optimal layout for the site depending on their device's screen size
>- See hover states for all interactive elements on the page
>- Navigate the slider using either their mouse/trackpad or keyboard

### Links

[LIVE PREVIEW](https://roomhomepage-tediko.netlify.app/)

[Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

## My process

### Built with

 - Flexbox
 - Grid
 - SCSS
 - Javascript
 - Mobile first
 - Semantic HTML5 markup
 - Intersection observer API

### Features

- `:focus-visible` pseudo class. This selector only indicate focus when it is helpful to the user - such as in cases where the user interacts with the page via a keyboard or some other non-pointing device. It isn't supported by Safari yet, but there is simple [workaround](https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press).
- This is first time i used `@extend` rule. Since my modifier classes `kv__hero-bg--1/2/3` all uses styles from `kv__hero-bg`. I extend this class and it allowed me to remove unnecessary class from HTML code.
- Added sticky nav menu using Intersection Observer API. This time i make it to be just hamburger with background after scroll, not sure if it's pretty but i want to have some fun.
- Added `backdrop-filter` to opacity background when nav mobile is open. It provide effect such as blurring. (no Firefox support yet tho).
- I experimented with `clip-path` to create this slide transition effect on my background slider.
- Added `aria-live="polite"` to my `.kv__intro` element to expose dynamic content changes in a way that can be announced by assistive technologies after my slider change content within that element.
- Implement `prefers-reduced-motion` CSS media feature which is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses. Prevent animations in brief.
- Tried to create more accessible mobile navigation. Used the `aria-expanded` and `aria-controls` attributes.

### Useful resources
 
- [Stackoverflow](https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press) - Backwards Compatibility explain for `:focus-visible` selector.