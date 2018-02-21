import React, { Component } from 'react';
  /*
  //fetch example
  fetch(CONFIG.API_BASE_URL.concat('/posts/unlike/').concat(this.props._id), {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-auth': this.props.loginState.xAuth //FIXME:guest has no xAuth
              }
         })
          .then((response) => {
            if (response.status === 200) {

              response.json().then(json => {
                                    //this.setState(Object.assign({}, this.state, json));
                                    console.log('unlike', json)
                                  });
            } else {
              console.log(response.status);
            }
          })
          .catch((error) => {
            console.log(error);
          });
  */
const urlPrefix = 'http://www.educoco.com/image?i=upload/';
const styles = {
  'thumbnailContainer': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '180px',
    borderColor: 'black',
    borderWidth: '2px',
    borderRadius: '5px',
    backgroundColor: '#F5F5F5',

  },
  'thumbnail': {
    width: '80px',
    height: '80px',
    borderRadius: '50%'
  },
  'cardContainer': {
    margin: '5px',
    backgroundColor: '#F5F5F5',
    borderRadius: '5px'
  },
  'infoContainer': {
    margin: '5px',
    backgroundColor: '#FFFFFF',
    borderRadius: '5%'
  },
  'member': {
    marginLeft: '5px',
    marginRight: '5px',
    color: 'gray',
    fontSize: '10px'
  },
  'title': {
    marginLeft: '5px',
    marginRight: '5px',
    fontSize: '12px'
  }
};

class ClubCard extends Component{
  constructor(props){
    super(props);
  }
  //'https://cdn2.ettoday.net/images/1756/d1756292.jpg'
  render(){
    console.log(this.props);
    return(
      <div style={styles.cardContainer}>
        <div style={styles.thumbnailContainer}>
          <img
            style={styles.thumbnail}
            src={urlPrefix + this.props.thumbnail}
          />
        </div>
        <div style={styles.infoContainer}>
          <div style={styles.title}> {this.props.title} </div>
          <div style={styles.member}> {this.props.member} 位社員 </div>
        </div>
      </div>
    );
  }
}

export default ClubCard;
