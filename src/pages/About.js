
import React from 'react';
import './About.css';
import reportImage from './crafted1.jpg';
 import reportImage1 from './image2.png';
 import reportImage2 from './image3.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>Annual Reports</h2>
      <div className="cards-container">
        <div className="card">
          <img src={reportImage} alt="Annual Report" className="card-image" />
          <div className="card-content">
            <h3>Annual Activity Report 2023-24</h3>
            <p>Accessible, ethical, and free health care to 30% of the urban poor.</p>
            <a href="https://www.researchgate.net/publication/285944850_Charitable_Giving" className="card-link">Open PDF</a>
          </div>
        </div>
        <div className="card">
          <img src={reportImage1} alt="Annual Report" className="card-image" />
          <div className="card-content">
            <h3>Annual Activity Report 2022-23</h3>
            <p>Improving healthcare access for marginalized communities.</p>
            <a href="https://www.researchgate.net/publication/285944850_Charitable_Giving" className="card-link">Open PDF</a>
          </div>
        </div>
        <div className="card">
          <img src={reportImage2} alt="Annual Report" className="card-image" />
          <div className="card-content">
            <h3>Annual Activity Report 2021-22</h3>
            <p>Initiatives and progress towards equitable healthcare.</p>
            <a href="https://www.researchgate.net/publication/285944850_Charitable_Giving" className="card-link">Open PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

