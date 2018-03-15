import * as React from 'react';
import { TweenMax, TweenLite, Cubic, Quart } from 'gsap';

import * as $ from 'jquery';
import './nav.scss';

interface Props{
    isOpen : boolean;
    handleMenuClick : any;
}

class Nav extends React.Component<Props>{

    //variables
    nav:JQuery<HTMLElement>;
    line:JQuery<HTMLElement>;
    close:JQuery<HTMLElement>;
    title:JQuery<HTMLElement>;
    box:JQuery<HTMLElement>;
    link:JQuery<HTMLElement>;
    componentDidMount(){
        this.nav = $('.jl-nav');
        this.line = $('.jl-nav__line');
        this.close = $('.jl-nav__close');
        this.link = $('.jl-nav__menu__link');
        this.title = $('.jl-nav__menu__link__title');
        this.box = $('.jl-nav__menu__title__box');
    }

    componentWillReceiveProps(nextProps : Props){
        this.handleAnimation(nextProps.isOpen);
    }

    closeMenu = () =>{
        this.nav.removeClass('is-open');
    }
    animationsComplete = () =>{
        TweenMax.to(this.close, 0.5, { opacity: 1});
        TweenMax.to(this.box, 0.4, { x:'0%' , onComplete:()=>{
            this.link.addClass('border');
            TweenMax.to(this.title, 0.2, { opacity: 1});
            TweenMax.to(this.box, 0.4,{ x:'105%', ease: Cubic.easeIn });
        }, ease: Cubic.easeOut});
    }

    handleAnimation = (isOpen:boolean)=>{
        if( isOpen ){
            this.nav.addClass('is-open');
            TweenMax.staggerTo(this.line, 0.5, { y:"0%", ease : 'Cubic.easeIn'},  0.25/2, this.animationsComplete);
        }else{

            TweenMax.to(this.close, 0.5, { opacity: 0});
            TweenMax.to(this.title,0.5, { opacity:0});
            TweenMax.set(this.box, { x:'-110%' });
            this.link.removeClass('border');
            
            TweenMax.delayedCall(0.5,()=>{
                TweenMax.staggerTo(this.line, 0.5,{ y:"-100%", ease : 'Cubic.easeIn'},  0.25/2, this.closeMenu);
            });
        }
    }

    render(){
        return( 
            <div className="jl-nav">
                <div className="jl-nav__container_line">
                    <div className="jl-nav__line">
                        <div className="jl-nav__border__line"></div>
                    </div>
                    <div className="jl-nav__line">
                        <div className="jl-nav__border__line"></div>
                    </div>
                    <div className="jl-nav__line">
                        <div className="jl-nav__border__line"></div>
                    </div>
                    <div className="jl-nav__line last-line"></div>
                </div>
                <div className="jl-nav__close" onClick = { this.props.handleMenuClick }>
                    <div className="jl-nav__container__close">
                        <span className="jl-nav__close__x"></span>
                    </div>
                </div>
                <nav className="jl-nav__menu">
                    <ul className="jl-nav__menu__container">
                        <li>
                            <a className="jl-nav__menu__link">
                                <span className="jl-nav__menu__title__box"></span>
                                <span className="jl-nav__menu__link__title">Home</span>
                                <span className="jl-nav__menu__link__subtitle">go to home</span>
                            </a>
                        </li>
                        <li>
                            <a className="jl-nav__menu__link">
                                <span className="jl-nav__menu__title__box"></span>
                                <span className="jl-nav__menu__link__title">About</span>
                                <span className="jl-nav__menu__link__subtitle">know more about me</span>
                            </a>
                        </li>
                        <li>
                            <a className="jl-nav__menu__link">
                                <span className="jl-nav__menu__title__box"></span>
                                <span className="jl-nav__menu__link__title">Contact</span>
                                <span className="jl-nav__menu__link__subtitle">Get in touch</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Nav;
