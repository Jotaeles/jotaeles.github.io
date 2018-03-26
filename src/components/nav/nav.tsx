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
    subtitle:JQuery<HTMLElement>;
    box:JQuery<HTMLElement>;
    link_menu:JQuery<HTMLElement>;
    social_list:JQuery<HTMLElement>;
    borderline:JQuery<HTMLElement>;
    
    componentDidMount(){
        this.nav = $('.jl-nav');
        this.line = $('.jl-nav__line');
        this.close = $('.jl-nav__close');
        this.link_menu = $('.jl-nav__menu__link');
        this.subtitle = $('.jl-nav__menu__link__subtitle');
        this.box = $('.jl-nav__menu__title__box');
        this.social_list = $('.jl-social__list');
        this.borderline = $('.jl-nav__border__line');
    }

    componentWillReceiveProps(nextProps : Props){
        this.handleAnimation(nextProps.isOpen);
    }

    closeMenu = () =>{
        this.nav.removeClass('is-open');
    }
    animationsComplete = () =>{
        TweenMax.staggerTo(this.borderline, 0.5,{ height:'100%', ease : 'Cubic.easeIn' }, 0.25/2 );
        TweenMax.delayedCall(1,()=>{
            TweenMax.to(this.close, 0.5, { opacity: 1});
            TweenMax.to(this.link_menu, 0.5, { y: 0, opacity: 1, ease: Cubic.easeOut});
            TweenMax.to(this.social_list, 0.5, { y: 0, opacity: 1, ease: Cubic.easeOut});
        });
    }

    handleAnimation = (isOpen:boolean)=>{
        if( isOpen ){
            this.nav.addClass('is-open');
            TweenMax.staggerTo(this.line, 0.5, { y:"0%", ease : 'Cubic.easeIn'},  0.25/2, this.animationsComplete);
        }else{

            TweenMax.to(this.close, 0.5, { opacity: 0});
            TweenMax.to(this.link_menu, 0.5, { y: 40, opacity: 0, ease: Cubic.easeIn});
            TweenMax.to(this.social_list, 0.5, { y: 40, opacity: 0, ease: Cubic.easeIn});
            
            TweenMax.delayedCall(0.5,()=>{
                TweenMax.staggerTo(this.borderline, 0.5,{ height:'0%', ease : 'Cubic.easeIn' }, 0.25/2 );
            });
            TweenMax.delayedCall(1,()=>{
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
                                <span className="jl-nav__menu__link__title">home</span>
                                <span className="jl-nav__menu__link__subtitle">go to home</span>
                            </a>
                        </li>
                        <li>
                            <a className="jl-nav__menu__link">
                                <span className="jl-nav__menu__title__box"></span>
                                <span className="jl-nav__menu__link__title">about</span>
                                <span className="jl-nav__menu__link__subtitle">know more about me</span>
                            </a>
                        </li>
                        <li>
                            <a className="jl-nav__menu__link">
                                <span className="jl-nav__menu__title__box"></span>
                                <span className="jl-nav__menu__link__title">contact</span>
                                <span className="jl-nav__menu__link__subtitle">Get in touch</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="jl-social">
                    <div className="jl-social__container">
                        <div className="jl-social__list"><a className="jl-social__list__link" href="#">Instagram</a></div>
                        <div className="jl-social__list"><a className="jl-social__list__link" href="#">LinkedIn</a></div>
                        <div className="jl-social__list"><a className="jl-social__list__link" href="#">Facebook</a></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;
