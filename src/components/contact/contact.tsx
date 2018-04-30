import * as React from 'react';
import './contact.scss';



class Contact extends React.Component{
    render(){
        return( 
            <div className="jl-contact">
                <div className="jl-contact-body">
                    <div className="jl-contact__box"></div>
                    <div className="jl-contact__content">
                        <h2 className="jl-contact__title">Get in touch</h2>
                        <p className="jl-contact__description">I'm available for freelance work.<br/>Feel free to contact me on <strong>jl_sandoval_salas@hotmail.com</strong></p>
                        <div className="jl-contact__message">
                            <a className="jl-contact__btn" href='mailTo:jl_sandoval_salas@hotmail.com'>Message</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;
