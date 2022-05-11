import React from 'react';
import './Page.css';

function Page(){
    return(
        <div className='page-main-div'>
            <div className='div-1'>
                <ul>
                    <li>Front End!</li>
                    <li>Back End!</li>
                    <li>DataBase!</li>
                    <li>carrer Path!</li>
                </ul>
            </div>
            <div className='div-2'>
                <h2>Benefits of Working at KLAY</h2>
                <p>At KLAY, We believe, Happy Employees = Happy Children = Happy Customers!
               Therefore, we provide benefits beyond the basic necessities like medical insurance & flexibility that support a balancedlife.</p>
            </div>
            <div className='div-3'>
                <ul>
                    <li>Staff Child Care</li>
                    <li>Medical Insurance/ESI</li>
                    <li>Provident Fund</li>
                    <li>Annual Bonus</li>
                    <li>Attendance</li>
                </ul>
                </div>
                <p>In order to enable employees to bring their children to work and provide them with world class education, we have an employee-child education policy inplace. Employees with young children who fit into the age group and schooling programmes offered in the Centre they are working at, can enrol theirchild in to their age specific programmes. The fee for the schooling/day care program will be subsidised.</p>
            
        </div>
    )
}

export default Page;