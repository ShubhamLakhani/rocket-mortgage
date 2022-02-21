import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import "./HomeBuyer.css";

const HomeBuyer = (props) => {
  const [isHomeBuyer, setIsHomeBuyer] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onNextPage = () => {
    if (isHomeBuyer === "") {
      setErrorMsg("Please choose one.");
    } else {
      props.handleChangeData("isHomeBuyer", isHomeBuyer);
      props.onChangeProgress(50);
      props.nextStep();
    }
  };

  const onPrevPage = () => {
    props.onChangeProgress(30);
    props.previousStep();
  };

  const onValueChange = (event) => {
    setIsHomeBuyer(event.target.value);
    setErrorMsg("");
  };
  return (
    <section>
      <Container>
        <div className="HomeDescription">
          <h3 className="title">Are you a first-time home buyer?</h3>
          <ul className="box-wrap">
            <li className="text-center">
              <label htmlFor="home-box-13" className="home-box">
                <input
                  type={"radio"}
                  name="home-buyer-radio"
                  id="home-box-13"
                  value="yes"
                  checked={isHomeBuyer === "yes"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <AiOutlineCheckCircle />
                  </span>
                  <h6>Yes</h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="home-box-14" className="home-box">
                <input
                  type={"radio"}
                  name="home-buyer-radio"
                  id="home-box-14"
                  value="no"
                  checked={isHomeBuyer === "no"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <AiOutlineCloseCircle />
                  </span>
                  <h6>No</h6>
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

export default HomeBuyer;
