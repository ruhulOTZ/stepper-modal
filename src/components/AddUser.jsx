import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Modal from "@mui/material/Modal";
import { Stack, TextField } from "@mui/material";

const steps = [
  "Basic Information",
  "Contact Information",
  "Personal Information",
  "Order",
];

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

const AddUser = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const formSubmitStep = activeStep === steps.length - 1;

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  useEffect(() => {
    if (formSubmitStep) handleOpenModal();
  }, [activeStep, formSubmitStep]);

  const stepperContent = () => {
    switch (activeStep + 1) {
      case 1:
        return (
          <>
            <Stack spacing={2} mb={2}>
              <TextField
                size="small"
                label="First Name"
                fullWidth
                variant="outlined"
              />
              <TextField
                size="small"
                label="Last Name"
                fullWidth
                variant="outlined"
              />
              <TextField
                size="small"
                label="Nick Name"
                fullWidth
                variant="outlined"
              />
            </Stack>
          </>
        );
      case 2:
        return (
          <>
            <Stack spacing={2} mb={2}>
              <TextField
                size="small"
                label="Email"
                fullWidth
                variant="outlined"
              />
              <TextField
                size="small"
                label="Phone Number"
                fullWidth
                variant="outlined"
              />
              <TextField
                size="small"
                label="Alternate Phone"
                fullWidth
                variant="outlined"
              />
            </Stack>
          </>
        );
      case 3:
        return (
          <Stack spacing={2} mb={2}>
            <TextField
              size="small"
              label="Address 1"
              fullWidth
              variant="outlined"
            />
            <TextField
              size="small"
              label="Address 2"
              fullWidth
              variant="outlined"
            />
            <TextField
              size="small"
              label="Country"
              fullWidth
              variant="outlined"
            />
          </Stack>
        );
      case 4:
        return (
          <Stack spacing={2} mb={2}>
            <TextField
              size="small"
              label="Product"
              fullWidth
              variant="outlined"
            />
            <TextField
              size="small"
              label="Address 2"
              fullWidth
              variant="outlined"
            />
            <TextField
              size="small"
              label="Country"
              fullWidth
              variant="outlined"
            />
          </Stack>
        );

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleCloseModal}>Close</Button>
                <Button onClick={handleReset}>Order More</Button>
              </Box>
            </Box>
          </Modal>
        </>
      ) : (
        <>
          <Box sx={{ minHeight: "100px", padding: "30px 0 10px" }}>
            {stepperContent()}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              pt: 2,
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, borderColor: "gray" }}
              variant="outlined"
            >
              Back
            </Button>
            {/* <Box sx={{ flex: "1 1 auto" }} /> */}

            <Button
              type={formSubmitStep && "submit"}
              onClick={handleNext}
              variant={formSubmitStep ? "contained" : "outlined"}
            >
              {formSubmitStep ? "Submit" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default AddUser;
