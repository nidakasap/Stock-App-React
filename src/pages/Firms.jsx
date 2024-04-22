import React, { useEffect, useState } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { fetchFail, fetchStart, firmsSuccess } from '../features/stockSlice';
// import axios from "axios";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import FirmCard from "../components/Cards/FirmCard";
import FirmModal from "../components/Modals/FirmModal";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("firms:", firms);
  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <Container>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>
      <Grid container spacing={2} mt={3}>
        {firms.map((firm) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmCard {...firm} handleOpen={handleOpen} />
          </Grid>
        ))}
      </Grid>
      <FirmModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Firms;
