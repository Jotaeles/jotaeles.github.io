import * as React from 'react';
import './header.scss';

interface Props{
    handleMenuClick : any;
}

class Header extends React.Component<Props>{
    render(){
        return( 
            <header className="jl-header">
                <div className="jl-header__container">
                    <div className="jl-header-logo__container">
                        <div className="jl-header-logo__line"></div>
                        <div className="jl-logo">
                            <div className="jl-logo__name">jotaeles</div>
                        </div>
                    </div>
                    <div className="jl-header-menu__burger">
                        <div className="jl_header-menu__burger__container" onClick={this.props.handleMenuClick}>
                            <div className="jl-menu__burger__container">
                                <span className="jl_menu_burger"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;
