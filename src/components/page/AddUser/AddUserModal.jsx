import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import congrats from "../../../assets/images/congratulation.png";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

const AddUserModal = ({ openModal, handleCloseModal, handleReset }) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Welcome to our website!
        </Typography>

        <Box sx={{ textAlign: "center", marginBlock: 2 }}>
          <img src={congrats} alt="" srcset="" />
        </Box>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Thank you for providing your information! We really appreciate your
          effort in completing the user profile form. With your information, we
          can now better understand your needs and interests, and provide you
          with a more personalized experience.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          {/* <Box sx={{ flex: "1 1 auto" }} /> */}
          <Button variant="outlined" color="primary" onClick={handleReset}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
