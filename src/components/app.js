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
/*
  Max title length: 14,
  If the length is greater than 14 => abbreviation
*/
export default class App extends Component {
  render() {
    return (
      <div style={styles.cardContainer}>
        { [
          {'title': '社員社員社員社員社員社員社員', 'member': 123, 'thumbnail': 'group/a6a4c94f7c3a844ee8f9c99e14f404cfc0fb93d5.jpg'},
          {'title': 'alf2', 'member': 123456, 'thumbnail': 'group/a5c25fd972df0ea6eb290e56067f9fd8488a00b9.jpg'},
          {'title': 'alf3', 'member': 99, 'thumbnail': 'group/a6a4c94f7c3a844ee8f9c99e14f404cfc0fb93d5.jpg'},
          {'title': 'alf4', 'member': 16, 'thumbnail': 'group/a5c25fd972df0ea6eb290e56067f9fd8488a00b9.jpg'}
          ].map(
          ( value, index )=>{
            return(<ClubCard title={value.title} member={value.member} thumbnail={value.thumbnail}/>);
          }
        ) }


      </div>
    );
  }
}
