import React from 'react';
// import styles from '../Styles/jv_styles'
const estilo = {
  red: {
    color: 'red',
    backgroundColor: 'red'
  },
  dark: {
    color: 'black',
    backgroundColor: 'black',
  }
}
// Style > className; Inner > Outter
function BasicBox () {
  return(
    <div className='black_bg' >
      <div className='' style={estilo.red}>
        <h1 className=''>
          R
        </h1>
      </div>
      <div className='' style={estilo.red}>
        <h1 className='blue'>
          G
        </h1>
      </div>
      <div className='' >
        <h1  className='green'>
          B
        </h1>
      </div>
    </div>
  );
}

export default BasicBox;