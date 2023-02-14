import logo from './logo.svg';
import './App.css';
import React from 'react';
import HornedBeast from './hornedbeast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>
          Hello World
        </h1>
      </header>
      <main>
        <HornedBeast title="UniWhal" imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"  description="A unicorn and a narwhal nuzzling their horns"/>
        <HornedBeast title="Rhino Family" imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"  description="Parent rhino with two babies"/>

      </main>
      <footer className='App-footer'>
       By Darran Holmes
      </footer>
    </div>
  );
}

// class HornedBeast extends React.Component {
//   contructor(props){
//     super(props);
//     console.log();
//   }
//   render(){
//     return (
//       <div>
//         <h2>Horned Beast Name: {this.props}</h2>
//         <img>{this.props.imageUrl}</img>
//         <p>Description: {this.props.description}</p>
//       </div>
    
//     )
//   }
// }

export default App;
