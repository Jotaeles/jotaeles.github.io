import * as React from 'react';
import './main.scss';

import Home from './../home/home';


class Main extends React.Component{
    render(){
        return( 
            <main className="jl-main">
                <Home/>
            </main>
        )
    }
}
export default Main;
