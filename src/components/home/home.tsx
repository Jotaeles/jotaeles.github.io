import * as React from 'react';
import './home.scss';

import { TweenMax, TweenLite, Cubic, Quart } from 'gsap';
import * as $ from 'jquery';


class Home extends React.Component{

    title:JQuery<HTMLElement>;
    subtitle:JQuery<HTMLElement>;
    box:JQuery<HTMLElement>;

    componentDidMount(){
        this.title = $('.jl-home__welcome__title');
        this.subtitle = $('.jl-home__welcome__subtitle');
        this.box = $('.jl-home__welcome__title_box');
        this.handleAnimation();
    }

    handleAnimation(){
        TweenMax.to(this.box, 0.4, { x:'0%', onComplete:()=>{
            TweenMax.to(this.box, 0.4, { delay: 0.2, x:'100%', ease: Cubic.easeOut});
            TweenMax.to(this.title, 0.2, { opacity: 1 });
            TweenMax.to(this.subtitle, 0.8, { opacity: 1, y: 0 });
        },ease: Cubic.easeIn });
    }

    render(){
        return(
            <div className='jl-home'>
                <div className="jl-home__container">
                    <div className="jl-home__welcome">
                        <div className="jl-home__welcome__title__container">
                            <h1 className="jl-home__welcome__title">Hello.</h1>
                            <div className="jl-home__welcome__title_box"></div>
                        </div>
                        <h2 className="jl-home__welcome__subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem minus modi aliquid fugiat, reprehenderit distinctio expedita, et quidem corporis, quisquam laborum voluptas voluptatibus. Officiis consectetur reiciendis aspernatur nesciunt amet minus!</h2>
                    </div>
                    <div className="jl-home__picture">
                        <div className="jl-home__picture__box--image"></div>
                        <div className="jl-home__picture__box--image"></div>
                        <div className="jl-home__picture__box--image"></div>
                        <div className="jl-home__picture__box--image"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;