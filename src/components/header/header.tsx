import * as React from 'react';
import './header.scss';

class Header extends React.Component{
    render(){
        return( 
            <header className="jl-header">
                <div className="jl-header-logo__container">
                    <div className="jl-logo">
                        <div className="jl-logo__name">jotaeles</div>
                    </div>
                </div>
                <nav className="jl-header-nav__container">
                    <ul className="jl-header-nav__group">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;
