import React from 'react';
import Card from './Card.js';
import "./impact.css";


const ImpactPage = () => {
  const impactStories = [
    {
      title: 'Tales Of Impact I',
      date: 'March 19, 2021',
      image: 'poor.jpeg', 
      description: ' children from underprivileged backgrounds eagerly engage in their studies at a makeshift classroom.',
    },
    {
      title: 'Tales Of Impact II',
      date: 'June 20, 2022',
      image: 'poor1.jpg',
      description: 'we see a heartfelt moment where a community comes together to support mothers who are raising more than three children',
    },
    {
      title: 'Tales Of Impact III',
      date: 'April 21, 2023',
      image: 'poor2.jpeg',
      description: 'Their tiny hands outstretched, eyes wide with hope and despair, they navigate a world where childhood innocence collides with harsh reality. ',
    },
    {
        title: 'Tales Of Impact IV',
        date: 'September 20, 2024',
        image: 'poor3.jpeg',
        description: ' volunteers tirelessly distribute nutritious meals to families in need. Each smile reflects a moment of gratitude, as communities come together to provide support during challenging times. ',
      },
  ];

  return (
    <div className="impact-page">
      {impactStories.map((story, index) => (
        <Card
          key={index}
          title={story.title}
          date={story.date}
          image={story.image}
          description={story.description}
        />
      ))}
    </div>
  );
};

export default ImpactPage;
