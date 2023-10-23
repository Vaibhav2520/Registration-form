import React from 'react';
import Typography from "@mui/material/Typography";
import {
  Button,
  Grid,
  styled,

} from "@mui/material";

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
  const DetailView = () => {
    // State and other logic can be added here
   
  
    
    return (
        <div>
        <div className="heading-container">
          <Typography variant="h2">Candidate Details</Typography>
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
            <Typography className="form-container">Vaibhav Vijay Sulakhe</Typography>
            </Grid>
            {/* row ends */}
            <Grid item xs={3}>
              <Typography className="form-container">Date</Typography>
            </Grid>
            <Grid item xs={3}>
             <Typography>10/27/2023 12:00 AM</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className="form-container">Gender</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Male</Typography>
            </Grid>
            {/* row ends */}
            <Grid item xs={3}>
              <Typography className="form-container">Hobbies</Typography>
            </Grid>
            <Grid item xs={3}>
             Cricket
            </Grid>
            <Grid item xs={3}>
              <Typography className="form-container">State</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>
                Karnataka
              </Typography>
            </Grid>
  
            {/* row ends */}
            <Grid item xs={3}>
              <Typography className="form-container">Address</Typography>
            </Grid>
            <Grid item xs={3}>
             <Typography>
                test
             </Typography>
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
            
          </Grid>
        </div>
      </div>
    );
  };
  
  export default DetailView;
