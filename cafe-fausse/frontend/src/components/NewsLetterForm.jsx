import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { subscribeToNewsletter } from "../api/api";
import { useState } from "react";

import { fetchCsrfToken } from "../api/api";
const NewsLetter = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("success"); // "success" or "error"
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = await fetchCsrfToken();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");

    const res = await subscribeToNewsletter(email,csrfToken);
    if (res?.success) {
      setStatus("success");
      setMessage(res?.message || "Subscription successful!");
      setEmail("");
      setOpen(true);
    } else {
      const err = res?.message;
      setStatus("error");
      setMessage(err || "Something went wrong");
      setOpen(true);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#722F37",
        color: "white",
        paddingX: isMobile ? "3%" : "20%",
        paddingY: "64px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "playfair display",
          fontSize: "30px",
          fontWeight: 700,
          width: "100%",
          textAlign: "center",
        }}
      >
        Stay Connected
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "20px",
          width: "100%",
          fontWeight: 400,
          textAlign: "center",
          marginTop: "12px",
          marginBottom: "32px",
        }}
      >
        Subscribe to our newsletter for exclusive offers and culinary updates
      </Typography>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "center", horizontal: "left" }}
        sx={{
          // This forces the Snackbar content to align exactly center
          "& .MuiSnackbarContent-root": {
            transform: "translateY(0)", // override default offset
          },
        }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={status}
          sx={{
            width: "100%",
            height: "100%",
            border: "1px solid #c5c5c5ff",
            borderRadius: "5px",
            backgroundColor: "#F8F6F0",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
      <form
        onSubmit={handleSubmit}
        style={{ alignSelf: "center", width: "80%" }}
        // action="http://localhost:5000/api/newsletter"
        // method="POST"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // alignSelf: "center",
            gap: 0,
            height: "48px",
          }}
        >
          <TextField
            placeholder="Enter your email"
            // variant="outlined"
            name="email"
            sx={{
              flex: 1,
              "& .MuiInputBase-root": {
                height: "100%", // total height of the input box
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                backgroundColor: "white",
                paddingLeft: "16px",
              },
              "& .MuiInputBase-input": {
                padding: "0px", // vertical + horizontal padding inside
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                backgroundColor: "white",
                paddingLeft: "16px",
              },
            }}
          />
          <Button
            type="submit"
            sx={{
              width: "126px",
              color: "#2C2C2C",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
              backgroundColor: "#D4AF37",
              textTransform: "none",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              margin: 0,
              "&:hover": {
                backgroundColor: "#fffb00ff", // darker shade on hover
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default NewsLetter;
