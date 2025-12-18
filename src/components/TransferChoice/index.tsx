import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export const CheckboxGroup: React.FC = () => {
  const [checked, setChecked] = useState({
    option0: false,
    option1: false,
    option2: false,
    option3: false,
    option4: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  return (
      <FormGroup>
      <FormControlLabel
          control={
            <Checkbox
              checked={checked.option0}
              onChange={handleChange}
              name='option0'
              color='primary'
            />
          }
          label='Все'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.option1}
              onChange={handleChange}
              name='option1'
              color='primary'
            />
          }
          label='Без пересадок'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.option2}
              onChange={handleChange}
              name='option2'
              color='primary'
            />
          }
          label='1 пересадка'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.option3}
              onChange={handleChange}
              name='option3'
              color='primary'
            />
          }
          label='2 пересадки'
        />
        <FormControlLabel 
            control={
            <Checkbox
                checked={checked.option4}
                onChange={handleChange}
                name='option4'
                color='primary'
            />
          }
            label= '3 пересадки'
        />
      </FormGroup>
  );
};