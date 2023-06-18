import {
    Dialog,
    Typography,
    styled,
    Box,
    Button,
    TextField,
} from "@mui/material";
import { useState } from "react";

const DialogWrapper = styled(Box)`
    display: flex;
`;

const Image = styled(Box)`
    background: #2874f0
        url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
        no-repeat center 85%;
    width: 45%;
    padding: 45px 35px;
    text-align: center;
    color: #fff;
`;

const DialogRightWrapper = styled(Box)`
    margin: 50px 20px 30px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const EmailTextField = styled(TextField)`
    width: 90%;
    padding-bottom: 25px;
`;

const userDetails = {
    login: {
        view: "login",
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations",
    },
    signup: {
        view: "signup",
        heading: "Looks like you are new here!",
        subHeading: "Sign up with your mobile number to get started",
    },
};

const LoginDialogBox = ({ dialogOpen, setdialogOpen }) => {
    const [login, setLogin] = useState("signup");

    const toggleLogin = () => {
        if (login === "login") setLogin("signup");
        else setLogin("login");
    };

    const handleClose = () => {
        console.log("i am gonna be close buddy");
        setdialogOpen(false);
    };

    return (
        <Dialog open={dialogOpen} onClose={handleClose}>
            <Box>
                {login === "login" ? (
                    <DialogWrapper>
                        <Image>
                            <Typography variant="h5" marginBottom={2}>
                                {userDetails.login.heading}
                            </Typography>
                            <Typography>
                                {userDetails.login.subHeading}
                            </Typography>
                        </Image>
                        <DialogRightWrapper>
                            <EmailTextField
                                variant="standard"
                                placeholder="Enter Email, Mobile number"
                            />
                            <EmailTextField
                                variant="standard"
                                placeholder="Enter Password"
                            />
                            <Typography
                                style={{
                                    paddingBottom: 10,
                                    textAlign: "start",
                                    color: "#878787",
                                    fontSize: 12,
                                }}
                            >
                                By continuing, you agree to Flipkart's Terms of
                                the Use and Privacy Policy{" "}
                            </Typography>
                            <Button
                                variant="contained"
                                style={{
                                    width: "90%",
                                    backgroundColor: "#FB641B",
                                    borderRadius: 2,
                                    color: "#fff",
                                    fontWeight: 600,
                                    marginBottom: 20,
                                    height: 48,
                                    fontSize: 16,
                                    textTransform: "none",
                                }}
                            >
                                Login
                            </Button>
                            <Typography
                                style={{ paddingTop: 10, paddingBottom: 10 }}
                            >
                                OR
                            </Typography>
                            <Button
                                variant="contained"
                                style={{
                                    width: "90%",
                                    backgroundColor: "#fff",
                                    borderRadius: 2,
                                    color: "#2874f0",
                                    fontWeight: 600,
                                    marginBottom: 20,
                                    height: 48,
                                    fontSize: 16,
                                    textTransform: "none",
                                }}
                            >
                                Request OTP
                            </Button>
                            <Typography
                                style={{
                                    marginTop: "auto",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    color: "#2874f0",
                                    cursor: "pointer",
                                }}
                                onClick={toggleLogin}
                            >
                                New to Flipkart? Create an account
                            </Typography>
                        </DialogRightWrapper>
                    </DialogWrapper>
                ) : (
                    <DialogWrapper>
                        <Image>
                            <Typography variant="h5" marginBottom={2}>
                                {userDetails.signup.heading}
                            </Typography>
                            <Typography>
                                {userDetails.signup.subHeading}
                            </Typography>
                        </Image>
                        <DialogRightWrapper>
                            <EmailTextField
                                variant="standard"
                                placeholder="Enter Email, Mobile number"
                            />
                            {/* <EmailTextField
                                variant="standard"
                                placeholder="Enter Password"
                            /> */}
                            <Typography
                                style={{
                                    paddingBottom: 10,
                                    textAlign: "start",
                                    color: "#878787",
                                    fontSize: 12,
                                }}
                            >
                                By continuing, you agree to Flipkart's Terms of
                                the Use and Privacy Policy{" "}
                            </Typography>
                            <Button
                                variant="contained"
                                style={{
                                    width: "90%",
                                    backgroundColor: "#FB641B",
                                    borderRadius: 2,
                                    color: "#fff",
                                    fontWeight: 600,
                                    marginBottom: 20,
                                    height: 48,
                                    fontSize: 16,
                                    textTransform: "none",
                                }}
                            >
                                Countinue
                            </Button>
                            {/* <Typography
                                style={{ paddingTop: 10, paddingBottom: 10 }}
                            >
                                {/* OR */
                            /*    </Typography>
                            <Button
                                variant="contained"
                                style={{
                                    width: "90%",
                                    backgroundColor: "#fff",
                                    borderRadius: 2,
                                    color: "#2874f0",
                                    fontWeight: 600,
                                    marginBottom: 20,
                                    height: 48,
                                    fontSize: 16,
                                    textTransform: "none",
                                }}
                            >
                                Request OTP
                            </Button> */}
                            <Typography
                                style={{
                                    marginTop: "auto",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    color: "#2874f0",
                                }}
                            >
                                Existing User? Login
                            </Typography>
                        </DialogRightWrapper>
                    </DialogWrapper>
                )}
            </Box>
        </Dialog>
    );
};

export default LoginDialogBox;
