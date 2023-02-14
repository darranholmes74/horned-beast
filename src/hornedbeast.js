import React from 'react';

class HornedBeast extends React.Component {
    constructor(props){
      super(props);
      console.log();
    }
    render(){
      return (
        <div className='hornedbeast'>
          <h2>Horned Beast Name: {this.props.title}</h2>
          <img className="profile-photo" src={"this.props.imageUrl"} alt={"image"}/>
          <p>Description: {this.props.description}</p>
        </div>
      
      )
    }
  }
  
  export default HornedBeast;