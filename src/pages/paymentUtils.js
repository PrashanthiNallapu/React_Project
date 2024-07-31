export const initiateRazorpayPayment = (amount) => {
  var options = {
    key: 'rzp_test_NomgGhrfhS1mQG', // Replace with your Razorpay Test Key ID
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    name: 'Helping Hands Charity',
    description: 'Test Transaction',
    handler: function (response) {
      alert('Payment successful. Payment ID: ' + response.razorpay_payment_id);
    },
    prefill: {
      name: 'Prashanthi Nallapu',
      email: 'prashanthinallapu2002@example.com',
      contact: '8074208355',
    },
    notes: {
      address: 'Mehdipatnam',
    },
    theme: {
      color: '#F37254',
    },
  };

  var pay = new window.Razorpay(options);
  pay.on('payment.failed', function (response) {
    console.error('Payment failed:', response.error);
    alert('Payment failed: ' + response.error.description);
  });

  try {
    pay.open();
  } catch (error) {
    console.error('Error opening Razorpay checkout:', error);
    alert('Error opening Razorpay checkout. Please try again later.');
  }
};
