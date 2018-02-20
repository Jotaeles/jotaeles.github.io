import * as React from 'react';
import { render } from 'react-dom';
import './index.scss';

import Header from './components/header/header';

class App extends React.Component{
    render(){
        return( 
            <div>
                <Header></Header>
            </div>
        )
    }
}
render(<App />, document.getElementById('jl-app'));
