import React from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  styled,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../styles/register.scss";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Register = () => {
  // State and other logic can be added here
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="heading-container">
        <Typography variant="h2">Register</Typography>
      </div>
      <div className="body-container">
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="grid-container"
        >
          <Grid item xs={3}>
            <Typography className="form-container">Name</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="form-field"
            />
          </Grid>
          {/* row ends */}
          <Grid item xs={3}>
            <Typography className="form-container">Date</Typography>
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker label="Basic date time picker" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            <Typography className="form-container">Gender</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* row ends */}
          <Grid item xs={3}>
            <Typography className="form-container">Hobbies</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                control={<Checkbox />}
                label="FootBall"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Cricket"
              />
              
            </FormGroup>
          </Grid>
          <Grid item xs={3}>
            <Typography className="form-container">Hobbies</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">States</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label='States'
                onChange={handleChange}
              >
                <MenuItem value={10}>Karnataka</MenuItem>
                <MenuItem value={20}>Maharashtra</MenuItem>
                <MenuItem value={30}>Rajasthan</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* row ends */}
          <Grid item xs={3}>
            <Typography className="form-container">Address</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextareaAutosize aria-label="minimum height" minRows={3} />
          </Grid>
          <Grid item xs={3}>
            <Typography className="form-container">Resume</Typography>
          </Grid>
          <Grid item xs={3}>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button variant="contained" style={{ marginTop: "3em" }}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" style={{ marginTop: "3em" }}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Register;
