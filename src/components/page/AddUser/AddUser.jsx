import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";

import { Container, Stack, TextField } from "@mui/material";

import AddUserModal from "./AddUserModal";
import AddUserStepper from "./AddUserStepper";

import bgImage from "../../../assets/profile_data.png";

const steps = [
  "Basic Information",
  "Contact Information",
  "Personal Information",
  "Payment",
];

const AddUser = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  const formSubmitStep = activeStep === steps.length - 1;

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
          <>
            <Stack spacing={2} mb={2}>
              <TextField
                size="small"
                label="Card Holder Name"
                fullWidth
                variant="outlined"
              />
              <TextField
                size="small"
                label="Card Number"
                fullWidth
                variant="outlined"
              />
            </Stack>

            <Stack direction="row" spacing={2} mb={2}>
              <TextField
                size="small"
                label="Expiry"
                fullWidth
                variant="outlined"
              />
              <TextField
                size="small"
                label="CVV"
                fullWidth
                variant="outlined"
              />
            </Stack>
          </>
        );

      default:
        break;
    }
  };

  const addUserBg = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
  };

  return (
    <Box sx={addUserBg}>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <AddUserStepper activeStep={activeStep} steps={steps} />

        {activeStep === steps.length ? (
          <>
            <AddUserModal
              openModal={openModal}
              handleCloseModal={handleCloseModal}
              handleReset={handleReset}
            />
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
      </Container>
    </Box>
  );
};

export default AddUser;
