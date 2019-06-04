import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { flexbox } from '@material-ui/system';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

function getSteps() {
    return ['Enter name, email, and password', 'Add your github and linkedIn', 'Add a descriptive bio'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <div id="signUpForm">
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required

                        id="firstName"
                        label="First Name"
                        autoFocus
                        style={{ width: 300 }}
                    />
                    <br></br>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoFocus
                        style={{ width: 300 }}
                    />
                    <br></br>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        style={{ width: 300 }}
                    />

                </div>
            );
        case 1:
            return (<div id="signUpForm">
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="linkedin"
                    label="LinkedIn"
                    name="linkedin"
                    autoFocus
                    style={{ width: 300 }}
                />
                <br></br>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="github"
                    label="Github link"
                    name="github"
                    autoFocus
                    style={{ width: 300 }}
                />

            </div>);
        case 2:
            return (<div id="signUpForm">
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    multiline
                    id="Bio"
                    label="Enter a short bio"
                    name="bio"
                    rows={4}
                    autoFocus
                    style={{ width: 500 }}
                />


            </div>);
        default:
            return 'Unknown step';
    }
}

function HorizontalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    function isStepOptional(step) {
        return step === 1 || step === 2;
    }

    function isStepSkipped(step) {
        return skipped.has(step);
    }

    function handleNext() {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleSkip() {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    }

    function handleReset() {
        setActiveStep(0);
    }

    return (
        <div className="page">
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        // if (isStepOptional(index)) {
                        //     labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        // }
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
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
            </Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
            </Button>
                        </div>
                    ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                        Back
              </Button>
                                    {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Next' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default HorizontalLinearStepper;