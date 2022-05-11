import React from 'react';
import './Home.css';


function Home(){
    return(
        <div className='home-main-div'>
            <div className='home-content'>
            <h4>Kids Learning Center</h4>
            <h2>New Approach to<br/> Kids Education</h2>
            <p>Make education possible for every child. Join hands with an
               NGO and serve the poor. Donate for education and help
               children attain age-appropriate learning. Make education
               possible for every child. Join hands with an NGO and serve
               the poor. Donate for education and help children attain ageappropriate
               learning.</p>
               <button className='home-btn'>Learn More</button>
            </div>
            <div className='home-photo'>
                <img src='Picture2.jpg'/>
            </div>
        </div>
    )
}
export default Home;