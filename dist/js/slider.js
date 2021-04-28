export default class Slider {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            backgrounds: 'data-bg',
            buttons: 'data-btn',
            intro: 'data-intro',
            introHeading: 'data-intro-heading',
            introText: 'data-intro-text',
            slideRightClass: 'slide-right',
            slideLeftClass: 'slide-left',
            slideClass: 'slide'
        }

        this.products = {
            0: {
                title: `Discover innovative ways to decorate`,
                desc: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
            },
            1: {
                title: `We are available all across the globe`,
                desc: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
            },
            2: {
                title: `Manufactured with the best materials`,
                desc: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
            }
        }

        this.backgrounds = document.querySelectorAll(`[${this.selectors.backgrounds}]`);
        this.buttons = document.querySelectorAll(`[${this.selectors.buttons}]`);
        this.intro = document.querySelector(`[${this.selectors.intro}]`);
        this.introHeading = document.querySelector(`[${this.selectors.introHeading}]`);
        this.introText = document.querySelector(`[${this.selectors.introText}]`);
        if (!this.backgrounds || !this.buttons || !this.intro || !this.introHeading || !this.introText) return false;

        this.index = 0;
        this.previousIndex = 0;
        this.enabled = true;

        return true;
    }

    setupEvents() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (event) => this.changeSlide(event));
        })
    }

    changeSlide(event) {
        if (!this.enabled) return false;
        this.enabled = false;

        this.setupIndex(event);
        this.slideClass = this.direction == 'next' ?
            `${this.selectors.slideRightClass}` :
            `${this.selectors.slideLeftClass}`;

        this.backgrounds[this.index].classList.add(`${this.slideClass}`);
        this.backgrounds[this.index].style.zIndex = '3';
        this.backgrounds[this.previousIndex].style.zIndex = '2';

        this.changeInfo()
        this.watchForAnimationend();
    }

    changeInfo() {
        this.intro.classList.add(`${this.selectors.slideClass}`);

        setTimeout(() => {
            this.introHeading.innerText = `${this.products[this.index].title}`;
            this.introText.innerText = `${this.products[this.index].desc}`;
        }, 500)
    }

    watchForAnimationend() {
        this.backgrounds.forEach(bg => {
            bg.addEventListener('animationend', () => {
                this.backgrounds[this.previousIndex].classList.remove(`${this.selectors.slideRightClass}`, `${this.selectors.slideLeftClass}`);
                this.backgrounds[this.previousIndex].style.zIndex = '';

                this.intro.classList.remove(`${this.selectors.slideClass}`);

                this.enabled = true;
            })
        })
    }

    setupIndex(event) {
        this.direction = event.target.dataset.btn;
        this.direction == 'next' ? this.index++ : this.index--;

        if (this.index > this.backgrounds.length - 1) {
            this.index = 0;
            this.previousIndex = this.backgrounds.length - 1;
        } else if (this.index < 0) {
            this.index = this.backgrounds.length - 1;
            this.previousIndex = 0;
        } else {
            this.previousIndex = this.direction == 'next' ? this.index - 1 : this.index + 1;
        }
    }
}