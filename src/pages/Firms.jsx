import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import FirmCard from "../components/Cards/FirmCard";
import MyButton from "../components/Commons/MyButton";
import PageHeader from "../components/Commons/PageHeader";
import StockModal from "../components/Commons/StockModal";
import FirmForm from "../components/Forms/FirmForm";
import useStockCall from "../hooks/useStockCall";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
  };
  const [initialState, setInitialState] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  console.log("firms:", firms);
  console.log("firms:", initialState);
  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Firms" />

      <MyButton variant="contained" onClick={handleOpen} title="New Firm" />
      <Grid container spacing={2} mt={3}>
        {firms.map((firm) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmCard
              {...firm}
              handleOpen={handleOpen}
              setInitialState={setInitialState}
            />
          </Grid>
        ))}
      </Grid>
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <FirmForm handleClose={handleClose} initialState={initialState} />
        </StockModal>
      )}
    </Container>
  );
};

export default Firms;
