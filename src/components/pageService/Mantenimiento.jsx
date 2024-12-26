import React, { useState } from 'react';
import { Box, TextField, Button, Typography, FormControl, Select, MenuItem, Checkbox, FormControlLabel, InputLabel } from '@mui/material';
import { getProducts } from '../../productMock';

export const Mantenimiento = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    selectedModel: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({}); 

  const products = getProducts();

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = 'El correo electrónico es obligatorio';
    if (!formData.phone) formErrors.phone = 'El número es obligatorio';
    if (!formData.firstName) formErrors.firstName = 'El nombre es obligatorio';
    if (!formData.lastName) formErrors.lastName = 'El apellido es obligatorio';
    if (!formData.selectedModel) formErrors.selectedModel = 'Debe seleccionar un modelo de auto';
    if (!formData.termsAccepted) formErrors.termsAccepted = 'Debe aceptar los términos y condiciones';

    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); 
      return;
    }

    setFormData({
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      selectedModel: '',
      termsAccepted: false,
    }); 
    setErrors({}); 
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/en_crossregional/4x4/4x4-systems/terrains/hero/2017-jeep-4x4-terrain-hero-snow-compass-winter.jpg.img.2880.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 600,
          padding: 3,
          bgcolor: 'rgba(255, 255, 255, 0.7)', 
          borderRadius: 2,
          boxShadow: 3,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          Turno Mantenimiento
        </Typography>

        <TextField
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            mb: 2,
          }}
        />

        <TextField
          label="Número"
          variant="outlined"
          fullWidth
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{
            mb: 2,
          }}
        />

        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
          sx={{
            mb: 2,
          }}
        />

        <TextField
          label="Apellido"
          variant="outlined"
          fullWidth
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
          sx={{
            mb: 2,
          }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="model-select-label">Modelo de Auto</InputLabel>
          <Select
            labelId="model-select-label"
            id="model-select"
            value={formData.selectedModel}
            name="selectedModel"
            onChange={handleChange}
            label="Modelo de Auto"
            error={!!errors.selectedModel}
          >
            {products.map((model, index) => (
              <MenuItem key={index} value={model}>
                {model.name}
              </MenuItem>
            ))}
          </Select>
          {errors.selectedModel && (
            <Typography variant="body2" color="error">{errors.selectedModel}</Typography>
          )}
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.termsAccepted}
              onChange={handleChange}
              name="termsAccepted"
              color="primary"
            />
          }
          label="Acepto los términos y condiciones"
          sx={{ mb: 2 }}
        />
        {errors.termsAccepted && (
          <Typography variant="body2" color="error">{errors.termsAccepted}</Typography>
        )}

        <Button type="submit" variant="contained" color="black" fullWidth sx={{ bgcolor: 'yellow', '&:hover': { bgcolor: 'gold' }}}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};
