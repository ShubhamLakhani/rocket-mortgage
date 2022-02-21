import { useState } from "react";
import { Button, Container, InputGroup, FormControl } from "react-bootstrap";

import "./EmailDetail.css";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const EmailDetail = (props) => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onValueChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    console.log({ value1: value.length });
    if (value !== "") {
      if (emailRegex.test(value)) {
        setErrorMsg("");
      } else {
        console.log({ value2: value.length });
        if (value.length !== 0) {
          setErrorMsg("Please enter a valid email address.");
        }
      }
    } else {
      setErrorMsg("Please enter your email address.");
    }
  };

  const checkValidation = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      console.log({ data: emailRegex.test(value) });
      if (value === "") {
        setErrorMsg("Please enter your email address.");
      } else {
        if (!emailRegex.test(value)) {
          setErrorMsg("Please enter a valid email address.");
        }
      }
    }
  };
  const onNextPage = () => {
    let isValid = true;
    console.log({ email });
    if (email === "") {
      isValid = false;
      setErrorMsg("Please enter your last name.");
    } else {
      if (emailRegex.test(email)) {
        setErrorMsg("");
      } else {
        isValid = false;
        setErrorMsg(
          "Please enter only letters, apostrophes, hyphens and periods. Cannot be less than 2 characters."
        );
      }
    }
    if (isValid) {
      props.handleChangeData("email", email);
      props.onChangeProgress(90);
      props.nextStep();
    }
  };

  const onPrevPage = () => {
    props.onChangeProgress(70);
    props.previousStep();
  };
  return (
    <section>
      <Container>
        <div className="HomeDescription">
          <h3 className="title">Email Address</h3>
          <ul className="form-input">
            <li>
              <div className="input-box">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <FormControl
                    type="text"
                    placeholder="example@email.com"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="email"
                    onChange={onValueChange}
                    onBlur={checkValidation}
                  />
                </InputGroup>
              </div>
              <span className="error text-danger d-block text-center ">
                {errorMsg}
              </span>
            </li>
          </ul>
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

export default EmailDetail;
