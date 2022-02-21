import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { RiHome4Line } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { BsMailbox } from "react-icons/bs";

import "./Property.css";

const Property = (props) => {
  const [property, setProperty] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onNextPage = () => {
    if (property === "") {
      setErrorMsg("Please choose one.");
    } else {
      props.handleChangeData("property", property);
      props.onChangeProgress(30);
      props.nextStep();
    }
  };

  const onPrevPage = () => {
    props.onChangeProgress(10);
    props.previousStep();
  };

  const onValueChange = (event) => {
    setProperty(event.target.value);
    setErrorMsg("");
  };
  return (
    <section>
      <Container>
        <div className="HomeDescription">
          <h3 className="title">Property Use</h3>
          <ul className="box-wrap">
            <li className="text-center">
              <label
                htmlFor="primary-residence"
                className="home-box property-box"
              >
                <input
                  type={"radio"}
                  name="property-radio"
                  id="primary-residence"
                  value="Primary Residence"
                  checked={property === "Primary Residence"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <BsMailbox />
                  </span>
                  <h6>Primary Residence</h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="secondary-home" className="home-box property-box">
                <input
                  type={"radio"}
                  name="property-radio"
                  id="secondary-home"
                  value="Secondary Home"
                  checked={property === "Secondary Home"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <RiHome4Line />
                  </span>
                  <h6>Secondary Home</h6>
                </div>
              </label>
            </li>
            <li className="text-center">
              <label
                htmlFor="investment-property"
                className="home-box property-box"
              >
                <input
                  type={"radio"}
                  name="property-radio"
                  id="investment-property"
                  value="Investment Property"
                  checked={property === "Investment Property"}
                  onChange={onValueChange}
                />
                <div className="">
                  <span>
                    <MdAttachMoney />
                  </span>
                  <h6>Investment Property</h6>
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

export default Property;
