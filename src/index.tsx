import * as React from 'react';
import { render } from 'react-dom';

import Header from './views/header';

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
