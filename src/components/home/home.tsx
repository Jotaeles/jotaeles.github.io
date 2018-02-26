import * as React from 'react';
import './home.scss';

class Home extends React.Component{
    render(){
        return(
            <div className='jl-home'>
                <div className="jl-home__container">
                    <div className="jl-home__welcome">
                        <h1 className="jl-home__welcome__title">Hello</h1>
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