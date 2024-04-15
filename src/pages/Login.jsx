import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/hero.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import useAuthCall from "../hooks/useAuthCall";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is mandatory"),
  password: Yup.string()
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .required("Password is mandatory"),
});
const Login = () => {
  const theme = useTheme();
  const { login } = useAuthCall();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>

          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            SIGN IN
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              login(values);
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
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Login;
