import React from 'react';

import Yatagarasu from '../../assets/yatagarasu.png';


const styles = {
  landing: {

  },
  yatagarasu: {
    width: '100px',
    height: '100px',
  }
}

const LandingPage = () =>
  <div style={styles.landing}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <a href="https://www.booking.com/hotel/jp/bnb-ninja-otsuka.ja.html"><img style={styles.yatagarasu} src={Yatagarasu} alt='秘密結社' /></a>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
export default LandingPage;