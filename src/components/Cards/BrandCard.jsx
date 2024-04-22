import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { Box, IconButton } from "@mui/material";

const BrandCard = ({ _id, name, image, handleOpen, setInitialState }) => {
  const { deleteStockData } = useStockCall();
  return (
    <Card
      sx={{
        height: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ccc",
          padding: "0.5rem 1rem",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Box>
          <IconButton>
            <EditIcon
              onClick={() => {
                handleOpen();
                setInitialState({ _id, name, image });
              }}
            />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon onClick={() => deleteStockData("brands", _id)} />
          </IconButton>
        </Box>
      </CardContent>
      <CardMedia
        sx={{ height: 170, objectFit: "contain" }}
        component="img"
        image={image}
        title={name}
      />
      <CardActions
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      ></CardActions>
    </Card>
  );
};

export default BrandCard;
