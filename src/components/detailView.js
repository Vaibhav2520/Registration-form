import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, styled } from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../styles/register.scss";
import { useParams } from "react-router-dom";
import { getDataById } from "../firestore/getCandidateById";

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
  let { id } = useParams();
  const [candidateData, setCandidateData] = useState({
    name: "",
    dob: "",
    gender: "",
    hobbies: [],
    state: "",
    address: "",
    resume: "",
  });

  const fetchData = async () => {
    const data = await getDataById(id);
    setCandidateData({
      ...data,
      dob: data?.dob.toDate().toString(),
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
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
            <Typography className="form-container">
              {candidateData?.name}
            </Typography>
          </Grid>
          {/* row ends */}
          <Grid item xs={3}>
            <Typography className="form-container">Date</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{candidateData?.dob}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className="form-container">Gender</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{candidateData?.gender}</Typography>
          </Grid>
          {/* row ends */}
          <Grid item xs={3}>
            <Typography className="form-container">Hobbies</Typography>
          </Grid>
          <Grid item xs={3}>
            {candidateData?.hobbies.map((data) => `${data}, `)}
          </Grid>
          <Grid item xs={3}>
            <Typography className="form-container">State</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{candidateData?.state}</Typography>
          </Grid>
          {/* row ends */}
          <Grid item xs={3}>
            <Typography className="form-container">Address</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{candidateData?.address}</Typography>
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
