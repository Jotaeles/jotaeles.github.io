import * as React from 'react';
import './main.scss';



class Main extends React.Component{
    render(){
        return( 
            <main className="jl-main">
                <div className="jl-nav_links__container">
                    <div className="jl-nav__link about_link">
                        <div className="jl-nav__link__about">About</div>
                    </div>
                    <div className="jl-nav__link contact_link">
                        <div className="jl-nav__link__contact">Contact</div>
                    </div>
                </div>
                <div className="jl-social">
                    <div className="jl-social__container">
                        <div className="jl-social__link">Facebook</div>
                        <div className="jl-social__link">Instagram</div>
                        <div className="jl-social__link">LinkedIn</div>
                    </div>
                </div>
            </main>
        )
    }
}
export default Main;
