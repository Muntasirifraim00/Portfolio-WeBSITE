import React from 'react';

import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
           
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2020 – 2024'}
                title={'BGC Trust  University'}
               
                logo={'https://media-exp1.licdn.com/dms/image/C510BAQE3p1j1WWn1Fg/company-logo_100_100/0?e=1612396800&v=beta&t=TPDysSQsDB8h-UUybls55tpUvFfzxzUpSBW3wD1qqoM'}
            >
                Bachelor's Degree in Computer Engineering
            </ResumeItem>
        </div>
    );
};

export default Resume;
