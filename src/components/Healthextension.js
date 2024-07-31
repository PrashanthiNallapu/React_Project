import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Health.css'; 

function HealthDetail() {
  return (
    <Container className="Health-detail">
     
      <Row>
        <Col md={6}>
          <h3>Rural Health Programme</h3>
          <p>
          HHF collaborated with Wipro Care to operate Primary Health Care clinics in 11 rural villages, collectively serving 25,000 residents. These clinics conduct health assessments for entire families, connecting sick and vulnerable individuals with essential medical services. By bringing primary care to villagers' doorsteps, timely and suitable treatment is provided, significantly.
Every household has been surveyed to check the health status of the entire family, with the sick and vulnerable people connected to rural clinics, which are conducted two days a week, per village. Bringing primary care closer to the doorstep in the villages has helped many patients get timely and appropriate treatment for their health issues.

          </p>
        </Col>
        <Col md={6}>
          <img src="/Healthimg1.jpg" alt="Detail 1" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img src="/Healthimg2.jpg" alt="Detail 2" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h3>Primary Health Centers</h3>
          <p>
          HHF along with its partners charities is promoting Universal Health Care as mandated by the WHO. After careful selection of our Health Centers in the most vulnerable Urban slums, we are bringing promotional, preventive, treatment, rehabilitative care along with strong referral system closet possible without causing any financial hardships to 5 -6 lacs Urban poor each year. Access to good quality health care is not only improving health but also their socio-economic conditions. We today cover almost 30% of the Populations in the Urban slums.
• Outpatients served - 5,05,747 - Saved for Patients Rs. 25.31 Crores
• Opthal Patients - 8,953 - Saved for Patients Rs. 1.07 Crores
• Free Eye Cataract Surgeries - 73 - Saved for Patients Rs. 10.95 lacs
• Dental Treatment - 18,292 - Saved for Patients Rs. 3.65 Crores
• Minor Surgeries - 12,953 - Saved for Patients Rs. 3.23 Crores.

          
          </p>
        </Col>
      </Row>
     
    </Container>
  );
}

export default HealthDetail;
