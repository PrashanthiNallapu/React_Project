import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './verticalsection.css';
import { useNavigate } from 'react-router-dom';

function VerticalsSection() {
  const navigate = useNavigate();
  return (
    <Container className="verticals-section">
      <h2 className="text-center my-4">Our Verticals</h2>
      <p className="text-center mb-4">Uplifting Individuals Through Healthcare & Education.</p>
      <Row>
        <Col md={6} className="text-center">
        <img
            src="/education.jpg"
            alt="EDUCATION"
            className="img-fluid"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/extension')}
          />
          
          <h3>EDUCATION</h3>
        </Col>
        <Col md={6} className="text-center">
        <img
            src="/healthcare.jpg"
            alt="HEALTHCARE"
            className="img-fluid"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/Healthextension')}
          />
          <h3>HEALTHCARE</h3>
        </Col>
        <div style={{ marginBottom: '70px' }}></div>
        
        <p>
                    <strong>Who We Are</strong>
                    <br />
                    A beginning well-made, now needs more hands. Helping Hand Foundation is one of the few organizations that’s working tirelessly with weaker sections, bridging health inequity through its various programs and interventions. It was launched by a likeminded team of Hyderabad-based IT professionals with the aim and intent of facilitating accessible and affordable healthcare to the disadvantaged sections of society.
                   
                    <div style={{ marginBottom: '40px' }}></div> At Helping Hands Charity, we believe in extending warmth and support to those in need, uplifting lives, and fostering a community where everyone has the opportunity to thrive. Our mission is to serve the underprivileged and vulnerable sections of society, providing them with essential resources and empowering them to lead dignified lives.
                </p>
      </Row>
    </Container>
  );
}

export default VerticalsSection;
