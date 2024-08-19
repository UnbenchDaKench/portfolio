import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Contact.scss";
import sendEmail from "../../components/utilities/sendEmail/SendEmail";


function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    messagae: "",
  });
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {}, [emailError]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailIsValid = isValidEmail(formData.email);

    if (emailIsValid) {
      const formSent = await sendEmail(formData);
      setFormData(formSent);
      setEmailError(false);
    } else {
      alert("Invalid email format, try again!");
      setEmailError(true);
    }
  };

  return (
    <Box
      className="contact-page"
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "tertiary.main",
          display: { md: "none" },
          width: {
            xs: "90%",
            sm: "70%",
          },
          alignSelf: "center",
          fontFamily: "League Spartan",
          fontWeight: "700",
          mt: "1em"
        }}
      >
        Need a website or have a proposal? fill out the form below to get in
        touch!
      </Typography>

      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "80%",
            md: "55%",
            lg: "50%",
            xl: "35%",
          },
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexWrap: "wrap",

            width: "90%",
            marginLeft: "5%",

            marginTop: "2em",
            gap: 15,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            variant="filled"
            name="firstname"
            label="First Name"
            value={formData.firstname}
            onChange={handleInput}
            InputLabelProps={{
              sx: {
                color: "text.body",
                "&.Mui-focused": {
                  color: "text.body",
                },
              },
            }}
            sx={{
              width: "47.5%",
              backgroundColor: "secondary.main",
              borderRadius: "0.5em",
            }}
          />
          <TextField
            ariant="filled"
            name="lastname"
            label="Last Name"
            onChange={handleInput}
            value={formData.lastname}
            InputLabelProps={{
              sx: {
                color: "text.body",
                "&.Mui-focused": {
                  color: "text.body",
                },
              },
            }}
            sx={{
              width: "47.5%",
              backgroundColor: "secondary.main",
              borderRadius: "0.5em",
            }}
          />
          <TextField
            ariant="filled"
            name="email"
            label="email"
            onChange={handleInput}
            error={emailError}
            InputLabelProps={{
              sx: {
                color: "text.body",
                "&.Mui-focused": {
                  color: "text.body",
                },
              },
            }}
            sx={{
              width: "100%",
              backgroundColor: "secondary.main",
              borderRadius: "0.5em",
            }}
          />
          <TextField
            ariant="filled"
            name="message"
            label="message"
            onChange={handleInput}
            InputLabelProps={{
              sx: {
                color: "text.body",
                "&.Mui-focused": {
                  color: "text.body",
                },
              },
            }}
            multiline
            rows={4}
            sx={{
              width: "100%",
              backgroundColor: "secondary.main",
              borderRadius: "0.5em",
              textAlign: "left",
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: {
                xs: "10em",
              },

              margin: "auto",
              color: "black",
              backgroundColor: "tertiary.main",
              "&:hover": {
                backgroundColor: "tertiary.dark",
              },
            }}
          >
            Send!
          </Button>
        </form>
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: "tertiary.main",
          display: { xs: "none", md: "inherit" },
          alignSelf: "center",
          width: { md: "45%", lg: "40%%", xl: "35%" },
        }}
      >
        Neeed a website or have a proposal? fill out the form to get in touch!
      </Typography>
    </Box>
  );
}

export default Contact;
