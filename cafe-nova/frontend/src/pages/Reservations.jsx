import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createReservation } from "../api/api";
import { fetchCsrfToken } from "../api/api";

const Reservations = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("success"); // "success" or "error"
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = await fetchCsrfToken();
    const form = e.target;
    const formData = new FormData(form);
    const reservation = {
      time_slot: formData.get("date"),
      number_of_guests: parseInt(formData.get("number_of_guests")),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      special_requests: formData.get("special_requests"),
    };
    const res = await createReservation(reservation, csrfToken);
    if (res?.success) {
      setStatus("success");
      setMessage(res?.message || "Reservation successful!");
      setOpen(true);
    } else {
      const err = res?.message;
      if (typeof err === "object") {
        setMessage(
          Object.values(err).flat().join(" ") || "Something went wrong"
        );
      } else {
        setMessage(err || "Something went wrong");
      }
      setStatus("error");
      setOpen(true);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        paddingX: isMobile ? "3%" : "20%",
        paddingY: "10vh",
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "center", horizontal: "left" }}
        sx={{
          // This forces the Snackbar content to align exactly center
          width: "400px",

          "& .MuiSnackbarContent-root": {
            transform: "translateY(0)", // override default offset
          },
        }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={status}
          sx={{
            height: "100%",
            border: "1px solid #c5c5c5ff",
            borderRadius: "5px",
            backgroundColor: "#F8F6F0",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
      <Typography
        sx={{
          fontSize: "48px",
          fontFamily: "playfair display",
          textAlign: "center",
          color: "#722F37",
          fontWeight: 700,
        }}
      >
        Make a Reservation
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontFamily: "inter",
          textAlign: "center",
          color: "#4B5563",
        }}
      >
        Reserve your table for an unforgettable dining experience
      </Typography>
      <Box
        sx={{
          backgroundColor: "#F8F6F0",
          marginTop: "50px",
          alignSelf: "center",
          paddingY: "32px",
          borderRadius: "8px",
          paddingX: isMobile ? "20px" : "32px",

          //   width: "848px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            // maxWidth: "400px",
            margin: "auto",
            fontFamily: "sans-serif",
          }}
          onSubmit={handleSubmit}
        >
          {/* First row: Date & Number */}
          <Box
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
            }}
          >
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="date"
                style={{ marginBottom: "4px", fontWeight: "600" }}
              >
                Date <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="date"
                type="datetime-local"
                required
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "0px",
                  border: "1px solid #ccc",
                  width: isMobile ? "70vw" : "20vw",
                }}
              />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="date"
                style={{ marginBottom: "4px", fontWeight: "600" }}
              >
                Number of Guests <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="number_of_guests"
                type="number"
                min="0"
                required
                placeholder="Number of guests"
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "0px",
                  border: "1px solid #ccc",
                  width: isMobile ? "70vw" : "20vw",
                }}
              />
            </div>
          </Box>

          {/* Second row: Name & Email */}
          <Box
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
            }}
          >
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="date"
                style={{ marginBottom: "4px", fontWeight: "600" }}
              >
                Full Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "0px",
                  border: "1px solid #ccc",
                  width: isMobile ? "70vw" : "20vw",

                  //   width:"20vw"
                }}
              />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="date"
                style={{ marginBottom: "4px", fontWeight: "600" }}
              >
                Email Address <span style={{ color: "red" }}>*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "0px",
                  border: "1px solid #ccc",
                  width: isMobile ? "70vw" : "20vw",
                }}
              />
            </div>
          </Box>

          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="date"
              style={{ marginBottom: "4px", fontWeight: "600" }}
            >
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              style={{
                padding: "10px",
                borderRadius: "0px",
                border: "1px solid #ccc",
                width: isMobile ? "70vw" : "42.5vw",
              }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="date"
              style={{ marginBottom: "4px", fontWeight: "600" }}
            >
              Spacial Requests
            </label>
            <textarea
              placeholder="Special requests"
              name="special_requests"
              style={{
                padding: "10px",
                borderRadius: "0px",
                border: "1px solid #ccc",
                width: isMobile ? "70vw" : "42.5vw",

                minHeight: "80px",
                resize: "vertical",
              }}
            />
          </div>
          <Button
            type="submit"
            sx={{
              backgroundColor: "#722F37",
              width: isMobile ? "70vw" : "42.5vw",
              alignSelf: "center",
              fontFamily: "Inter",
              color: "white",
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#81303aff",
              },
            }}
          >
            Request Reservation
          </Button>
        </form>
      </Box>
    </Box>
  );
  // return (
  //     <div className="reservations-page">
  //         <h1>Make a Reservation</h1>
  //         {reservationStatus && (
  //             <div className={`notification ${reservationStatus.type}`}>
  //                 {reservationStatus.message}
  //             </div>
  //         )}
  //         <ReservationForm
  //             onSuccess={handleReservationSuccess}
  //             onError={handleReservationError}
  //         />
  //     </div>
  // );
};

export default Reservations;
