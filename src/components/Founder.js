// src/Founder.js
import React from 'react';
import './Founder.css';

const Founder = () => {
  return (
    <div className="founder">
      <img src={`${process.env.PUBLIC_URL}/Founder.jpg`} alt="Mujtaba Hasan Askari" className="founder-image" />
      <div className="founder-info">
        <h2>About Mujtaba Hasan Askari</h2>
        <p>He saw their pain, and accepted them as his.</p>
        <p>Helping Hand Foundation (HHF) was founded by Mujtaba Hasan Askari in 2007. A Mechanical Engineer who once soared in his career at Infosys Technologies, took a transformative leap. At the pinnacle of his successful career, he chose to leave the corporate world to dedicate the next phase of his life to humanity.</p>
        <p>Now, nearly two decades later, his dedication has made HHF synonymous with ‘healthcare and care for all’ in Hyderabad, serving as a lifeline for citizens facing acute distress due to medical emergencies.</p>
      </div>
    </div>
  );
};

export default Founder;
