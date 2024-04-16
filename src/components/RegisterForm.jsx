import * as Yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "This field must be at least 3 characters long")
    .max(15, "This field can be at most 15 characters long")
    .required("Username is required"),
  firstName: Yup.string()
    .min(2, "This field must be at least 2 characters long")
    .max(50, "This field can be at most 50 characters long")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "This field must be at least 2 characters long")
    .max(50, "This field can be at most 50 characters long")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password can be at most 50 characters long")
    .matches(/\d+/, "Password must contain at least one digit")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[@$?!%&*]+/,
      "Password must contain at least one special character (@$?!%&*)"
    )
    .required("Password is required"),
});

const SignUpForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            id="username"
            name="username"
            label="Username"
            inputProps={{
              autoComplete: "off",
            }}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username} // To display validation messages, capture messages from 'errors'.
            error={touched.username && Boolean(errors.username)} // 'error' attribute expects a boolean value, so convert it for better consistency.
            // 'touched' indicates whether the user has interacted with the input field.
          />
          <TextField
            label="First Name"
            name="firstName"
            id="firstName"
            inputProps={{
              autoComplete: "off",
            }}
            type="text"
            variant="outlined"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName && errors.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
          />
          <TextField
            label="Last Name"
            name="lastName"
            id="lastName"
            type="text"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName && errors.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <TextField
            label="Password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default SignUpForm;
