import React from 'react';
import './AboutMe.css'
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    return(
        <div className="aboutme">
            <div className="picture-about">
                <div className="picture-place">

                </div>
            </div>
            <div className="about-introduce">
                <div className="about-dummy">

                </div>
                <div className="about-title">
                    <pre>
                         &nbsp;About me 
                    </pre>
                </div>
                <div className="about-content">
                    <pre>
                        이름 : 김영조<br></br>
                        나이 : 24살<br></br>
                        전공 : 컴퓨터공학과
                    </pre>
                </div>
                <div className="about-content2">
                    <pre>
                        취미 : 게임, 예능시청<br></br>
                        축구 야구 등 스포츠 좋아함.
                    </pre>
                </div>
                <div className="about-title2">
                    단기 목표
                </div>
                <div className="about-content3">
                    <pre>
                         React, Vue 등 Javascript 라이브러리를<br></br>
                         활용하는 Frontend 개발자
                    </pre>
                </div>
                <div className="about-title3">
                    장기 목표
                </div>
                <div className="about-content4">
                    <pre>
                         Node.js를 이용한 Full Stack 개발자
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;