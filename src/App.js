import React from 'react';
import './App.css';


import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import PayingDues from './Pages/PayingDues';
import Scrapbook from './Pages/Scrapbook';
import ServiceCalendar from './Pages/ServiceCalendar';

class App extends React.Component {

  state = {
    page: <Home/>
  }


  render() {
    return (
      <div className="App">
        <div className="HeaderButtons">
          <button className="HeaderButton" onClick= {e=> {this.setState({page: <Home/>})}}>Home</button>
          <button className="HeaderButton" onClick= {e=> {this.setState({page: <AboutPage/>})}}>About Page</button>
          <button className="HeaderButton" onClick= {e=> {this.setState({page: <PayingDues/>})}}>Paying Dues</button>
          <button className="HeaderButton" onClick= {e=> {this.setState({page: <Scrapbook/>})}}>Scrapbook</button>
          <button className="HeaderButton" onClick= {e=> {this.setState({page: <ServiceCalendar/>})}}>Service Calendar</button>
        </div>
        <header className="App-header">
          {this.state.page}
        </header>
      </div>
    );
  }

}

export default App;
