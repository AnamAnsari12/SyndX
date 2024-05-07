import React from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const defaultTheme = createTheme();

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Password reset request for username:", data.username);
    console.log("Password reset request for email:", data.email);
    navigate("/");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            backgroundColor: "#ffffff",
            boxShadow: 5,
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "80px 20px",
          }}
        >
          <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
              Forgot Password
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    type="text"
                    fullWidth
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                 
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Reset Password
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;
