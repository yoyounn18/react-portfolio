import React from 'react';
import './Github.css';


const Github = () => {
    const btnClick = () => {
        window.open("https://github.com/yoyounn18");
    }
     
        return (<button className="github-btn" onClick={btnClick}>
                GitHub
        </button>
            );
    
}

export default Github;
