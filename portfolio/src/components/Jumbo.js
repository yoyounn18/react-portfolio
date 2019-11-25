import React from 'react';
import './Jumbo.css'
import Github from './Github';
import Blog from './Blog';

//const aboutMe = " 안녕하십니까 저는 김영조라고 합니다. ";

const Jumbo = () => {
    return (
        <div className="jumbo">
            <div className="left-div">
                <div className="title-name">
                    Kim Young Jo
                </div>
                <div className="title-introduce">
                    <i class="fa fa-university" aria-hidden="true"><h2>Halla University</h2></i>
                    24 years old<br></br>
                    Computer Engineering<br></br>
                    Front-End Developer(wish)
                </div>
                <div className="title-picture">
                    <div className="picture">
                        
                    </div>
                </div>
            </div>

            <div className="right-div">
                <div className="title-stack">
                    TECH STACK
                </div>
                <div className="title-tech">
                    HTML  CSS  Javascript  React  Node.js  Java Python
                </div>
                <div className="title-dummy">
                    HTML
                </div>
                <div className="title-dummy2">
                    CSS
                </div>
                <div className="title-dummy3">
                    Javascript
                </div>
                <div className="title-dummy4">
                    React.js
                </div>
                <div className="title-dummy5">
                    Node.js
                </div>
                <div className="title-dummy6">
                    Java
                </div>
                <div className="title-dummy7">
                    Python
                </div>
                <div className="title-ability">
                </div>
                <div className="title-title">
                    Dev Activity
                </div>
                <div className="title-btn">
                    <Github />
                    <Blog />
                </div>
            </div>
        </div>
    )
}

export default Jumbo;