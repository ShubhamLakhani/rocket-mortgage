import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { RiHome4Line } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { FaPercentage } from "react-icons/fa";
import "./TypeLoan.css";

function Property(props) {
  const [loanType, setLoanType] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onValueChange = (event) => {
    const { defaultValue } = event.target;
    console.log({ defaultValue });
    setLoanType(defaultValue);
    setErrorMsg("");
  };

  const onNextPage = () => {
    if (loanType === "") {
      setErrorMsg("Please choose one.");
    } else {
      props.handleChangeData("loanType", loanType);
      props.onChangeProgress(10);
      props.nextStep();
    }
  };
  return (
    <section>
      <Container>
        <div className="HomeDescription">
          <h3 className="title">Type of Loan</h3>
          <ul className="box-wrap">
            <li className="text-center">
              <label htmlFor="home-box-8" className="home-box property-box">
                <input
                  type={"radio"}
                  name="home-radio"
                  id="home-box-8"
                  value="Home Refinance"
                  checked={loanType === "Home Refinance"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <FaPercentage />
                  </span>
                  <h6>Home Refinance</h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="home-box-9" className="home-box property-box">
                <input
                  type={"radio"}
                  name="home-radio"
                  id="home-box-9"
                  value="Home Purchase"
                  checked={loanType === "Home Purchase"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <RiHome4Line />
                  </span>
                  <h6>Home Purchase</h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="home-box-10" className="home-box property-box">
                <input
                  type={"radio"}
                  name="home-radio"
                  id="home-box-10"
                  value="Cash-Out Refinance"
                  checked={loanType === "Cash-Out Refinance"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <MdAttachMoney />
                  </span>
                  <h6>Cash-Out Refinance</h6>
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
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Property;
