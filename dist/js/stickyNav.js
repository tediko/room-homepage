export default class StickyNav {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            header: 'data-header',
            nav: 'data-nav',
            sectionKv: 'data-kv',
            activeClass: 'nav-scroll'
        }

        this.header = document.querySelector(`[${this.selectors.header}]`);
        this.nav = document.querySelector(`[${this.selectors.nav}]`);
        this.sectionKv = document.querySelector(`[${this.selectors.sectionKv}]`);
        if (!this.header || !this.nav || !this.sectionKv) return false;

        this.isInitialized = false;

        return true;
    }

    setupEvents() {
        this.navObserver(this.sectionKv);
    }

    navObserver(element) {
        this.options = {
            rootMargin: '0px',
            threshold: 0.8
        }

        this.animations = {
            fadeIn: [
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                }
            ],
            fadeOut: [
                {
                    opacity: 1,
                },
                {
                    opacity: 0,
                }
            ]
        }
        
        this.observer = new IntersectionObserver(entries => {
            if (this.isInitialized) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        this.animNavIn = this.nav.animate(this.animations.fadeIn, {
                            duration: 600,
                        })

                        this.header.classList.add(`${this.selectors.activeClass}`)
                    } else {
                        this.animNavOut = this.header.animate(this.animations.fadeOut, {
                            duration: 200,
                        });

                        this.animNavOut.onfinish = () => {
                            this.header.classList.remove(`${this.selectors.activeClass}`);
                        }
                    }
                })
            }
            this.isInitialized = true;
        }, this.options)

        this.observer.observe(element);
    }
}