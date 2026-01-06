import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import "./Contact.scss";
import sendEmail from "../../components/utilities/sendEmail/SendEmail";
import { motion, useInView } from "framer-motion";
import {
  PersonOutline,
  EmailOutlined,
  MessageOutlined,
  CheckCircleOutline,
} from "@mui/icons-material";

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.08,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const successVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    firstname: false,
    lastname: false,
    email: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    open: false,
    type: "success",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const formRef = useRef(null);
  const titleRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const validateField = (name, value) => {
    switch (name) {
      case "firstname":
        if (!value.trim()) {
          return "First name is required";
        } else if (value.trim().length < 2) {
          return "First name must be at least 2 characters";
        }
        return "";
      case "lastname":
        if (!value.trim()) {
          return "Last name is required";
        } else if (value.trim().length < 2) {
          return "Last name must be at least 2 characters";
        }
        return "";
      case "email":
        if (!value.trim()) {
          return "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address";
        }
        return "";
      case "message":
        if (!value.trim()) {
          return "Message is required";
        } else if (value.trim().length < 10) {
          return "Message must be at least 10 characters";
        } else if (value.length > 1000) {
          return "Message must not exceed 1000 characters";
        }
        return "";
      default:
        return "";
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {
      firstname: true,
      lastname: true,
      email: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {
      firstname: validateField("firstname", formData.firstname),
      lastname: validateField("lastname", formData.lastname),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      setSubmitStatus({
        open: true,
        type: "error",
        message: "Please fix the errors in the form",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formSent = await sendEmail(formData);
      setIsSuccess(true);

      setTimeout(() => {
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
        setTouched({
          firstname: false,
          lastname: false,
          email: false,
          message: false,
        });
        setErrors({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
        setIsSuccess(false);
      }, 3000);

      setSubmitStatus({
        open: true,
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
    } catch (error) {
      setSubmitStatus({
        open: true,
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus((prev) => ({ ...prev, open: false }));
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
        alignItems: "center",
        pt: "64px",
        minHeight: "calc(100vh - 200px)",
        position: "relative",
      }}
    >
      <Typography
        ref={titleRef}
        component={motion.h4}
        variants={titleVariants}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
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
          mt: "1em",
          mb: "1em",
          textAlign: "center",
        }}
      >
        Need a website or have a proposal? Fill out the form below to get in
        touch!
      </Typography>

      <Box
        ref={formRef}
        component={motion.div}
        variants={formVariants}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
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
          position: "relative",
        }}
      >
        {isSuccess && (
          <Box
            component={motion.div}
            variants={successVariants}
            initial="hidden"
            animate="visible"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderRadius: "16px",
              padding: "3em",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CheckCircleOutline
              sx={{ fontSize: "4rem", color: "success.main" }}
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: "League Spartan",
                fontWeight: "700",
                color: "success.main",
              }}
            >
              Message Sent!
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: "text.secondary" }}
            >
              Thank you for reaching out. I'll get back to you soon!
            </Typography>
          </Box>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            marginLeft: "5%",
            marginTop: "2em",
            gap: "1.5rem",
            filter: isSuccess ? "blur(4px)" : "none",
            transition: "filter 0.3s ease",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <motion.div
              variants={fieldVariants}
              style={{ flex: 1, width: "100%" }}
            >
              <TextField
                variant="outlined"
                name="firstname"
                label="First Name"
                required
                value={formData.firstname}
                onChange={handleInput}
                onBlur={handleBlur}
                error={touched.firstname && Boolean(errors.firstname)}
                helperText={touched.firstname && errors.firstname}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline sx={{ color: "tertiary.main" }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  sx: {
                    color: "tertiary.main",
                    fontWeight: "600",
                    backgroundColor: "transparent",
                    paddingX: "4px",
                    "&.Mui-focused": {
                      color: "tertiary.dark",
                    },
                    "&.MuiInputLabel-shrink": {
                      backgroundColor: "#2c3e50",
                      paddingX: "8px",
                      borderRadius: "4px",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    },
                    "&.Mui-focused": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                }}
              />
            </motion.div>
            <motion.div
              variants={fieldVariants}
              style={{ flex: 1, width: "100%" }}
            >
              <TextField
                variant="outlined"
                name="lastname"
                label="Last Name"
                required
                onChange={handleInput}
                onBlur={handleBlur}
                value={formData.lastname}
                error={touched.lastname && Boolean(errors.lastname)}
                helperText={touched.lastname && errors.lastname}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline sx={{ color: "tertiary.main" }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  sx: {
                    color: "tertiary.main",
                    fontWeight: "600",
                    backgroundColor: "transparent",
                    paddingX: "4px",
                    "&.Mui-focused": {
                      color: "tertiary.dark",
                    },
                    "&.MuiInputLabel-shrink": {
                      backgroundColor: "#2c3e50",
                      paddingX: "8px",
                      borderRadius: "4px",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    },
                    "&.Mui-focused": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                }}
              />
            </motion.div>
          </Box>

          <motion.div variants={fieldVariants}>
            <TextField
              variant="outlined"
              name="email"
              label="Email Address"
              required
              type="email"
              onChange={handleInput}
              onBlur={handleBlur}
              value={formData.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined sx={{ color: "tertiary.main" }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: {
                  color: "tertiary.main",
                  fontWeight: "600",
                  backgroundColor: "transparent",
                  paddingX: "4px",
                  "&.Mui-focused": {
                    color: "tertiary.dark",
                  },
                  "&.MuiInputLabel-shrink": {
                    backgroundColor: "#2c3e50",
                    paddingX: "8px",
                    borderRadius: "4px",
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  },
                  "&.Mui-focused": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "rgba(0, 0, 0, 0.87)",
                },
              }}
            />
          </motion.div>

          <motion.div variants={fieldVariants}>
            <TextField
              variant="outlined"
              name="message"
              label="Your Message"
              required
              onChange={handleInput}
              onBlur={handleBlur}
              value={formData.message}
              error={touched.message && Boolean(errors.message)}
              helperText={
                touched.message && errors.message
                  ? errors.message
                  : `${formData.message.length}/1000 characters`
              }
              multiline
              rows={5}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ alignSelf: "start", mt: 2 }}>
                    <MessageOutlined sx={{ color: "tertiary.main" }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: {
                  color: "tertiary.main",
                  fontWeight: "600",
                  backgroundColor: "transparent",
                  paddingX: "4px",
                  "&.Mui-focused": {
                    color: "tertiary.dark",
                  },
                  "&.MuiInputLabel-shrink": {
                    backgroundColor: "#2c3e50",
                    paddingX: "8px",
                    borderRadius: "4px",
                  },
                },
              }}
              FormHelperTextProps={{
                sx: {
                  color: "tertiary.main",
                  fontWeight: "500",
                  "&.Mui-error": {
                    color: "error.main",
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  alignItems: "flex-start",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  },
                  "&.Mui-focused": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "rgba(0, 0, 0, 0.87)",
                },
              }}
            />
          </motion.div>

          <motion.div variants={fieldVariants}>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              fullWidth
              sx={{
                padding: "1rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                fontFamily: "League Spartan",
                borderRadius: "12px",
                textTransform: "none",
                color: "black",
                backgroundColor: "tertiary.main",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "tertiary.dark",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                },
                "&:disabled": {
                  backgroundColor: "tertiary.dark",
                  opacity: 0.6,
                  color: "rgba(0,0,0,0.5)",
                },
              }}
            >
              {isSubmitting ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "3px solid rgba(0,0,0,0.2)",
                      borderTop: "3px solid black",
                      borderRadius: "50%",
                    }}
                  />
                  Sending...
                </Box>
              ) : (
                "Send Message"
              )}
            </Button>
          </motion.div>
        </Box>
      </Box>

      <Typography
        ref={titleRef}
        component={motion.h3}
        variants={titleVariants}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variant="h3"
        sx={{
          color: "tertiary.main",
          display: { xs: "none", md: "inherit" },
          alignSelf: "center",
          width: { md: "45%", lg: "40%", xl: "35%" },
          fontFamily: "League Spartan",
          fontWeight: "700",
          lineHeight: 1.3,
        }}
      >
        Need a website or have a proposal? Fill out the form to get in touch!
      </Typography>

      <Snackbar
        open={submitStatus.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitStatus.type}
          variant="filled"
          sx={{
            width: "100%",
            borderRadius: "12px",
            fontFamily: "League Spartan",
          }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
