import * as React from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import fistImage from '../assets/1w.jpg';
import SecImage from '../assets/2w.jpg';
import ThredImage from '../assets/3w.jpg';
import FourthImage from '../assets/4w.jpg';

function MediaCard({ title, description, image }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 8,
        },
      }}
    >
      <CardMedia
        sx={{
          height: 250,
          transition: 'all 0.3s ease',
          '&:hover': {
            filter: 'brightness(0.9)',
          },
        }}
        image={image}
        title={title}
      />
      <CardContent
        sx={{
          transition: 'all 0.3s ease',
          '&:hover .hover-text': {
            color: '#6A1B9A',
            fontFamily: 'cursive',
            fontWeight: 700,
            letterSpacing: '0.5px',
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 600 }}
          className="hover-text"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
          className="hover-text"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ textTransform: 'none', fontWeight: 600 }}>Share</Button>
        <Button size="small" sx={{ textTransform: 'none', fontWeight: 600 }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default function CardsRow() {
  return (
    <>
      <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto', mb: 6, mt: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
          WHAT WE DO
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
          You never get a second chance to create once-in-a-lifetime memories. Our specialty is coordinating people,
          locations, settings, and logistics. Our event creations delight, amaze, and entertain — making every moment
          unforgettable. At Won Love Events, our clients are number one. We deliver professional, detail-oriented,
          and heart-filled coordination at fair prices. Experience a new way of event planning: one driven by
          excellence, passion, and making dreams a reality.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <MediaCard
            title="Corporate and Social Event Planning"
            description="Weddings are just the start. If we can plan the perfect once-in-a-life experience for our brides and grooms, just imagine what we can do for your corporate or social gathering. As they say, the sky’s the limit."
            image={fistImage}
          />
        </Grid>
        <Grid item>
          <MediaCard
            title="Full Wedding Service Design + Coordination"
            description="This is your special moment. We take care of everything from location scouting to design, from décor to vendor relations. Together we’ll plan the perfect, unforgettable experience."
            image={SecImage}
          />
        </Grid>
        <Grid item>
          <MediaCard
            title="Partial Wedding Design + Planning"
            description="Got some vendors lined up? Need guidance and creative support? This package is made for couples who want pro-level input with their plan already in motion."
            image={ThredImage}
          />
        </Grid>
        <Grid item>
          <MediaCard
            title='Event Management — "Month of" Coordination'
            description="Also known as “Day of” coordination. If you've already planned everything but want pros to handle last-minute stuff and smooth sailing on the big day, this is for you."
            image={FourthImage}
          />
        </Grid>
      </Grid>
    </>
  );
}
