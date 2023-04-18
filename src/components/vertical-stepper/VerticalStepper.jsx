import * as React from "react";
import './VerticalStepper.css'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { StepIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomTextField from "./CustomTextField";
import CustomTextArea from "./CustomTextArea";
import CustomButton from "./CustomButton";

const CustomStepIcon = styled(StepIcon)(({ theme }) => ({
  color: "#ffaf20",
  "& .MuiStepIcon-active": {
    color: "#ffaf20",
  },
  "& .MuiStepIcon-completed": {
    color: "#ffaf20", 
  },

}));
const steps = [
  {
    labelInput: "Step 1: Title",
    descriptionInput: "Description",
  },
  {
    labelInput: "Step 2: Title",
    descriptionInput: "Description",
  },
  {
    labelInput: "Step 3: Title",
    descriptionInput: "Description",
  },
  {
    labelInput: "Step 4: Title",
    descriptionInput: "Description",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [campaignName, setCampaignName] = React.useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCampaignName("");
  };

  const handleLabelInputChange = (event) => {
    setCampaignName(event.target.value);
  };

  const handleFinish = () => {
    setActiveStep(steps.length);
    setCampaignName("");
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.labelInput} >
            <StepLabel StepIconComponent={CustomStepIcon} >
              {activeStep === index ? (
                <CustomTextField
                  label={step.labelInput}
                  value={campaignName}
                  onChange={handleLabelInputChange}
                />
              ) : (
                step.labelInput
              )}
            </StepLabel>
            <StepContent>
              {activeStep === index && (
                <CustomTextArea label={step.descriptionInput} />
              )}
              <Box sx={{ mb: 2 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "600px",
                  }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                      mt: 1,
                      mr: 1,
                      color: "#ffaf20"
                    }}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <CustomButton variant="contained" onClick={handleFinish}>
                      FINISH
                    </CustomButton>
                  ) : (
                    <CustomButton variant="contained" onClick={handleNext}>
                      NEXT&nbsp;STEP
                    </CustomButton>
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1,color: "#ffaf20" }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
