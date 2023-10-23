import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import {
  Alert,
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
import { insertCandidate } from "../firestore/insertCandidate";

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
  const [candidate, setCandidate] = useState({
    name: "",
    dob: "",
    gender: "",
    hobbies: [],
    state: "",
    address: "",
    resume: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    insertCandidate(candidate);
    setShowAlert(true);
  };

  const addHobbies = (hobby) => {
    let hobbies = [...candidate.hobbies];
    if (!hobbies.includes(hobby)) {
      hobbies.push(hobby);
    } else {
      hobbies = hobbies.filter((h) => h !== hobby);
    }
    setCandidate({ ...candidate, hobbies: hobbies });
  };
  return (
    <div>
      <div className="heading-container">
        <Typography variant="h2">Register</Typography>
      </div>
      {showAlert && (
        <Alert className="alert-box" onClose={() => setShowAlert(false)}>
          Candidate added to database!
        </Alert>
      )}
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
              onChange={(e) =>
                setCandidate({ ...candidate, name: e.target.value })
              }
            />
          </Grid>
          {/* row ends */}
          <Grid item xs={3}>
            <Typography className="form-container">DOB</Typography>
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Basic date time picker"
                  onChange={(e) =>
                    setCandidate({ ...candidate, dob: e.toDate() })
                  }
                />
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
                onChange={(e) =>
                  setCandidate({ ...candidate, gender: e.target.value })
                }
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
            <FormGroup
              aria-label="position"
              row
              onChange={(e) => addHobbies(e.target.value)}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="FootBall"
                value="Football"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Cricket"
                value="Cricket"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={3}>
            <Typography className="form-container">States</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">States</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={candidate.state}
                label="States"
                onChange={(e) =>
                  setCandidate({ ...candidate, state: e.target.value })
                }
              >
                <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
                <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* row ends */}
          <Grid item xs={3}>
            <Typography className="form-container">Address</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextareaAutosize
              onChange={(e) =>
                setCandidate({ ...candidate, address: e.target.value })
              }
              aria-label="minimum height"
              minRows={3}
            />
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
            <Button
              onClick={handleSubmit}
              variant="contained"
              style={{ marginTop: "3em" }}
            >
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
