import * as Yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { useSelector } from "react-redux";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ values, errors, touched, handleChange, handleBlur }) => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Button variant="contained" type="submit" disabled={loading}>
            Login
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default LoginForm;
