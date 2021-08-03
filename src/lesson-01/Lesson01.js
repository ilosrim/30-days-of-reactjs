import React from 'react';
import './style.css';
import Photo from './img/img.jpg';

class Lesson01 extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="main">
                    <p className="title">Subscribe</p>
                    <p className="paragraph">Sign up with your email address to receive news and updates.</p>
                    <form>
                        <input className="input" type="text" placeholder="First name" />
                        <input className="input middle" type="text" placeholder="Last name" />
                        <input className="input" type="text" placeholder="Email name" />
                    </form>
                    <button>Subscribe</button>
                </div>
                <div className="profile">
                    <img src={Photo} className="photo" />
                    <p className="name">John Doe</p>
                    <small className="degree">Senior Developer, USA</small>
                    <p className="skills">skills</p>
                    <div className="skill">
                        <small className="small">HTML</small>
                        <small className="small">CSS</small>
                        <small className="small">SASS</small>
                        <small className="small">Bootstrap</small>
                        <small className="small">JavaScript</small>
                        <small className="small">React JS</small>
                        <small className="small">Redux</small>
                        <small className="small">Angular</small>
                        <small className="small">TypeScript</small>
                        <small className="small">Python</small>
                        <small className="small">NumPy</small>
                        <small className="small">Docker</small>
                        <small className="small">C++</small>
                        <small className="small">C#</small>
                        <small className="small">C</small>
                        <small className="small">Java</small>
                        <small className="small">Flutter</small>
                        <small className="small">Swift</small>
                        <small className="small">MongoDB</small>
                        <small className="small">Postgre SQL</small>
                        <small className="small">NoSQL</small>
                        <small className="small">Django</small>
                        <small className="small">Vue JS</small>
                        <small className="small">Data Analysis</small>
                        <small className="small">TypeScript</small>
                    </div>

                    <div className="join">
                        Joined on Aug 3, 2021
                    </div>
                </div>
            </div>
        );
    }
}


export default Lesson01;
