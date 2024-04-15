import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik, Form } from "formik";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import useAuthCalls from "../hooks/useAuthCall";

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required(),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[!@#$%^&*])/,
      "Password must contain at least one special character"
    )
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password must be at most 20 characters")
    .required("Password is required"),
});

const Register = () => {
  const { register } = useAuthCalls();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>

          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              register(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {" "}
                  <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                  <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
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
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Link to="/">Already have an account? Sign in</Link>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
