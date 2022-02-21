import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./ProfileDetail.css";

const nameRegex = /^[a-z ,.'-].{1,}$/i;
const ProfileDetail = (props) => {
  const [userName, setUserName] = useState({
    first_name: "",
    last_name: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    first_name: "",
    last_name: "",
  });

  const onValueChange = (event) => {
    const { name, value } = event.target;
    setUserName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "first_name") {
      if (nameRegex.test(value)) {
        setErrorMsg((prevState) => ({
          ...prevState,
          first_name: "",
        }));
      } else {
        if (value.length <= 1 && errorMsg.first_name !== "") {
          setErrorMsg((prevState) => ({
            ...prevState,
            first_name:
              "Please enter only letters, apostrophes, hyphens and periods. Cannot be less than 2 characters.",
          }));
        }
      }
    }
    if (name === "last_name") {
      if (nameRegex.test(value)) {
        setErrorMsg((prevState) => ({
          ...prevState,
          last_name: "",
        }));
      } else {
        if (value.length <= 1 && errorMsg.last_name !== "") {
          setErrorMsg((prevState) => ({
            ...prevState,
            last_name:
              "Please enter only letters, apostrophes, hyphens and periods. Cannot be less than 2 characters.",
          }));
        }
      }
    }
  };

  const checkValidation = (event) => {
    const { name, value } = event.target;
    if (name === "first_name") {
      console.log({ data: nameRegex.test(value) });
      if (value === "") {
        setErrorMsg((prevState) => ({
          ...prevState,
          first_name: "Please enter your first name.",
        }));
      } else {
        if (!nameRegex.test(value)) {
          setErrorMsg((prevState) => ({
            ...prevState,
            first_name:
              "Please enter only letters, apostrophes, hyphens and periods. Cannot be less than 2 characters.",
          }));
        }
      }
    }
    if (name === "last_name") {
      if (value === "") {
        setErrorMsg((prevState) => ({
          ...prevState,
          last_name: "Please enter your last name.",
        }));
      } else {
        if (!nameRegex.test(value)) {
          setErrorMsg((prevState) => ({
            ...prevState,
            last_name:
              "Please enter only letters, apostrophes, hyphens and periods. Cannot be less than 2 characters.",
          }));
        }
      }
    }
  };
  const onNextPage = () => {
    let isValid = true;
    if (userName.first_name === "") {
      isValid = false;
      setErrorMsg((prevState) => ({
        ...prevState,
        first_name: "Please enter your last name.",
      }));
    } else {
      if (nameRegex.test(userName.first_name)) {
        setErrorMsg((prevState) => ({
          ...prevState,
          first_name: "",
        }));
      } else {
        isValid = false;
        setErrorMsg((prevState) => ({
          ...prevState,
          first_name:
            "Please enter only letters, apostrophes, hyphens and periods. Cannot be less than 2 characters.",
        }));
      }
    }
    if (userName.last_name === "") {
      isValid = false;
      setErrorMsg((prevState) => ({
        ...prevState,
        last_name: "Please enter your last name.",
      }));
    } else {
      if (nameRegex.test(userName.last_name)) {
        setErrorMsg((prevState) => ({
          ...prevState,
          last_name: "",
        }));
      } else {
        isValid = false;
        setErrorMsg((prevState) => ({
          ...prevState,
          last_name:
            "Please enter only letters, apostrophes, hyphens and periods. Cannot be less than 2 characters.",
        }));
      }
    }

    if (isValid) {
      props.handleChangeData("userName", userName, 80);
      props.onChangeProgress(80);
      props.nextStep();
    }
  };

  const onPrevPage = () => {
    props.onChangeProgress(60);
    props.previousStep();
  };

  return (
    <section>
      <Container>
        <div className="HomeDescription">
          {/* <h3 className='title'>Your Credit Profile</h3> */}
          <ul className="form-input">
            <li>
              <div className="input-box">
                <label htmlFor="first-name">First Name</label>
                <input
                  type={"text"}
                  id="first-name"
                  name="first_name"
                  onChange={onValueChange}
                  onBlur={checkValidation}
                />
              </div>
              <span className="error text-danger d-block text-center ">
                {errorMsg.first_name}
              </span>
            </li>
            <li>
              <div className="input-box">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type={"text"}
                  id="last-name"
                  name="last_name"
                  onChange={onValueChange}
                  onBlur={checkValidation}
                />
              </div>
              <span className="error text-danger d-block text-center mt-5">
                {errorMsg.last_name}
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

export default ProfileDetail;
