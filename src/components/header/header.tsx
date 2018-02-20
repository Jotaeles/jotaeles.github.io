import * as React from 'react';
import './header.scss';

class Header extends React.Component{
    render(){
        return( 
            <header>
                <div>
                    <div className="jl__logo">
                        <figure>
                            <img src="#" alt="JOTAELES LOGO"/>
                        </figure>
                    </div>
                </div>
                <nav>
                    <ul>
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
