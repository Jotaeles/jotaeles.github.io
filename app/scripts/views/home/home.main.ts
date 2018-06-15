import "../../../styles/views/home/home.scss";

import {TweenLite} from "gsap";

class HomeMain {

    private burger: JQuery;

    constructor() {

        this
            .cacheElements()
            .bindEvents();
    }
    private cacheElements(): this {
        const $$ = this;

        $$.burger = $(".jl-burger");

        return this;
    }
    private bindEvents(): this {
        const $$ = this;

        return this;
    }
}

new HomeMain();
