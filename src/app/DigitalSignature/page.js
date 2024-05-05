"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import sendData from "@/app/action";
import PDFViewer from "@/app/components/PDFViewer";

const steps = ["Name", "PIN", "Confirmation"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [data, setData] = React.useState({
    fullName: "",
    pin: "",
    date: "",
  });

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep === steps.length - 1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <main className="flex min-h-screen flex-col items-center  px-96 py-8">
      <h1 className="text-4xl font-bold pb-4">Sign PDF's digitally</h1>
      <div className="pb-20">
        <PDFViewer />
      </div>
      <Box sx={{ width: "100%" }}>
        <form action={sendData}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <React.Fragment>
            {activeStep === 0 && (
              <div>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  * Enter your full name:
                </Typography>
                <TextField
                  id="fullName"
                  variant="outlined"
                  required
                  value={data.fullName}
                  onChange={(e) =>
                    setData({ ...data, fullName: e.target.value })
                  }
                />
              </div>
            )}
            {activeStep === 1 && (
              <div>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  * What's your PIN?
                </Typography>
                <TextField
                  id="pin"
                  variant="outlined"
                  type="password"
                  required
                  value={data.pin}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pin: e.target.value,
                      date: new Date().toLocaleString(undefined, {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false,
                      }),
                    })
                  }
                />
              </div>
            )}
            {activeStep === 2 && (
              <div className="bg-gray-100 border border-gray-300 rounded-md p-2 my-8">
                <input
                  type="hidden"
                  name="fullName"
                  value={data.fullName}
                  hidden
                  className="bg-transparent border-none text-gray-800 focus:outline-none flex-1 mr-2"
                />
                <input
                  type="hidden"
                  name="date"
                  value={data.date}
                  className="bg-transparent border-none text-gray-800 focus:outline-none flex-1"
                />
                <input type="hidden" name="pin" value={data.pin} />
                {data.fullName && data.pin ? (
                  <div>
                    <p className="flex justify-center ">
                      {data.fullName} {data.date}
                    </p>
                  </div>
                ) : (
                  <p className="text-red-500">fullname and PIN required</p>
                )}
              </div>
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep !== steps.length - 1 ? (
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Create Signature
                </button>
              )}
            </Box>
          </React.Fragment>
        </form>
      </Box>
    </main>
  );
}
