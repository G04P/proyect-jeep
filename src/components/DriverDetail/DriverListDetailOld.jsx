import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, Divider, Tabs, Tab, Grid } from '@mui/material';
import Slider from 'react-slick';
import { getProducts } from '../../productMock';
import { TabsPanel } from '../../utils/TabsPanel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const DriverListDetail = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  const { id } = useParams();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  const products = getProducts();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <Typography variant="h4" color="error" sx={{ textAlign: 'center', mt: 5 }}>
        Producto no encontrado.
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 3, bgcolor: '#1c1c1c' }} position="relative">
      <Box
        sx={{
          maxWidth: '1520px',
          margin: '0 auto',
          bgcolor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: 3,
        }}
      >
        <Box
          component="img"
          width="100%"
          height="400"
          src="https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/desc-general/JEEP-RENEGADE-MY25-HERO-HOME.jpg.img.2880.jpg"
          alt={product.name}
        />

        <Divider sx={{ mb: 3 }} />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="tabs modelos"
              indicatorColor="primary"
              textColor="inherit"
              variant="standard"
              centered
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: 'black',
                },
                '& .MuiTab-root': {
                  color: 'black',
                },
              }}
            >
              {Object.keys(product.models).map((modelKey, index) => {
                const model = product.models[modelKey];
                return (
                  <Tab
                    key={index}
                    label={
                      <Box sx={{ textAlign: 'center' }}>
                        <CardMedia
                          component="img"
                          sx={{ height: '120px', width: 'auto' }}
                          image={model.colors[0]?.img || 'https://via.placeholder.com/50'}
                          alt={model.subName}
                        />
                        <Typography variant="body2">{model.subName}</Typography>
                      </Box>
                    }
                  />
                );
              })}
            </Tabs>
          </Box>

          {Object.keys(product.models).map((modelKey, index) => {
            const model = product.models[modelKey];
            return <TabsPanel key={index} value={value} index={index} model={model} />;
          })}
        </Box>

        <Divider sx={{ my: 4 }} />
        <Grid container spacing={2} gap={4} justifyContent="center" sx={{ mt: 4, py: 2 }}>
          {Object.values(product.models)[value]?.gallery.map((imgUrl, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={2.5}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card sx={{ display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={imgUrl}
                  alt={`Galería ${index}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />
        <Box sx={{ px: 3, pb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, textAlign: 'center' }}>
            VIVI TU AVENTURA CON JEEP
          </Typography>
          {product.slideGallery?.length ? (
            <Slider {...settings}>
              {product.slideGallery.map((imgUrl, index) => (
                <Box key={index} sx={{ px: 2 }}>
                  <CardMedia
                    component="img"
                    image={imgUrl}
                    alt={`Slide ${index}`}
                    sx={{ borderRadius: 2, height: 400, objectFit: 'cover', width: '100%' }}
                  />
                </Box>
              ))}
            </Slider>
          ) : (
            <Typography>No hay imágenes disponibles</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
