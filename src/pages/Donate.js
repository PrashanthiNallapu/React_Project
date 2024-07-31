import React, { useState, useEffect } from 'react';
import './Donate.css';
import razorpaylogo from '../pages/Razorpay_logo.png';
import { initiateRazorpayPayment } from './paymentUtils';

const Donate = () => {
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (!window.Razorpay) {
      console.error('Razorpay SDK not loaded');
      alert('Razorpay SDK failed to load. Are you online?');
    }
  }, []);

  const handleRazorpayClick = () => {
    console.log('Razorpay Image Clicked');
    if (amount) {
      console.log('Amount entered:', amount);
      if (window.Razorpay) {
        console.log('Razorpay SDK is available');
        initiateRazorpayPayment(amount);
      } else {
        console.log('Razorpay SDK failed to load');
        alert('Razorpay SDK failed to load. Are you online?');
      }
    } else {
      console.log('No amount entered');
      alert('Please enter an amount to donate.');
    }
  };

  return (
    <div className="donate-container">
      <h2>Donate Now</h2>
      <p><strong>Bank Name:</strong> UNION Bank</p>
      <p><strong>Current A/C:</strong> 024505004570</p>
      <p><strong>Branch:</strong> Mehdipatnam, Hyderabad</p>
      <p><strong>RTGS/NEFT/IFSC Code:</strong> UBIN0575844</p>
      <p><strong>PAN No:</strong> AAATH 8592E</p>
      <p className="note"><strong>Note:</strong> Please enter case ID in remarks while depositing or transferring amount</p>
      <p><strong>Western Union Transfers:</strong> Helping Hand Foundation PAN # AAATH 8592E</p>
      <div className="payment-methods">
        <span>Secured by:</span>
        <img 
          src={razorpaylogo} 
          alt="Razorpay" 
          className="payment-logo" 
          onClick={handleRazorpayClick}
        />
      </div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount to donate"
      />
    </div>
  );
};

export default Donate;
