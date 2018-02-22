import * as React from 'react';
import './header.scss';

class Header extends React.Component{
    render(){
        return( 
            <header className="jl-header">
                <div className="jl-header__container">
                    <div className="jl-header-logo__container">
                        <div className="jl-logo">
                            <div className="jl-logo__name">jotaeles</div>
                        </div>
                    </div>
                    {/* <nav className="jl-header-nav__container">
                        <ul className="jl-header-nav__group">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav> */}
                    <div className="jl-header-menu__burger">
                        <div className="jl_header-menu__burger__container">
                            <span className="jl_menu_burger"></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;
