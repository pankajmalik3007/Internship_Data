import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const Form = () => {
  const { control} = useForm();

  
  return (
    <>
{/* <Container maxWidth = "sm"> */}
    <div className='form-container'>
    <Box mt={0}>
      <form >
        <Controller
          name="firstname"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              fullWidth
              label="FirstName"
              variant="outlined"
              margin="normal"
              {...field}
              required
            />
          )}
        />
         <Controller
          name="lastname"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              fullWidth
              label="LastName"
              variant="outlined"
              margin="normal"
              {...field}
              required
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              {...field}
              required
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              {...field}
              required
            />
          )}
        />
        {/* <Button
          type="submit"
          variant="outlined"
          
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button> */}
        
         <Button variant="contained" 
          type="submit"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
          endIcon={<SendIcon />}>
         Submit
        </Button>
      </form>
    </Box>
    </div>
 
    </>
  );
};

 export default Form;
