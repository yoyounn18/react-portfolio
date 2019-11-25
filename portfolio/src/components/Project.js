import React from 'react';
import './Project.css';
import HoverBtn from './HoverBtn';

const Project = () => {
    const clickProject1 = () => {
        window.open("https://blex.kr/@yoyounn18");
    }
    const clickProject2 = () => {
        window.open("https://blex.kr/@yoyounn18");
    }
    const clickProject3 = () => {
        window.open("https://blex.kr/@yoyounn18");
    }
    const clickProject4 = () => {
        window.open("https://blex.kr/@yoyounn18");
    }
    
    return (
        <div className="project">
            <div className="project-title">
                PROJECT
            </div>
            <div className="div-project1">
                <HoverBtn></HoverBtn>
                <HoverBtn></HoverBtn>
            </div>
            <div className="div-project2">
            <HoverBtn></HoverBtn>
            <HoverBtn></HoverBtn>
            </div>
        </div>
    )
}

export default Project;