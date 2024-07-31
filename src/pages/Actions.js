import React from 'react';
import './Actions.css';

const Actions = () => {
  return (
    <div className="actions-page">
     
      <div className="actions-section">
        <img src="Zerocost.jpg" alt="Zero Cost Treatment" className="actions-image" />
        <div className="actions-content">
          <h2><strong>Zero Cost Treatment</strong></h2>
          <p>Facilitating Zero Cost Treatment</p>
          <p>Our 17 Help Desks established in state-run hospitals for seamless assistance help benefit 1.5 lakhs patients annually. Together, all of this goes on to a massive Rs.20 crores worth of OOPE (Out-of-Pocket Expenses).</p>
        </div>
      </div>

    
      <div className="actions-section">
        <img src="tax.jpeg" alt="Second Image Description" className="actions-image1" />
        <div className="actions-content">
          <h2><strong>80G Tax Exemption</strong></h2>
          <p>If you are willing to make a philanthropic contribution to Helping Hand Foundation, you can benefit too. Under Section 80G, deductions can be claimed by taxpayers when they make donations through Cheque, Demand Draft and Cash (for donations below Rs 2,000 only)</p>
          <p>Note: Contributions made in kind like food, material, clothes, medicines etc do not qualify
for deduction under Section 80G. Donations above Rs.2,000 need to be made in any mode
other than cash, to qualify under Section 80G.</p>
        </div>
      </div>
    </div>
  );
};

export default Actions;
