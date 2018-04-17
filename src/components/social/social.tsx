import * as React from 'react';
import './social.scss';

import { TweenMax, TweenLite, Cubic, Quart } from 'gsap';
import * as $ from 'jquery';


class Social extends React.Component{

    socialLink:JQuery<HTMLElement>;

    componentDidMount(){
        this.socialLink = $('.jl-social__nav__link');
        this.handleAnimation();
    }
    
    handleAnimation(){
        TweenMax.delayedCall(0.75 ,() =>{
            TweenMax.to(this.socialLink, 0.5, { y:'0', opacity:1, ease: Cubic.easeOut });
        });
    }

    render(){
        return( 
            <div className="jl-social__nav">
                <ul className="jl-social__nav__container">
                    <li className="jl-social__nav__li"><a href="#" className="jl-social__nav__link">Instagram</a></li>
                    <li className="jl-social__nav__li"><a href="#" className="jl-social__nav__link">LinkedIn</a></li>
                    <li className="jl-social__nav__li"><a href="#" className="jl-social__nav__link">Facebook</a></li>
                </ul>
            </div>
        )
    }
}
export default Social;
