import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Extension.css'; 

function EducationDetail() {
  return (
    <Container className="education-detail">
     
      <Row>
        <Col md={6}>
          <h3>Adopt & Enroll in Govt Schools.</h3>
          <p>
          For those children who are academically up to speed but have stopped schooling due to want of money, we are counselling parents through our Rahnumai Centers opened in Mosques across city & have started enrolling them into nearest government schools from their place of domicile. Under ADOPT a school program, we are engaging with the government schools to fill in the gaps in their resources, infrastructure, and teachers to make the schools fully functional, hygienic and a good place for our children to study. So far, we have adopted 2 schools and work is under way in these schools. We are targeting to enroll 250 - 300 students free of cost for schooling from the next academic year in these 2 schools.
          </p>
        </Col>
        <Col md={6}>
          <img src="/Extension1img.jpeg" alt="Detail 1" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img src="/Extension2img.jpg" alt="Detail 2" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h3>Bridge Schools</h3>
          <p>
          As per reliable reports and surveys, 27% of Muslim children have dropped out of schools and another 5% haven’t been to school yet. The key reason for dropouts has been financial hardships and poverty in paying school fees to private schools, which dominate the primary and secondary school education in Muslim dominated slums & lack of government schools and facilities in the government schools in many areas. To address this critical issue, HHF proposes establishing a bridge school in strategic locations across the Urban Slums, focusing on strengthening the educational foundation of these children.
          </p>
        </Col>
      </Row>
     
    </Container>
  );
}

export default EducationDetail;
