import React, { Component } from 'react';

const styles = {
  'thumbnail': {
    width: '200px',
    height: '200px'
  }
};

class ClubCard extends Component{

  render(){
    return(
      <div>

        <img
          style={styles.thumbnail}
          src='https://cdn2.ettoday.net/images/1756/d1756292.jpg'
        />
        <div> title </div>
        <div> 1978 位社員 </div>
      </div>
    );
  }
}

export default ClubCard;
