import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { RiHome2Line, RiHome4Line } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import "./HomeDescription.css";

const HomeDescription = (props) => {
  const [homeDescription, setHomeDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onNextPage = () => {
    if (homeDescription === "") {
      setErrorMsg("Please choose one.");
    } else {
      props.handleChangeData("homeDescription", homeDescription);
      props.onChangeProgress(20);
      props.nextStep();
    }
  };

  const onPrevPage = () => {
    props.onChangeProgress(0);
    props.previousStep();
  };

  const onValueChange = (event) => {
    setHomeDescription(event.target.value);
    setErrorMsg("");
  };

  return (
    <section>
      <Container>
        <div className="HomeDescription">
          <h3 className="title">Home Description</h3>
          <ul className="box-wrap">
            <li className="text-center">
              <label htmlFor="single-family" className="home-box">
                <input
                  type={"radio"}
                  name="home-radio-2"
                  id="single-family"
                  value="Single-Family"
                  checked={homeDescription == "Single-Family"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <RiHome2Line />
                  </span>
                  <h6>Single-Family</h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="multi-family" className="home-box">
                {console.log({
                  homeDescription,
                  condition: homeDescription == "multi-family",
                })}
                <input
                  type={"radio"}
                  name="home-radio-2"
                  id="multi-family"
                  value="Multifamily"
                  checked={homeDescription == "Multifamily"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <RiHome4Line />
                  </span>
                  <h6>Multifamily</h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="condominium" className="home-box">
                <input
                  type={"radio"}
                  name="home-radio-2"
                  id="condominium"
                  value="Condominium"
                  checked={homeDescription == "Condominium"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <FaRegBuilding />
                  </span>
                  <h6>Condominium</h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="townhouse" className="home-box">
                <input
                  type={"radio"}
                  name="home-radio-2"
                  id="townhouse"
                  value="Townhouse"
                  checked={homeDescription == "Townhouse"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <BsBuilding />
                  </span>
                  <h6>Townhouse</h6>
                </div>
              </label>
            </li>
          </ul>
          <span className="error text-danger d-block text-center mt-5">
            {errorMsg}
          </span>
          <div className="form-btns">
            <Button onClick={onNextPage} className="btn btn-red">
              Next
            </Button>
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

export default HomeDescription;
