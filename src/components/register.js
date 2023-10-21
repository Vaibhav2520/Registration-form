import React from 'react';
import Typography from '@mui/material/Typography';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, styled, TextareaAutosize, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "../styles/register.scss"

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const Register = () => {
  // State and other logic can be added here

  return (
    <div>
    <div className='heading-container'>
     <Typography variant='h2' >
      Register
     </Typography>
    </div>
    <div className='body-container'>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
  <Grid item xs={4}>
   <Typography className='form-container'>Name</Typography>
  </Grid>
  <Grid item xs={8}>
  <TextField id="outlined-basic" variant="outlined" className='form-field'/>
  </Grid>
  {/* row ends */}
  <Grid item xs={3}>
   <Typography className='form-container'></Typography>
  </Grid>
  <Grid item xs={3}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Date Of Birth" />
      </DemoContainer>
    </LocalizationProvider>
  </Grid>
  <Grid item xs={3}>
   <Typography className='form-container'>Gender</Typography>
  </Grid>
  <Grid item xs={3}>
  <FormControl>

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>

  </Grid>
  {/* row ends */}
  <Grid item xs={3}>
   <Typography className='form-container'>Address</Typography>
  </Grid>
  <Grid item xs={3}>
  <TextareaAutosize aria-label="minimum height" minRows={3}/>
  </Grid>
  <Grid item xs={3}>
   <Typography className='form-container'>Resume</Typography>
  </Grid>
  <Grid item xs={3}>
  <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
  Upload file
  <VisuallyHiddenInput type="file" />
</Button>
  </Grid>

</Grid>
    </div>
    </div>
  );
};

export default Register;
