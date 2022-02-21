import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";

import "./CreditProfile.css";

const CreditProfile = (props) => {
  const [creditProfile, setCreditProfile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onNextPage = () => {
    if (creditProfile === "") {
      setErrorMsg("Please choose one.");
    } else {
      props.handleChangeData("creditProfile", creditProfile, 70);
      props.onChangeProgress(70);
      props.nextStep();
    }
  };

  const onPrevPage = () => {
    props.onChangeProgress(50);
    props.previousStep();
  };

  const onValueChange = (event) => {
    setCreditProfile(event.target.value);
    setErrorMsg("");
  };
  return (
    <section>
      <Container>
        <div className="HomeDescription">
          <h3 className="title">Your Credit Profile</h3>
          <ul className="box-wrap">
            <li className="text-center">
              <label
                htmlFor="home-box-16"
                className="home-box property-box star-box"
              >
                <input
                  type={"radio"}
                  name="credit-profile-radio"
                  id="home-box-16"
                  value="Excellent"
                  checked={creditProfile === "Excellent"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar /> <br />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                  <h6>
                    Excellent <br /> 720+
                  </h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label
                htmlFor="home-box-17"
                className="home-box property-box star-box"
              >
                <input
                  type={"radio"}
                  name="credit-profile-radio"
                  id="home-box-17"
                  value="Good"
                  checked={creditProfile === "Good"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                  <h6>
                    Good <br /> 660-719
                  </h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label
                htmlFor="home-box-18"
                className="home-box property-box star-box"
              >
                <input
                  type={"radio"}
                  name="credit-profile-radio"
                  id="home-box-18"
                  value="Avg"
                  checked={creditProfile === "Avg"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                  <h6>
                    Avg. <br /> 620-659
                  </h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label
                htmlFor="home-box-19"
                className="home-box property-box star-box"
              >
                <input
                  type={"radio"}
                  name="credit-profile-radio"
                  id="home-box-19"
                  value="Below Avg"
                  checked={creditProfile === "Below Avg"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                  <h6>
                    Below Avg. <br /> 580-619
                  </h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label
                htmlFor="home-box-20"
                className="home-box property-box star-box"
              >
                <input
                  type={"radio"}
                  name="credit-profile-radio"
                  id="home-box-20"
                  value="Poor"
                  checked={creditProfile === "Poor"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <AiOutlineStar />
                  </span>
                  <h6>
                    Poor <br /> ≤ 579
                  </h6>
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

export default CreditProfile;
