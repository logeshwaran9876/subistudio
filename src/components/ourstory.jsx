import React, { useState } from "react";
import {
  FilterList as FilterIcon,
  Search as SearchIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  LocationOn as LocationIcon,
  ChevronRight as ChevronRightIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
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
  alpha,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { styled } from "@mui/system";

// Custom theme with wedding-appropriate colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0", // Purple
    },
    secondary: {
      main: "#ff4081", // Pink
    },
    background: {
      default: "#f9f5f9", // Light purple tint
    },
  },
  typography: {
    fontFamily:
      '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 600,
    },
  },
});

// Dynamic image loading (Vite)
const imageModules = import.meta.glob("../assets/reception/image*.jpg", {
  eager: true,
});
const allImages = Object.values(imageModules).map((module) => module.default);

// Generate random data
const randomNames = [
  "Merge Events",
  "If Designs",
  "Cathy Events",
  "Boah Events",
  "Parveen Decor",
  "Royal Weddings",
  "Elegant Decor",
  "Luxury Designs",
  "Dream Weddings",
  "Heavenly Decor",
  "Pearl Events",
  "Golden Touch",
];

const randomLocations = [
  "Delhi",
  "Mumbai",
  "Jaipur",
  "Chennai",
  "Hyderabad",
  "Bangalore",
  "Kolkata",
  "Pune",
  "Goa",
  "Udaipur",
];

const randomServices = [
  "Tent Decor",
  "Lighting",
  "Floral Arrangements",
  "Mandap Decor",
  "Stage Setup",
  "Theme Weddings",
  "Entrance Decor",
  "Ceiling Decor",
  "Poolside Decor",
  "Garden Weddings",
  "Luxury Decor",
  "Traditional Decor",
];

const randomDescriptions = [
  "Specializing in contemporary wedding designs with a touch of tradition.",
  "Royal wedding specialists with modern aesthetics.",
  "Luxury wedding planners with international experience.",
  "Affordable elegance for your special day.",
  "Premier wedding decor specialists with years of experience.",
  "Nature-inspired wedding designs with contemporary flair.",
  "Creating magical moments with exquisite decor.",
  "Transforming venues into dream wedding spaces.",
];

const getRandomItems = (arr, count = 4) => {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
};

// Generate 80 customers with random data
const generateCustomers = () => {
  return allImages.map((img, index) => ({
    id: index + 1,
    name: `${randomNames[index % randomNames.length]} ${(index % 5) + 1}`,
    location:
      randomLocations[Math.floor(Math.random() * randomLocations.length)],
    price: Math.floor(Math.random() * 100000) + 20000,
    rating: (Math.random() * 1.5 + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 50) + 5,
    type: ["Indoor", "Outdoor", "Indoor/Outdoor"][index % 3],
    image: img,
    services: getRandomItems(randomServices, 4),
    shortlisted: false,
    promoted: index < 12, // First 12 are promoted
    featuredImage: img,
    description: randomDescriptions[index % randomDescriptions.length],
  }));
};

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  transition: "all 0.3s ease",
  height: "100%",
  display: "flex",
  width: "1000px",
  flexDirection: "column",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const PromotedBadge = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 16,
  left: 16,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 20,
  fontSize: 12,
  fontWeight: "bold",
  zIndex: 1,
  boxShadow: theme.shadows[2],
}));

const ServiceChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.dark,
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: "100%",
  backgroundColor: alpha(theme.palette.primary.light, 0.05),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
}));

const OurStoryPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    message: "",
    itemId: null,
  });
  const theme = useTheme();
  const [budgetFilter, setBudgetFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [serviceFilter, setServiceFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState("relevant");
  const [customers] = useState(generateCustomers());

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Filter and sort customers
  const filteredCustomers = customers
    .filter((customer) => {
      return (
        (budgetFilter === "" ||
          (budgetFilter === "under50k" && customer.price < 50000) ||
          (budgetFilter === "50k-1L" &&
            customer.price >= 50000 &&
            customer.price <= 100000) ||
          (budgetFilter === "over1L" && customer.price > 100000)) &&
        (locationFilter === "" ||
          customer.location
            .toLowerCase()
            .includes(locationFilter.toLowerCase())) &&
        (ratingFilter === 0 || customer.rating >= ratingFilter) &&
        (serviceFilter === "" ||
          customer.services.some((service) =>
            service.toLowerCase().includes(serviceFilter.toLowerCase())
          )) &&
        (searchQuery === "" ||
          customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          customer.location.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "rating":
          return b.rating - a.rating;
        case "priceLow":
          return a.price - b.price;
        case "priceHigh":
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
    const updatedCustomers = customers.map((customer) =>
      customer.id === id
        ? { ...customer, shortlisted: !customer.shortlisted }
        : customer
    );
    // In a real app, you would update state here
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: 10 }}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          {/* Search and Filters */}
          <Paper elevation={3} sx={{ p: 4, mb: 6, borderRadius: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 3,
                mb: 4,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search decorators, locations, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <SearchIcon color="primary" sx={{ mr: 1 }} />,
                  sx: { borderRadius: 2 },
                }}
                sx={{ flexGrow: 1 }}
              />
              <Button
                variant="contained"
                color="secondary"
                startIcon={<FilterIcon />}
                sx={{ borderRadius: 2, px: 4, py: 1.5, whiteSpace: "nowrap" }}
              >
                Filters
              </Button>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
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
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
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
                  {[...new Set(randomLocations)].map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
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
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
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
                  {randomServices.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Paper>

          {/* Results Header */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
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
          {filteredCustomers.filter((c) => c.promoted).length > 0 && (
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 600, color: "text.primary", mb: 3 }}
              >
                Featured Wedding Decorators
              </Typography>
              <Grid container spacing={4}>
                {filteredCustomers
                  .filter((customer) => customer.promoted)
                  .map((customer) => (
                    <Grid item xs={12} md={6} lg={4} key={customer.id}>
                      <StyledCard>
                        {customer.promoted && (
                          <PromotedBadge>FEATURED</PromotedBadge>
                        )}
                        <CardMedia
                          component="img"
                          height="240"
                          image={customer.featuredImage || customer.image}
                          alt={customer.name}
                          sx={{ objectPosition: "top" }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                              mb: 2,
                            }}
                          >
                            <Typography
                              variant="h6"
                              component="div"
                              sx={{ fontWeight: 600 }}
                            >
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

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1,
                            }}
                          >
                            <LocationIcon
                              fontSize="small"
                              color="action"
                              sx={{ mr: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {customer.location}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                            }}
                          >
                            <Box sx={{ display: "flex", mr: 1 }}>
                              {[...Array(5)].map((_, i) =>
                                i < Math.floor(customer.rating) ? (
                                  <StarIcon
                                    key={i}
                                    fontSize="small"
                                    color="primary"
                                  />
                                ) : (
                                  <StarBorderIcon
                                    key={i}
                                    fontSize="small"
                                    color="primary"
                                  />
                                )
                              )}
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              ({customer.reviews} reviews)
                            </Typography>
                          </Box>

                          <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                            {customer.description}
                          </Typography>

                          <Box sx={{ mb: 2 }}>
                            {customer.services
                              .slice(0, 4)
                              .map((service, index) => (
                                <ServiceChip
                                  key={index}
                                  label={service}
                                  size="small"
                                />
                              ))}
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mt: "auto",
                            }}
                          >
                            <Typography variant="h6" color="primary">
                              {formatCurrency(customer.price)}
                              <Typography
                                component="span"
                                variant="body2"
                                color="text.secondary"
                                sx={{ ml: 1 }}
                              >
                                ({customer.type})
                              </Typography>
                            </Typography>
                            <Button
                              variant="contained"
                              color="primary"
                              endIcon={<ChevronRightIcon />}
                              sx={{ borderRadius: 2 }}
                              onClick={() => {
                                setFormData((prev) => ({
                                  ...prev,
                                  itemId: customer.image.split('/').pop(), // this grabs just the filename
                                }));
                                setOpenDialog(true);
                              }}
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
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, color: "text.primary", mb: 3 }}
            >
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
                      sx={{ objectPosition: "top" }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ fontWeight: 600 }}
                        >
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

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <LocationIcon
                          fontSize="small"
                          color="action"
                          sx={{ mr: 1 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {customer.location}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Box sx={{ display: "flex", mr: 1 }}>
                          {[...Array(5)].map((_, i) =>
                            i < Math.floor(customer.rating) ? (
                              <StarIcon
                                key={i}
                                fontSize="small"
                                color="primary"
                              />
                            ) : (
                              <StarBorderIcon
                                key={i}
                                fontSize="small"
                                color="primary"
                              />
                            )
                          )}
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          ({customer.reviews} reviews)
                        </Typography>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        {customer.services.slice(0, 3).map((service, index) => (
                          <ServiceChip
                            key={index}
                            label={service}
                            size="small"
                          />
                        ))}
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="subtitle1" color="primary">
                          {formatCurrency(customer.price)}
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          sx={{ borderRadius: 2 }}
                          onClick={() => setOpenDialog(true)}
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
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
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
          <Paper
            elevation={0}
            sx={{
              p: 6,
              my: 8,
              borderRadius: 2,
              backgroundColor: alpha(theme.palette.primary.light, 0.05),
            }}
          >
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: 700, mb: 6 }}
            >
              The WeddingBazaar Journey
            </Typography>

            <Grid container spacing={6} sx={{ mb: 6 }}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: "center", p: 3 }}>
                  <Typography
                    variant="h2"
                    color="primary"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
                    1M+
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Couples Connected
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: "center", p: 3 }}>
                  <Typography
                    variant="h2"
                    color="primary"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
                    50K+
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Verified Vendors
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: "center", p: 3 }}>
                  <Typography
                    variant="h2"
                    color="primary"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
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
                  Founded in 2010 as part of the Matrimony.com group,
                  WeddingBazaar began with a simple mission: to make wedding
                  planning stress-free and enjoyable for couples across India.
                  What started as a small directory of wedding vendors has now
                  grown into India's most trusted wedding planning platform.
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Our team of wedding experts carefully verifies each vendor to
                  ensure quality and reliability. We've helped over 1 million
                  couples find everything from decorators to photographers,
                  venues to caterers.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Our Promise
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Today, WeddingBazaar continues to innovate with features like
                  virtual venue tours, AI-powered recommendations, and seamless
                  booking experiences - always staying true to our core values
                  of trust, transparency, and making every wedding special.
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  We understand that your wedding is one of the most important
                  days of your life, and we're honored to help make it
                  everything you've dreamed of and more.
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Testimonials */}
          <Box sx={{ my: 8 }}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: 700, mb: 6 }}
            >
              Real Wedding Stories
            </Typography>

            <Grid container spacing={4}>
              {[
                {
                  quote:
                    "WeddingBazaar made finding our perfect decorator effortless! We compared prices, saw portfolios, and read reviews all in one place. Our wedding looked exactly how we envisioned.",
                  author: "Priya & Rohan, Bangalore",
                  rating: 5,
                },
                {
                  quote:
                    "As budget-conscious planners, the price filtering was invaluable. We found an amazing team that delivered luxury within our means. The quality exceeded our expectations!",
                  author: "Ananya & Vikram, Delhi",
                  rating: 5,
                },
                {
                  quote:
                    "The shortlist feature saved us countless hours. Being able to save and compare favorites side-by-side made decision-making so much easier. Highly recommend!",
                  author: "Neha & Arjun, Mumbai",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <TestimonialCard>
                    <CardContent>
                      <Box sx={{ display: "flex", mb: 3 }}>
                        {[...Array(5)].map((_, i) =>
                          i < testimonial.rating ? (
                            <StarIcon
                              key={i}
                              fontSize="small"
                              color="primary"
                            />
                          ) : (
                            <StarBorderIcon
                              key={i}
                              fontSize="small"
                              color="primary"
                            />
                          )
                        )}
                      </Box>
                      <Typography
                        variant="body1"
                        paragraph
                        color="text.secondary"
                        sx={{ fontStyle: "italic" }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      >
                        {testimonial.author}
                      </Typography>
                    </CardContent>
                  </TestimonialCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Call to Action */}
          <Paper
            elevation={3}
            sx={{
              p: 6,
              my: 8,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              color: "common.white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3 }}
            >
              Ready to Plan Your Dream Wedding?
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: 700, margin: "0 auto", mb: 4 }}
            >
              Join thousands of couples who found their perfect wedding vendors
              through WeddingBazaar.
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
                color: "common.white",
              }}
            >
              Get Started Today
            </Button>
          </Paper>
        </Container>

        {/* Contact Dialog */}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Contact Decorator</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
          >
            <TextField
              label="Mobile Number"
              type="tel"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              fullWidth
            />
            
            <TextField
              label="Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Item ID"
              type="text"
              value={formData.itemId}
              onChange={(e) =>
                setFormData({ ...formData, itemId: e.target.value })
              }
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button
              variant="contained"
              onClick={() => {
                // Submit logic here
                console.log("Submitted:", formData);
                setOpenDialog(false);
              }}
            >
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default OurStoryPage;