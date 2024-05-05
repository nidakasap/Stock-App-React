import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../components/Commons/PageHeader";
import KpiCards from "../components/Dashboard/KpiCards";
import Charts from "../components/Dashboard/Charts";

const Home = () => {
  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Dashboard" />
      <KpiCards />
      <Charts />
    </Container>
  );
};

export default Home;
