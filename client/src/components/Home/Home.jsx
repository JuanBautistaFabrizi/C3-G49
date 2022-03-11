import React, { useState, useEffect } from 'react';

import FirstHome from './firstHome/FirstHome.jsx';
import SecondHome from './secondHome/SecondHome.jsx';
import ThirdHome from './thirdHome/ThirdHome.jsx';
import FourthHome from './fourthHome/FourthHome.jsx';

function Home() {

  const urlCategories = "http://127.0.0.1:8000/categories";
  const [categories, setCategories] = useState([]);
  const fetchData2 = async (url) => {
    try {
        const res2 = await fetch(urlCategories);
        const data2 = await res2.json();

        setCategories(data2);

    } catch (err) {
        console.log(err);
    }
}

fetchData2();
console.log(categories);

  return (
    <div>
      
        <FirstHome/>
        <SecondHome props={categories}/>
        <ThirdHome/>
        <FourthHome/>
    </div>
  )
}

export default Home;