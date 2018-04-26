import * as React from 'react';
import './main.scss';

import Contact from './../contact/contact';



class Main extends React.Component{
    render(){
        return( 
            <main className="jl-main">
                <div className="jl-logo">
                    <div className="jl-logo__container">
                        <div className="jl-logo__text">Jotaeles</div>
                    </div>
                </div>
                <div className="jl-nav_links">
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
                <div className="jl-body">
                    <div className="jl-body__container">
                        <div className="jl-body__box">
                            <div className="jl-body__box__rectangle"></div>
                        </div>
                        <div className="jl-body__content">
                            <div className="jl-body__title">
                                <h1 className="jl-title__text">
                                    Hello.   
                                </h1>
                            </div>
                            <div className="jl-body__subtitle">
                                <h2 className='jl-body__subtitle__text'>
                                    I am Luis, Frontend Developer based in Coahuila, México.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jl-modal">
                    <div className="jl-modal__overlay">
                        <div className="jl-modal__header">
                            <div className="jl-modal__close">
                                <span className="jl-modal__close__line"></span>
                                <span className="jl-modal__close__line"></span>
                            </div>
                        </div>
                        <div className="jl-modal__body">
                            <Contact/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default Main;
