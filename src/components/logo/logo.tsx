import * as React from 'react';
import './logo.scss';

interface IProps{
    name: string
    container: string

}

class Logo extends React.Component<IProps>{
    render(){
        return( 
            <div className={this.props.container}>
                <svg className={this.props.name} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 29.5"><rect x="9.2" width="6.5" height="20.31"/><rect y="13.8" width="6.5" height="6.54"/><rect x="27.5" y="13.8" width="6.5" height="6.54"/><rect x="18.3" width="6.5" height="20.31"/><rect x="51.9" y="58.3" width="6.5" height="15.69" transform="translate(-40 81.3) rotate(-90)"/><rect x="33.6" y="58.3" width="6.5" height="15.69" transform="translate(-58.3 63) rotate(-90)"/></svg>
            </div>
        )
    }
}
export default Logo;
