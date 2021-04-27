export default class ToggleMenu {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }
    
    vars() {
        this.selectors = {
            hamburger: 'data-hamburger',
            nav: 'data-nav',
            overlay: 'data-overlay'
        };

        this.hamburger = document.querySelector(`[${this.selectors.hamburger}]`);
        this.nav = document.querySelector(`[${this.selectors.nav}]`);
        this.overlay = document.querySelector(`[${this.selectors.overlay}]`);
        
        if (!this.hamburger || !this.nav || !this.overlay) return false;

        this.expanded = this.hamburger.getAttribute('aria-expanded') === 'false' ? false : true;
        this.open = false;
        this.timer = false;
        return true;
    }

    // Hamburger event listener
    setupEvents() {
        this.hamburger.addEventListener('click', () => this.toggle());
    }

    // Toggle hamburger menu
    toggle() {
        !this.open ? this.show() : this.hide();
    }

    // Animation while hamburger is open
    show() {
        this.hamburger.style.pointerEvents = "none";

        this.nav.classList.add('hamburger--active');
        this.nav.classList.add('nav-open');
        this.overlay.classList.add('active');

        this.expanded = !this.expanded;
        this.hamburger.setAttribute('aria-expanded', this.expanded);
        this.open = true;
        
        this.timer = window.setTimeout(() => {
            this.hamburger.style.pointerEvents = "all";
            this.timer = false;
        }, 250);
    }

    // Animation while hamburger is closed
    hide() {
        this.hamburger.style.pointerEvents = "none";

        this.nav.classList.remove('hamburger--active');
        this.overlay.classList.remove('active');
        this.nav.classList.add('nav-close');
        
        this.expanded = !this.expanded;
        this.hamburger.setAttribute('aria-expanded', this.expanded);

        this.timer = window.setTimeout(() => {
            this.nav.classList.remove('nav-open');
            this.nav.classList.remove('nav-close');
            this.hamburger.style.pointerEvents = "all";
            this.timer = false;
        }, 500);
        this.open = false;
    }
}