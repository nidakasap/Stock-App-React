import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/signup.png";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import RegisterForm, { SignupSchema } from "../components/RegisterForm";

const Register = () => {
  const { register } = useAuthCall();
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
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
            Sign Up{" "}
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link style={{ textDecoration: "none" }} to="/">
              Already have an account? Sign in
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
