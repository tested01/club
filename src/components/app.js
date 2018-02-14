import React, { Component } from 'react';
import ClubCard from './ClubCard';

export default class App extends Component {
  render() {
    return (
      <div>
        { [1,2,3,4,5].map(
          ()=>{
            return(<ClubCard />);
          }
        ) }


      </div>
    );
  }
}
