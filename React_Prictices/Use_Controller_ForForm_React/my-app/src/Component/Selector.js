import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Month}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Month" />}
      />
    );
  }
  const Month = [
    { label: 'January' },
    { label: 'February' },
    { label: 'March' },
    { label: 'April' },
    { label: 'May'},
    { label: "June" },
    { label: 'July' }]


