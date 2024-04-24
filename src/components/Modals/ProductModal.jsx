import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose }) {
  const [info, setInfo] = React.useState({
    categoryId: "",
    brandId: "",
    name: "",
  });
  const { postStockData } = useStockCall();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);
    handleClose();
  };

  const { categories, brands } = useSelector((state) => state.stock);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose} //* onClose mui
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-category-label"
                id="categoryId"
                label="Category"
                name="categoryId"
                value={info.categoryId}
                onChange={handleChange}
              >
                {categories?.map((category) => {
                  return (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-brand-label"
                id="brandId"
                label="Brand"
                name="brandId"
                value={info.brandId}
                onChange={handleChange}
              >
                {brands?.map((brand) => {
                  return (
                    <MenuItem key={brand._id} value={brand._id}>
                      {brand.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              id="Product_Name"
              label="Product Name"
              variant="standard"
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained">
              Save Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
