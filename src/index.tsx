import * as React from 'react';
import { render } from 'react-dom';
import './index.scss';

import Header from './components/header/header';
import Nav from './components/nav/nav';
import Main from './components/main/main';

interface State {
    isOpenMenu : boolean;
}

class App extends React.Component{

    state : State;

    constructor(props: any){
        super(props);
        this.state = {
            isOpenMenu : false
        }
    }

    handleMenuClick = ()=>{
        this.setState({
            isOpenMenu : !this.state.isOpenMenu
        });
        console.log('click');
    }
    render(){
        return( 
            <div className="jl-wrap">
                <Header handleMenuClick = { this.handleMenuClick } />
                <Nav 
                    isOpen = { this.state.isOpenMenu } 
                    handleMenuClick = { this.handleMenuClick } 
                />
                <Main/>
            </div>
        )
    }
}
render(<App />, document.getElementById('jl-app'));
