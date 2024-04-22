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
import BusinessIcon from "@mui/icons-material/Business";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function FirmCard({
  _id,
  name,
  address,
  image,
  phone,
  handleOpen,
  setInitialState,
}) {
  const { deleteStockData } = useStockCall();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
      }}
    >
      <CardContent
        sx={{
          borderBottom: "1px solid #ccc",
          padding: "0.5rem 1rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Box>
            <IconButton>
              <EditIcon
                onClick={() => {
                  handleOpen();
                  setInitialState({ _id, name, phone, image, address });
                }}
              />
            </IconButton>
            <IconButton>
              <DeleteOutlineIcon
                onClick={() => deleteStockData("firms", _id)}
              />
            </IconButton>
          </Box>
        </Box>
      </CardContent>

      <CardMedia
        sx={{ height: 150, objectFit: "contain", p: 4 }}
        component="img"
        image={image}
        title={name}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          <BusinessIcon sx={{ fontSize: 14, mx: 0.5 }} />
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <LocalPhoneIcon sx={{ fontSize: 14, mx: 0.5 }} />
          Phone : {phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
