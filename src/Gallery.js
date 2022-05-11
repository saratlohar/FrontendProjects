import React from 'react';
import './Gallery.css';

function Gallery(){
    return(
        <div>
        <div className='container'>
            <div className='wrap'>
                <img src='pic 4.png'/>
            </div>
            <Gallery1/>
            <Gallery2/>
            <Gallery3/>
            <Gallery4/>
            <Gallery5/>
            <Gallery6/>
            <Gallery7/>
        </div>
          <fooer className='main-foot'>
            <h2>Get to Know us Beter!!</h2>
          </fooer>
        </div>
    )
}

function Gallery1(){
    return(
        <div className='container'>
            <div className='wrap'>
                <img src='pic 5.png'/>
            </div>
        </div>
    )
}
function Gallery2(){
    return(
        <div className='container'>
            <div className='wrap'>
                <img src='pic 6.png'/>
            </div>
        </div>
    )
}
function Gallery3(){
    return(
        <div className='container'>
            <div className='wrap'>
                <img src='pic 7.png'/>
            </div>
        </div>
    )
}
function Gallery4(){
    return(
        <div className='container'>
            <div className='wrap'>
                <img src='pic 8.png'/>
            </div>
        </div>
    )
}
function Gallery5(){
    return(
        <div className='container'>
            <div className='wrap'>
                <img src='pic 9.png'/>
            </div>
        </div>
    )
}
function Gallery6(){
    return(
        <div className='container'>
            <div className='wrap'>
                <img src='pic 10.png'/>
            </div>
        </div>
    )
}
function Gallery7(){
    return(
        <div className='container'>
            <div className='wrap'>
                <img src='pic 11.png'/>
            </div>
        </div>
    )
}

export default Gallery;