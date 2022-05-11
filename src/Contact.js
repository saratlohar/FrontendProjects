import React,{useState} from 'react';
import './Contact.css';

function Contact(){
    const [name , setName]=useState('');
   const [mobile , setMobile]=useState();
   const [email , setEmail]=useState('');
   const [message , setMessage]=useState('');

   const handleName=(e) => {
    setName(e.target.value)
  }

  const handleMobile=(e) => {
   setMobile(e.target.value)
 }

 const handleEmail=(e) => {
   setEmail(e.target.value)
 }

 const handleMessage=(e) => {
    setMessage(e.target.value)
 }
  

 const handleSubmit =(e) =>{
   if(mobile.length < 10){
     alert('Error!!...')
   }
   else{
     alert('Form Submitted Sucessfully ')
   }
 }

    return(
        <div className='contact-main-div'>
            <div className='div-content'>
                <h4>Full Stack Developer Training & Placements</h4>
                <p>To be an effective full-stack developer, you should acquire and continue upgrading yourknowledge of applicable programming language skills. Consider taking courses in relevantlanguages—like Python, HTML, CSS, and Javascript.</p>
                <p>To be an effective full-stack developer, you should acquire and continue upgrading yourknowledge of applicable programming language skills. Consider taking courses in relevantlanguages—like Python, HTML, CSS, and Javascript.</p>
                <button className='home-btn'>Learn More</button>
            </div>
            <div className='div-form'>
                <h2>Fill & Get upto 25% OFF in Courese Fees</h2>
                <form onSubmit={handleSubmit}>
                    <label>Enter Your Name:</label><br/>
                    <input type='text' placeholder=' Name' value={name} required onChange={handleName}/><br/><br/>
                    <label>Enter Your Mobile No:</label><br/>
                    <input type='text' placeholder='10 Digits Mobile Number' value={mobile} required onChange={handleMobile}/><br/><br/>
                    <label>Enter Your Email:</label><br/>
                    <input type='email' placeholder='Email' value={email} required onChange={handleEmail}/><br/><br/>
                    <label>Message:</label><br/>
                    <input type='text-area' placeholder='Message' value={message} required onChange={handleMessage}/><br/><br/>
                    <button className='contact-btn' type='submit'>I am Interested ,Tell me more...</button>
                </form>
            </div>
          
        </div>
    )
}

export default Contact;