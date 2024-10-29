import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    if (value !== '') {
      const convertedValue = (value * 9/5) + 32;
      setFahrenheit(convertedValue.toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    if (value !== '') {
      const convertedValue = (value - 32) * 5/9;
      setCelsius(convertedValue.toFixed(2));
    } else {
      setCelsius('');
    }
  };

  const handleReset = () => {
    setCelsius('');
    setFahrenheit('');
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <TextField
          label="Цельсий (°C)"
          variant="outlined"
          value={celsius}
          onChange={handleCelsiusChange}
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Фаренгейт (°F)"
          variant="outlined"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleReset}>
          Сбросить
        </Button>
      </Grid>
    </Grid>
  );
};

export default TemperatureConverter;
