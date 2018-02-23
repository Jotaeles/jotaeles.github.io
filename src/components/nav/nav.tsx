import * as React from 'react';
import './nav.scss';

class Nav extends React.Component{
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
                    <div className="jl-nav__line"></div>
                </div>
            </div>
        )
    }
}
export default Nav;
