import React from 'react';
import Lobster from './SiteImages/lobster.jpg'
import PageBox from './Components/Pagebox';

class Home extends React.Component {
    render() {
        return <div>
            <img src={Lobster} className="SplashImage"></img>
            <PageBox>This is an awesome Home Page!!!!!</PageBox>
        </div>
    }
}

export default Home;