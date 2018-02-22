import * as React from 'react';
import { render } from 'react-dom';
import './index.scss';

import Header from './components/header/header';
import Nav from './components/nav/nav';

class App extends React.Component{
    render(){
        return( 
            <div className="jl-wrap">
                <Header></Header>
                <Nav></Nav>

            </div>
        )
    }
}
render(<App />, document.getElementById('jl-app'));
