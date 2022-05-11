import React from 'react';
import './About.css';

function About() {
    return (
        <div className='main-div'>
            <div className='first-div'>
                <div className='div-1-content'>
                    <h3>Enriching and Fun Early Years<br/>
                        Matter Preschool Curriculum</h3>
                    <p>Our curriculum focuses on the holistic development of the child and is suitablymapped to age-appropriate objectives and outcomes. Based on Dr. HowardGardner's Theory of Multiple Intelligences and Experiential Learning, theKLAY curriculum empowers the child to be able to establish a routine, followdirections, make friends and work independently.</p>
                    </div>
                    <img src='pic 1.jpg'/>                   
            </div>
    

            <div className='second-div'>
                <div className='div-2-content'>
                <img src='pic 2.jpg'/> 
                </div>
                <aside>
                    <h3>Socio-emotional & Physical <br/>Development</h3>
                    <p>A multi-sensory environment that includes group activities, role plays, story time and drama that have beencurated to meet the child’s social, emotional, physical and emotional milestones. We make them ‘Big SchoolReady’!</p>
                </aside>
                    
            </div>

            <div className='third-div'>
                <div className='div-3-content'>
                    <h3>Milestones Tracking and<br/>Regular Assessments</h3>
                 <p>180 degree evaluation, milestone tracking and regular assessments everyterm, to let you know of your child’s progress. We also help counsel withstrategies, should a child require a more focused stimulation.</p>
                 </div>
                 <img src='pic 3.png'/>
                
            </div>

        </div>

    )
}

export default About;