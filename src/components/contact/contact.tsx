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
                        <p className="jl-contact__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="jl-contact__message">
                            <a className="jl-contact__btn">Message</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;
