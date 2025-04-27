import React, { useState } from 'react';
import { 
  FilterList as FilterIcon, 
  Search as SearchIcon, 
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  LocationOn as LocationIcon,
  Event as EventIcon,
  MonetizationOn as PriceIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

import image1 from '../assets/1w.jpg';
import image2 from '../assets/2w.jpg';
import image3 from '../assets/3w.jpg';
import image4 from '../assets/4w.jpg';
import image5 from '../assets/5w.jpg';
import image6 from '../assets/6w.jpg';


import { 
  Box,
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Container,
  Divider, 
  Grid, 
  MenuItem, 
  Paper,
  Select, 
  TextField,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Pagination,
  useTheme,
  ThemeProvider,
  createTheme,
  alpha
} from '@mui/material';
import { styled } from '@mui/system';

// Custom theme with wedding-appropriate colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0', // Purple
    },
    secondary: {
      main: '#ff4081', // Pink
    },
    background: {
      default: '#f9f5f9', // Light purple tint
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
    },
  },
});

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.8)} 0%, ${alpha(theme.palette.secondary.main, 0.8)} 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(6),
  textAlign: 'center',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const PromotedBadge = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 16,
  left: 16,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 20,
  fontSize: 12,
  fontWeight: 'bold',
  zIndex: 1,
  boxShadow: theme.shadows[2],
}));

const ServiceChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.dark,
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: alpha(theme.palette.primary.light, 0.05),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
}));

const OurStoryPage = () => {
  const theme = useTheme();
  const [budgetFilter, setBudgetFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [serviceFilter, setServiceFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState('relevant');
  
  // Sample customer data
  const customers = [
    {
      id: 1,
      name: 'Merge Events',
      location: 'Bangalore',
      price: 50000,
      rating: 4.5,
      reviews: 12,
      type: 'Indoor',
      image: image1,
      services: ['Tent Decor', 'Floral Arrangements', 'Lighting', 'Stage Design'],
      shortlisted: false,
      promoted: true,
      featuredImage: image1,
      description: 'Specializing in contemporary wedding designs with a touch of tradition.'
    },
    {
      id: 2,
      name: 'If Designs',
      location: 'Jaipur',
      price: 100000,
      rating: 5.0,
      reviews: 28,
      type: 'Outdoor',
      image: image2,
      services: ['Theme Weddings', 'Mandap Decor', 'Stage Design', 'Ceiling Decor'],
      shortlisted: false,
      promoted: true,
      featuredImage: image2,
      description: 'Royal Rajasthani wedding specialists with modern aesthetics'
    },
    {
      id: 3,
      name: 'Cathy Events And Decoration',
      location: 'Chennai',
      price: 120000,
      rating: 5.0,
      reviews: 45,
      type: 'Indoor/Outdoor',
      image: image3,
      services: ['Destination Weddings', 'Luxury Decor', 'Florists', 'Lighting'],
      shortlisted: false,
      promoted: true,
      featuredImage: image3,
      description: 'Luxury wedding planners with international experience'
    },
    {
      id: 4,
      name: 'Boah Wedding and Events',
      location: 'Hyderabad',
      price: 30000,
      rating: 4.9,
      reviews: 36,
      type: 'Indoor',
      image: image4,
      services: ['Budget Decor', 'Traditional Themes', 'Stage Setup', 'Floral'],
      shortlisted: false,
      promoted: false,
      featuredImage: image4,
      description: 'Affordable elegance for your special day'
    },
    {
      id: 5,
      name: 'Parveen Wedding Decorators',
      location: 'Delhi',
      price: 75000,
      rating: 4.6,
      reviews: 19,
      type: 'Indoor',
      image: image5,
      services: ['Mandap Design', 'Ceiling Decor', 'Entrance Decor', 'Lighting'],
      shortlisted: false,
      promoted: false,
      featuredImage: image5,
      description: 'Delhi\'s premier wedding decor specialists since 2005'
    },
    {
      id: 6,
      name: 'Multichandigarh Decorators',
      location: 'Chandigarh',
      price: 45000,
      rating: 4.5,
      reviews: 8,
      type: 'Outdoor',
      image: image6,
      services: ['Garden Weddings', 'Poolside Decor', 'Floral Arch', 'Tent Decor'],
      shortlisted: false,
      promoted: false,
      featuredImage: image6,
      description: 'Nature-inspired wedding designs with contemporary flair'
    }
  ];

  // Filter and sort customers
  const filteredCustomers = customers
  .filter(customer => {
    return (
      (budgetFilter === '' || 
        (budgetFilter === 'under50k' && customer.price < 50000) ||
        (budgetFilter === '50k-1L' && customer.price >= 50000 && customer.price <= 100000) ||
        (budgetFilter === 'over1L' && customer.price > 100000)
      ) &&
      (locationFilter === '' || customer.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (ratingFilter === 0 || customer.rating >= ratingFilter) &&
      (serviceFilter === '' || customer.services.some(service => 
        service.toLowerCase().includes(serviceFilter.toLowerCase()))) &&
      (searchQuery === '' || 
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.location.toLowerCase().includes(searchQuery.toLowerCase())) // <-- Closed this parenthesis
    );
  })
  .sort((a, b) => {
    switch (sortOption) {
      case 'rating':
        return b.rating - a.rating;
      case 'priceLow':
        return a.price - b.price;
      case 'priceHigh':
        return b.price - a.price;
      default:
        return b.promoted - a.promoted || b.rating - a.rating;
    }
  });


  // Pagination
  const itemsPerPage = 6;
  const pageCount = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Toggle shortlist
  const toggleShortlist = (id) => {
    const updatedCustomers = customers.map(customer => 
      customer.id === id ? {...customer, shortlisted: !customer.shortlisted} : customer
    );
    // In a real app, you would update state here
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop:10}}>
        {/* Hero Section */}
        

        <Container maxWidth="lg" sx={{ py: 6 }}>
          {/* Search and Filters */}
          <Paper elevation={3} sx={{ p: 4, mb: 6, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3, mb: 4 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search decorators, locations, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <SearchIcon color="primary" sx={{ mr: 1 }} />,
                  sx: { borderRadius: 2 }
                }}
                sx={{ flexGrow: 1 }}
              />
              <Button 
                variant="contained" 
                color="secondary"
                startIcon={<FilterIcon />}
                sx={{ borderRadius: 2, px: 4, py: 1.5, whiteSpace: 'nowrap' }}
              >
                Filters
              </Button>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Budget
                </Typography>
                <Select
                  fullWidth
                  value={budgetFilter}
                  onChange={(e) => setBudgetFilter(e.target.value)}
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={{ borderRadius: 2 }}
                >
                  <MenuItem value="">All Budgets</MenuItem>
                  <MenuItem value="under50k">Under ₹50K</MenuItem>
                  <MenuItem value="50k-1L">₹50K - ₹1L</MenuItem>
                  <MenuItem value="over1L">Over ₹1L</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Location
                </Typography>
                <Select
                  fullWidth
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={{ borderRadius: 2 }}
                >
                  <MenuItem value="">All Locations</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  <MenuItem value="Jaipur">Jaipur</MenuItem>
                  <MenuItem value="Chennai">Chennai</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Rating
                </Typography>
                <Select
                  fullWidth
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={{ borderRadius: 2 }}
                >
                  <MenuItem value={0}>All Ratings</MenuItem>
                  <MenuItem value={4}>4+ Stars</MenuItem>
                  <MenuItem value={4.5}>4.5+ Stars</MenuItem>
                  <MenuItem value={5}>5 Stars</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Services
                </Typography>
                <Select
                  fullWidth
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={{ borderRadius: 2 }}
                >
                  <MenuItem value="">All Services</MenuItem>
                  <MenuItem value="Tent">Tent Decor</MenuItem>
                  <MenuItem value="Floral">Floral Arrangements</MenuItem>
                  <MenuItem value="Lighting">Lighting</MenuItem>
                  <MenuItem value="Mandap">Mandap Decor</MenuItem>
                  <MenuItem value="Stage">Stage Design</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Paper>

          {/* Results Header */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h5" color="text.primary">
              {filteredCustomers.length} Wedding Decorators Found
            </Typography>
            <ToggleButtonGroup
              value={sortOption}
              exclusive
              onChange={(e, newValue) => newValue && setSortOption(newValue)}
              aria-label="Sort by"
              sx={{ mt: { xs: 2, sm: 0 } }}
            >
              <ToggleButton value="relevant" aria-label="Relevant">
                Relevant
              </ToggleButton>
              <ToggleButton value="rating" aria-label="Rating">
                Rating
              </ToggleButton>
              <ToggleButton value="priceLow" aria-label="Price Low to High">
                Price: Low to High
              </ToggleButton>
              <ToggleButton value="priceHigh" aria-label="Price High to Low">
                Price: High to Low
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Promoted Section */}
          {filteredCustomers.filter(c => c.promoted).length > 0 && (
            <Box sx={{ mb: 8 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
                Featured Wedding Decorators
              </Typography>
              <Grid container spacing={4}>
                {filteredCustomers
                  .filter(customer => customer.promoted)
                  .map((customer) => (
                    <Grid item xs={12} md={6} lg={4} key={customer.id}>
                      <StyledCard>
                        {customer.promoted && <PromotedBadge>FEATURED</PromotedBadge>}
                        <CardMedia
                          component="img"
                          height="240"
                          image={customer.featuredImage || customer.image}
                          alt={customer.name}
                          sx={{ objectPosition: 'top' }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                              {customer.name}
                            </Typography>
                            <Button 
                              size="small" 
                              onClick={() => toggleShortlist(customer.id)}
                              sx={{ minWidth: 0 }}
                            >
                              {customer.shortlisted ? (
                                <FavoriteIcon color="secondary" />
                              ) : (
                                <FavoriteBorderIcon color="action" />
                              )}
                            </Button>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              {customer.location}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ display: 'flex', mr: 1 }}>
                              {[...Array(5)].map((_, i) => (
                                i < Math.floor(customer.rating) ? 
                                  <StarIcon key={i} fontSize="small" color="primary" /> : 
                                  <StarBorderIcon key={i} fontSize="small" color="primary" />
                              ))}
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              ({customer.reviews} reviews)
                            </Typography>
                          </Box>
                          
                          <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                            {customer.description}
                          </Typography>
                          
                          <Box sx={{ mb: 2 }}>
                            {customer.services.slice(0, 4).map((service, index) => (
                              <ServiceChip key={index} label={service} size="small" />
                            ))}
                          </Box>
                          
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                            <Typography variant="h6" color="primary">
                              {formatCurrency(customer.price)}
                              <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                ({customer.type})
                              </Typography>
                            </Typography>
                            <Button 
                              variant="contained" 
                              color="primary"
                              endIcon={<ChevronRightIcon />}
                              sx={{ borderRadius: 2 }}
                            >
                              View
                            </Button>
                          </Box>
                        </CardContent>
                      </StyledCard>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          )}

          {/* All Decorators */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'text.primary', mb: 3 }}>
              All Wedding Decorators
            </Typography>
            <Grid container spacing={4}>
              {paginatedCustomers.map((customer) => (
                <Grid item xs={12} sm={6} lg={4} key={customer.id}>
                  <StyledCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={customer.image}
                      alt={customer.name}
                      sx={{ objectPosition: 'top' }}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                          {customer.name}
                        </Typography>
                        <Button 
                          size="small" 
                          onClick={() => toggleShortlist(customer.id)}
                          sx={{ minWidth: 0 }}
                        >
                          {customer.shortlisted ? (
                            <FavoriteIcon color="secondary" />
                          ) : (
                            <FavoriteBorderIcon color="action" />
                          )}
                        </Button>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {customer.location}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ display: 'flex', mr: 1 }}>
                          {[...Array(5)].map((_, i) => (
                            i < Math.floor(customer.rating) ? 
                              <StarIcon key={i} fontSize="small" color="primary" /> : 
                              <StarBorderIcon key={i} fontSize="small" color="primary" />
                          ))}
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          ({customer.reviews} reviews)
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        {customer.services.slice(0, 3).map((service, index) => (
                          <ServiceChip key={index} label={service} size="small" />
                        ))}
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="subtitle1" color="primary">
                          {formatCurrency(customer.price)}
                        </Typography>
                        <Button 
                          variant="outlined" 
                          color="primary"
                          size="small"
                          sx={{ borderRadius: 2 }}
                        >
                          Details
                        </Button>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Pagination */}
          {pageCount > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="primary"
                shape="rounded"
                size="large"
              />
            </Box>
          )}

          {/* Our Story Content */}
          <Paper elevation={0} sx={{ p: 6, my: 8, borderRadius: 2, backgroundColor: alpha(theme.palette.primary.light, 0.05) }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
              The WeddingBazaar Journey
            </Typography>
            
            <Grid container spacing={6} sx={{ mb: 6 }}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h2" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                    1M+
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Couples Connected
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h2" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                    50K+
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Verified Vendors
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h2" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                    200+
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Cities Covered
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 4 }} />
            
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Our Beginning
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Founded in 2010 as part of the Matrimony.com group, WeddingBazaar began with a simple mission: 
                  to make wedding planning stress-free and enjoyable for couples across India. What started as a 
                  small directory of wedding vendors has now grown into India's most trusted wedding planning platform.
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Our team of wedding experts carefully verifies each vendor to ensure quality and reliability. 
                  We've helped over 1 million couples find everything from decorators to photographers, venues to caterers.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Our Promise
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Today, WeddingBazaar continues to innovate with features like virtual venue tours, AI-powered 
                  recommendations, and seamless booking experiences - always staying true to our core values of 
                  trust, transparency, and making every wedding special.
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  We understand that your wedding is one of the most important days of your life, and we're honored 
                  to help make it everything you've dreamed of and more.
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Testimonials */}
          <Box sx={{ my: 8 }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
              Real Wedding Stories
            </Typography>
            
            <Grid container spacing={4}>
              {[
                {
                  quote: "WeddingBazaar made finding our perfect decorator effortless! We compared prices, saw portfolios, and read reviews all in one place. Our wedding looked exactly how we envisioned.",
                  author: "Priya & Rohan, Bangalore",
                  rating: 5
                },
                {
                  quote: "As budget-conscious planners, the price filtering was invaluable. We found an amazing team that delivered luxury within our means. The quality exceeded our expectations!",
                  author: "Ananya & Vikram, Delhi",
                  rating: 5
                },
                {
                  quote: "The shortlist feature saved us countless hours. Being able to save and compare favorites side-by-side made decision-making so much easier. Highly recommend!",
                  author: "Neha & Arjun, Mumbai",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <TestimonialCard>
                    <CardContent>
                      <Box sx={{ display: 'flex', mb: 3 }}>
                        {[...Array(5)].map((_, i) => (
                          i < testimonial.rating ? 
                            <StarIcon key={i} fontSize="small" color="primary" /> : 
                            <StarBorderIcon key={i} fontSize="small" color="primary" />
                        ))}
                      </Box>
                      <Typography variant="body1" paragraph color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        "{testimonial.quote}"
                      </Typography>
                      <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600 }}>
                        {testimonial.author}
                      </Typography>
                    </CardContent>
                  </TestimonialCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Call to Action */}
          <Paper elevation={3} sx={{ 
            p: 6, 
            my: 8, 
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            color: 'common.white',
            textAlign: 'center'
          }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Plan Your Dream Wedding?
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, margin: '0 auto', mb: 4 }}>
              Join thousands of couples who found their perfect wedding vendors through WeddingBazaar.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              endIcon={<ChevronRightIcon />}
              sx={{ 
                px: 6,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                color: 'common.white'
              }}
            >
              Get Started Today
            </Button>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default OurStoryPage;