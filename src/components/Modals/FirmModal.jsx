import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";
import useStockCall from "../../hooks/useStockCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ open, handleClose }) {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const { putStockData, postStockData } = useStockCall();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    if (info.id) {
      putStockData(info);
    } else {
      postStockData(info);
    }
    setInfo({});
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose} //* onClose mui modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name || ""}
              onChange={handleChange}
            />
            <TextField
              label="Firm Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info?.address || ""}
              onChange={handleChange}
            />
            <TextField
              label="Firm Phone"
              name="phone"
              id="phone"
              type="text"
              variant="outlined"
              value={info?.phone || ""}
              onChange={handleChange}
            />
            <TextField
              label="Firm Logo"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              value={info?.image || ""}
              onChange={handleChange}
            />
            <Button type="submit">Submit Firm</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
