import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
// import { send, sendForm } from "@emailjs/browser";
import emailjs from "@emailjs/browser";

import "./PasswordDetail.css";
import { toast } from "react-toastify";
const passRegix = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
const uppercaseRegix = new RegExp("[A-Z]");
const lowercaseRegix = new RegExp("[a-z]");
const numberRegix = new RegExp("[0-9]");

const PasswordDetail = (props) => {
  const [passwordInfo, setPasswordInfo] = useState({
    password: "",
    reEnterPassword: "",
    iAgree: false,
  });
  const [errorMsg, setErrorMsg] = useState({
    password: "",
    reEnterPassword: "",
    iAgree: "",
  });
  const onValueChange = (event) => {
    const { name, value } = event.target;
    setPasswordInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "password") {
      if (passRegix.test(value)) {
        setErrorMsg((prevState) => ({
          ...prevState,
          password: "",
        }));
      } else {
        console.log({ value2: value.length });
        if (value.length !== 0) {
          setErrorMsg((prevState) => ({
            ...prevState,
            password: "A valid password is required.",
          }));
        }
      }
    }
    if (name === "reEnterPassword") {
      if (value === passwordInfo.password) {
        setErrorMsg((prevState) => ({
          ...prevState,
          reEnterPassword: "",
        }));
      } else {
        if (value.length !== 0) {
          setErrorMsg((prevState) => ({
            ...prevState,
            reEnterPassword: "Password dose not match.",
          }));
        }
      }
    }
  };

  const onAcceptAggriment = (e) => {
    console.log({ e });
    if (!passwordInfo.iAgree === true) {
      setErrorMsg((prevState) => ({
        ...prevState,
        iAgree: "",
      }));
    }
    setPasswordInfo((prevState) => ({
      ...prevState,
      iAgree: !prevState.iAgree,
    }));
  };
  const checkValidation = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      if (value === "") {
        setErrorMsg((prevState) => ({
          ...prevState,
          password: "Please enter your password.",
        }));
      } else {
        if (!passRegix.test(value)) {
          setErrorMsg((prevState) => ({
            ...prevState,
            password: "A valid password is required. ",
          }));
        }
      }
    }
    if (name === "reEnterPassword") {
      if (value === "") {
        setErrorMsg((prevState) => ({
          ...prevState,
          reEnterPassword: "Please enter your Re-Enter password.",
        }));
      } else {
        if (value !== passwordInfo.password) {
          setErrorMsg((prevState) => ({
            ...prevState,
            reEnterPassword: "Password dose not match.",
          }));
        }
      }
    }
  };

  const onNextPage = () => {
    let isValid = true;
    if (passwordInfo.password === "") {
      isValid = false;
      setErrorMsg((prevState) => ({
        ...prevState,
        password: "Please enter your last name.",
      }));
    }
    if (passwordInfo.reEnterPassword === "") {
      isValid = false;
      setErrorMsg((prevState) => ({
        ...prevState,
        reEnterPassword: "Please enter your last name.",
      }));
    }
    if (!passwordInfo.iAgree) {
      isValid = false;
      setErrorMsg((prevState) => ({
        ...prevState,
        iAgree: "Please accept the agreement.",
      }));
    } else {
      setErrorMsg((prevState) => ({
        ...prevState,
        iAgree: "",
      }));
    }
    if (isValid) {
      const SERVICE_ID = "service_orckfu1";
      const TEMPLATE_ID = "template_jl9vueb";
      const USER_ID = "user_KsnqXK9yx9NRlkp5aoj2g";
      var data = {
        to_email: "hicoloc463@spruzme.com",
      };
      const current = {
        user_name: "dev demo",
        user_email: "hicoloc463@spruzme.com",
        message: "test message",
      };

      const tempdata = {
        loanType: props.formData.loanType,
        homeDescription: props.formData.homeDescription,
        property: props.formData.property,
        purchaseHome: props.formData.purchaseHome,
        isHomeBuyer: props.formData.isHomeBuyer,
        creditProfile: props.formData.creditProfile,
        firstName: props.formData.userName.first_name,
        lastName: props.formData.userName.last_name,
        email: props.formData.email,
        password: passwordInfo.password,
      };

      console.log({ tempdata, formData: props.formData });

      // let formData = new FormData();

      // formData.append("loanType", props.formData.loanType);
      // formData.append("homeDescription", props.formData.homeDescription);
      // formData.append("property", props.formData.property);
      // formData.append("purchaseHome", props.formData.purchaseHome);
      // formData.append("isHomeBuyer", props.formData.isHomeBuyer);
      // formData.append("creditProfile", props.formData.creditProfile);
      // formData.append("firstName", props.formData.userName.firstName);
      // formData.append("lastName", props.formData.userName.lastName);
      // formData.append("email", props.formData.email);
      // formData.append("password", passwordInfo.password);

      emailjs.send(SERVICE_ID, TEMPLATE_ID, tempdata, USER_ID).then(
        (result) => {
          toast.success("Email sent successfully.");
        },
        (error) => {
          toast.error("Something went wrong!!");
        }
      );
      props.handleChangeData("passwordInfo", passwordInfo);
      props.onChangeProgress(100);
      props.nextStep();
    }
  };

  const onPrevPage = () => {
    props.onChangeProgress(80);
    props.previousStep();
  };

  return (
    <section>
      <Container>
        <div className="password-info">
          <div className="password-info2">
            <p>
              Your email address <span>(qwe@dsa.dsfs)</span> will be your
              Username.
            </p>
            <ul>
              <li
                className={
                  uppercaseRegix.test(passwordInfo.password) ? "active" : ""
                }
              >
                <BsCheckCircleFill /> Contains 1 Uppercase Letter
              </li>
              <li
                className={
                  lowercaseRegix.test(passwordInfo.password) ? "active" : ""
                }
              >
                <BsCheckCircleFill /> Contains 1 Lowercase Letter
              </li>
              <li
                className={
                  numberRegix.test(passwordInfo.password) ? "active" : ""
                }
              >
                <BsCheckCircleFill /> Contains 1 Number
              </li>
              <li className={passwordInfo.password.length >= 8 ? "active" : ""}>
                <BsCheckCircleFill /> At Least 8 Characters Long
              </li>
            </ul>
          </div>
          <ul className="form-input">
            <li>
              <div className="input-box">
                <label>Password</label>
                <input
                  type={"password"}
                  id="password"
                  name="password"
                  onChange={onValueChange}
                  onBlur={checkValidation}
                />
                <span className="error text-danger d-block text-center ">
                  {errorMsg.password}
                </span>
              </div>
            </li>
            <li>
              <div className="input-box">
                <label>Re-enter Password</label>
                <input
                  type={"password"}
                  id="reEnterPassword"
                  name="reEnterPassword"
                  onChange={onValueChange}
                  onBlur={checkValidation}
                />
                <span className="error text-danger d-block text-center ">
                  {errorMsg.reEnterPassword}
                </span>
              </div>
            </li>
          </ul>
          <div className="grayBox">
            <label>
              <input
                type={"checkbox"}
                name="checkbox"
                checked={passwordInfo.iAgree}
                onChange={onAcceptAggriment}
              />
              <h6>
                {" "}
                I agree that my data can be used for the purposes noted below.
              </h6>
            </label>
            <p>
              You're agreeing that we can share your personal data with third
              parties, such as our mortgage partners, service providers and
              other affiliates, and that we can use this data for marketing and
              analytics, and to make your experience easier.
            </p>
            <p>
              You can opt out of sharing your data now by unchecking the box.
              You can also opt out at any time by calling (888) 444-7492.
            </p>
          </div>
          <span className="error text-danger d-block text-center ">
            {errorMsg.iAgree}
          </span>
          <div className="form-btns">
            <Button onClick={onNextPage} className="btn btn-red">
              Next
            </Button>{" "}
            <br />
            <Button onClick={onPrevPage} variant="">
              Go Back
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PasswordDetail;
