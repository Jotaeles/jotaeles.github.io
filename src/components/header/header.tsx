import * as React from 'react';
import './header.scss';

import { TweenMax, TweenLite, Cubic, Quart } from 'gsap';
import * as $ from 'jquery';

interface Props{
    handleMenuClick : any;
}

class Header extends React.Component<Props>{

    burger:JQuery<HTMLElement>;
    logo:JQuery<HTMLElement>;

    componentDidMount(){
        this.burger = $('.jl-header-menu__burger');
        this.logo = $('.jl-logo');
        this.handleAnimation();
    }

    handleAnimation(){
        TweenMax.delayedCall(0.5,()=>{
            TweenMax.to(this.burger, 0.5, { opacity: 1, y:0, ease: Cubic.easeOut });
            TweenMax.to(this.logo, 0.5, { opacity: 1, y: 0, ease: Cubic.easeOut });
        });
    }
    render(){
        return( 
            <header className="jl-header">
                <div className="jl-header__container">
                    <div className="jl-header-logo__container">
                        <div className="jl-header-logo__line"></div>
                        <div className="jl-logo">
                            <div className="jl-logo__name">Jotaeles</div>
                        </div>
                    </div>
                    <div className="jl-header-menu__burger">
                        <div className="jl_header-menu__burger__container" onClick={this.props.handleMenuClick}>
                            <div className="jl-menu__burger__container">
                                <span className="jl_menu_burger"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;
