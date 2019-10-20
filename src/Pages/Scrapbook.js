import React from 'react';
import PageBox from './Components/Pagebox';


import bird1 from './ScrapbookImages/bird1.jpeg'
import bird2 from './ScrapbookImages/bird2.jpeg'
import bird3 from './ScrapbookImages/bird3.jpeg'

import building1 from './ScrapbookImages/building1.jpeg'
import building2 from './ScrapbookImages/building2.jpeg'
import building3 from './ScrapbookImages/building3.jpeg'
import building4 from './ScrapbookImages/building4.jpeg'
import building5 from './ScrapbookImages/building5.jpeg'
import building6 from './ScrapbookImages/building6.jpeg'
import building7 from './ScrapbookImages/building7.jpeg'

import ground1 from './ScrapbookImages/ground1.jpeg'
import ground2 from './ScrapbookImages/ground2.jpeg'
import ground3 from './ScrapbookImages/ground3.jpeg'
import ground4 from './ScrapbookImages/ground4.jpeg'
import ground5 from './ScrapbookImages/ground5.jpeg'
import ground6 from './ScrapbookImages/ground6.jpeg'
import ground7 from './ScrapbookImages/ground7.jpeg'
import ground8 from './ScrapbookImages/ground8.jpeg'

class Scrapbook extends React.Component {
    render() {
        return <PageBox>
        <p>Scrapbook</p>
        <div className="ScrapbookGrid">
        <p>Col 1</p>
        <p>Col 2</p>
        <p>Col 3</p>

        <img src={bird1} className="ScrapbookImage"></img>
        <img src={bird2} className="ScrapbookImage"></img>
        <img src={bird3} className="ScrapbookImage"></img>

        <img src={building1} className="ScrapbookImage"></img>
        <img src={building2} className="ScrapbookImage"></img>
        <img src={building3} className="ScrapbookImage"></img>
        <img src={building4} className="ScrapbookImage"></img>
        <img src={building5} className="ScrapbookImage"></img>
        <img src={building6} className="ScrapbookImage"></img>
        <img src={building7} className="ScrapbookImage"></img>


        <img src={ground1} className="ScrapbookImage"></img>
        <img src={ground2} className="ScrapbookImage"></img>
        <img src={ground3} className="ScrapbookImage"></img>
        <img src={ground4} className="ScrapbookImage"></img>
        <img src={ground5} className="ScrapbookImage"></img>
        <img src={ground6} className="ScrapbookImage"></img>
        <img src={ground7} className="ScrapbookImage"></img>
        <img src={ground8} className="ScrapbookImage"></img>
        </div>


        </PageBox>
    }
}

export default Scrapbook;