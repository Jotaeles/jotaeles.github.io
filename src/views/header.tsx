import * as React from 'react';

class Header extends React.Component{
    render(){
        return( 
            <header>
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
