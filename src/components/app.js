import React, { Component } from 'react';
import ClubCard from './ClubCard';

const styles = {
  'cardContainer': {
    /* We first create a flex layout context */
    display: 'flex',

    /* Then we define the flow direction
       and if we allow the items to wrap
     * Remember this is the same as:
     * flex-direction: row;
     * flex-wrap: wrap;
     */
    flexFlow: 'row wrap',

    /* Then we define how is distributed the remaining space */
    justifyContent: 'flex-start'
  }
};

export default class App extends Component {
  render() {
    return (
      <div style={styles.cardContainer}>
        { [1,2,3,4,5].map(
          ()=>{
            return(<ClubCard />);
          }
        ) }


      </div>
    );
  }
}
