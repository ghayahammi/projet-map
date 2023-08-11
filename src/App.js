import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Maps App!
        </Typography>
        <Typography variant="body1" paragraph>
          Explore the world with Google Maps. Find your way around, discover new places,
          and make your daily journey more exciting.
        </Typography>
        <MapComponent />
      </Paper>
    </Container>
  );
}

export default App;
