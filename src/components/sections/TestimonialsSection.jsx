import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Amit Pandey',
      role: 'Online Retailer',
      comment: 'ShipMaxx has helped us significantly in processing our shipping requirements efficiently. The dashboard gives us an organized view of operations with an automated order management system.',
      rating: 4
    },
    {
      name: 'Smitha Reddy',
      role: 'Business Owner',
      comment: 'ShipMaxx has tremendously improved our operations. Their automated solutions for processing bulk orders have helped us expand our customer base.',
      rating: 5
    },
    {
      name: 'Karan Mehra',
      role: 'E-commerce Manager',
      comment: 'Working with ShipMaxx has been a fantastic experience. The real-time tracking facility helps us maintain complete transparency with our customers.',
      rating: 4
    }
  ];

  return (
    <section className="testimonials-section">
      <Container>
        <Typography variant="h2">Hear from <span className="highlight">our clients</span></Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div className="testimonial-card">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <Typography className="testimonial-text">{testimonial.comment}</Typography>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography className="role">{testimonial.role}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
