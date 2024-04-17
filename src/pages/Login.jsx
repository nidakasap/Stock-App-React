import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image from "../assets/login.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import useAuthCall from "../hooks/useAuthCall";
import { Box } from "@mui/material";
import { Formik } from "formik";
import LoginForm, { LoginSchema } from "../components/LoginForm";

const Login = () => {
  // const theme = useTheme();
  const { login } = useAuthCall();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "90vh",
          p: 2,
        }}
      >
        <AuthHeader />
        <AuthImage image={image} />
        <Grid item xs={12} sm={10} md={6}>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Welcome Back!
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link style={{ textDecoration: "none" }} to="/register">
              Don't have an account? Sign Up
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
