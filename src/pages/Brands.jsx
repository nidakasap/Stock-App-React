import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { Button, Container, Grid, Typography } from "@mui/material";
import BrandCard from "../components/Cards/BrandCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import BrandModal from "../components/Modals/BrandModal";

const Brands = () => {
  const { getStockData } = useStockCall();
  useEffect(() => {
    getStockData("brands");
  }, []);

  const [initialState, setInitialState] = useState({
    name: "",
    image: "",
  });

  const { brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      image: "",
    });
  };

  return (
    <Container>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button>
      <Grid container spacing={1} mt={2}>
        {brands.map((brand) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={brand._id}>
            <BrandCard
              {...brand}
              handleOpen={handleOpen}
              setInitialState={setInitialState}
            />
          </Grid>
        ))}
      </Grid>
      {open && (
        <BrandModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  );
};

export default Brands;
