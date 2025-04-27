import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import fistImage from "../assets/1w.jpg";
import SecImage from "../assets/2w.jpg";

// Define a beautiful font (you can adjust this)
const fancyFont = "'Lora', serif";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  minWidth: 500,
  height: "100%",
  overflow: "hidden",
  position: "relative",
  transition: theme.transitions.create(["box-shadow", "transform"], {
    duration: theme.transitions.duration.easeInOut,
  }),
  "&:hover": {
    boxShadow: theme.shadows[10],
    transform: "scale(1.02)",
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 350,
  transition: "opacity 0.3s ease",
});

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
  backgroundColor: "rgba(255, 255, 255, 1)", // White background on hover
  opacity: 0,
  transition: "opacity 0.3s ease",
  zIndex: 2,
  color: "#666", // Darker text color
  "&:hover": {
    opacity: 1,
    animation: `${fadeIn} 0.3s ease`, // Apply fade-in animation
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.8rem", // Larger title on hover
  marginBottom: theme.spacing(2),
  textAlign: "center",
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  textAlign: "center",
}));

function MediaCard({ title, description, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <StyledCard
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <StyledCardMedia
        image={image}
        title={title}
        sx={{ opacity: hovered ? 0 : 1, transition: "opacity 0.3s ease" }}
      />
      <StyledCardContent sx={{ opacity: hovered ? 1 : 0 }}>
        <StyledTitle variant="h3">{title}</StyledTitle>
        <StyledDescription variant="body1">{description}</StyledDescription>

        <Typography
          variant="h5"
          sx={{
            fontSize: "1rem", // smaller font
            color: "#333",
            textDecoration: "underline", // underline it
            textUnderlineOffset: "4px", // (optional) pushes the underline a bit lower for vibes
          }}
        >
          Learn More
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}

export default function CardsRow() {
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        borderRadius: 2,
        p: 4,
        mx: "auto",
        width: "100%",
        mt: 5,
      }}
    >
      <Grid container spacing={10} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} md={6}>
          <MediaCard
            title="YOUR EVENT IS UNIQUE SO WE ARE"
            description="let us make it special for you.There is no event too big or too small for us to handle."
            image={fistImage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MediaCard
            title="YOUR MOMENT IS SPECIAL"
            description="This is not just a job for us, it is our passion. We are here to make your dreams come true."
            image={SecImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
