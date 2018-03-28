import * as React from 'react';
import './social.scss';



class Social extends React.Component{
    render(){
        return( 
            <div className="jl-social__nav">
                <ul className="jl-social__nav__container">
                    <li className="jl-social__nav__li"><a href="#" className="jl-social__nav__link">Instagram</a></li>
                    <li className="jl-social__nav__li"><a href="#" className="jl-social__nav__link">LinkedIn</a></li>
                    <li className="jl-social__nav__li"><a href="#" className="jl-social__nav__link">Facebook</a></li>
                </ul>
            </div>
        )
    }
}
export default Social;
