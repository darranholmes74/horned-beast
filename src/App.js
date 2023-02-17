
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HornedBeast from './hornedbeast';
import data from './data.json';
import Main from './Main';
import Container from 'react-bootstrap/Container';


function App() {
  return (

    <Container xs={2} className="App">
      <Main/>
    </Container>
    // <div>
    //   <Main/>
    //   <HornedBeast
    //   {...data.map(beasts => <HornedBeast title={beasts.title} imageUrl={beasts.image_url}  description={beasts.description}/>)}
    //   />
    // </div>
    // // <div className="App">
    // //   <header className="App-header">
    // //     <h1>
    // //       Hello World
    // //     </h1>
    // //   </header>
    // //   <main>
    // //     <div>
        
    // //     {data.map(beasts => <HornedBeast title={beasts.title} imageUrl={beasts.image_url}  description={beasts.description}/>)}
  
    // //   </div>
    // //   </main>
    // //   <footer className='App-footer'>
    // //    By Darran Holmes
    // //   </footer>
    // // </div>
  );
}


export default App;
