import React from 'react';
import Categories from '../Categories/Categories';
import FirstHome from './firstHome/FirstHome.jsx';
import SecondHome from './secondHome/SecondHome.jsx';
import ThirdHome from './thirdHome/ThirdHome.jsx';
import FourthHome from './fourthHome/FourthHome.jsx';

function Home() {
  return (
    <div>
        <Categories/>
        <FirstHome/>
        <SecondHome/>
        <ThirdHome/>
        <FourthHome/>
    </div>
  )
}

export default Home;