import * as React from 'react';
import { TweenMax } from 'gsap';

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
    componentDidMount(){
        this.nav = $('.jl-nav');
        this.line = $('.jl-nav__line');
    }

    componentWillReceiveProps(nextProps : Props){
        this.handleAnimation(nextProps.isOpen);
    }

    allComplete = () =>{
        this.nav.removeClass('is-open');
    }

    handleAnimation = (isOpen:boolean)=>{
        if( isOpen ){
            this.nav.addClass('is-open');
            TweenMax.staggerTo(this.line, 0.5,{ y:"0%", ease : 'Cubic.easeIn'},  0.25/2);
        }else{
            TweenMax.staggerTo(this.line, 0.5,{ y:"-100%", ease : 'Cubic.easeIn'},  0.25/2, this.allComplete);
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
                <div className="jl-nav__close" onClick = { this.props.handleMenuClick }>close</div>
            </div>
        )
    }
}
export default Nav;
