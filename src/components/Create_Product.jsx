import React, { useState } from 'react';
import { 
  Box, Button, Card, CardContent, Checkbox, FormControlLabel, 
  Grid, InputLabel, MenuItem, Select, TextField, Typography 
} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const StyledCard = styled(Card)({
  maxWidth: 900,
  margin: '2rem auto',
  padding: '2rem',
  boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
  borderRadius: '16px'
});

const InsertDecoratorPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    rating: '',
    reviews: '',
    type: 'Indoor',
    services: [],
    shortlisted: false,
    promoted: false,
    description: ''
  });

  const [image, setImage] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [serviceInput, setServiceInput] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e, isFeatured = false) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (isFeatured) {
      setFeaturedImage(file);
    } else {
      setImage(file);
    }
  };

  const handleServiceAdd = () => {
    const service = serviceInput.trim();
    if (service && !formData.services.includes(service)) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, service]
      }));
      setServiceInput('');
    }
  };

  const handleServiceRemove = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      
      // Append all form data
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'services') {
          formDataToSend.append(key, value.join(','));
        } else {
          formDataToSend.append(key, value);
        }
      });
      
      // Append files
      if (image) formDataToSend.append('image', image);
      if (featuredImage) formDataToSend.append('featuredImage', featuredImage);

      const response = await axios.post('http://localhost:5000/api/product/create', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccess('Decorator added successfully!');
      setError('');
      
      // Reset form
      setFormData({
        name: '',
        location: '',
        price: '',
        rating: '',
        reviews: '',
        type: 'Indoor',
        services: [],
        shortlisted: false,
        promoted: false,
        description: ''
      });
      setImage(null);
      setFeaturedImage(null);
      setServiceInput('');
      
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add decorator');
      setSuccess('');
      console.error('Error:', err);
    }
  };

  return (
    <StyledCard sx={{ marginTop: "150px" }}>
      <CardContent>
        <Typography variant="h4" gutterBottom align="center">
          Add Wedding Decorator
        </Typography>

        {success && (
          <Typography color="success.main" sx={{ mb: 2 }}>
            {success}
          </Typography>
        )}
        {error && (
          <Typography color="error.main" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Rating"
                name="rating"
                type="number"
                value={formData.rating}
                onChange={handleChange}
                required
                inputProps={{ min: 0, max: 5, step: 0.1 }}
              />
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Reviews"
                name="reviews"
                type="number"
                value={formData.reviews}
                onChange={handleChange}
                required
                inputProps={{ min: 0 }}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Venue Type</InputLabel>
              <Select
                name="type"
                fullWidth
                value={formData.type}
                onChange={handleChange}
              >
                <MenuItem value="Indoor">Indoor</MenuItem>
                <MenuItem value="Outdoor">Outdoor</MenuItem>
                <MenuItem value="Indoor/Outdoor">Indoor/Outdoor</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Main Image</InputLabel>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <InputLabel>Featured Image (Optional)</InputLabel>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, true)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Add Service"
                value={serviceInput}
                onChange={(e) => setServiceInput(e.target.value)}
                fullWidth
              />
              <Button
                onClick={handleServiceAdd}
                sx={{ mt: 1 }}
                disabled={!serviceInput.trim()}
              >
                Add Service
              </Button>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {formData.services.map((service, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: '#eee',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {service}
                    <Button
                      onClick={() => handleServiceRemove(service)}
                      size="small"
                      sx={{ ml: 1 }}
                    >
                      ×
                    </Button>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="description"
                label="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="shortlisted"
                    checked={formData.shortlisted}
                    onChange={handleChange}
                  />
                }
                label="Shortlisted"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="promoted"
                    checked={formData.promoted}
                    onChange={handleChange}
                  />
                }
                label="Promoted"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
              >
                Add Decorator
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </StyledCard>
  );
};

export default InsertDecoratorPage;