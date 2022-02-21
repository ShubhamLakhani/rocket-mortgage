import { useState } from "react";
import { Button, Container } from "react-bootstrap";

import "./PurchaseHome.css";

const PurchaseHome = (props) => {
  const [purchaseHome, setPurchaseHome] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onNextPage = () => {
    if (purchaseHome === "") {
      setErrorMsg("Please choose one.");
    } else {
      props.handleChangeData("purchaseHome", purchaseHome);
      props.onChangeProgress(40);
      props.nextStep();
    }
  };

  const onPrevPage = () => {
    props.onChangeProgress(20);
    props.previousStep();
  };

  const onValueChange = (event) => {
    setPurchaseHome(event.target.value);
    setErrorMsg("");
  };
  return (
    <section>
      <Container>
        <div className="home-text-box-wrap">
          <h3 className="title">When do you plan to purchase your home?</h3>
          <ul className="box-wrap">
            <li className="text-center">
              <label htmlFor="p-home-box-1" className="home-text-box">
                <input
                  type={"radio"}
                  name="purchase-home-radio"
                  id="p-home-box-1"
                  value="Signed a Purchase Agreement"
                  checked={purchaseHome === "Signed a Purchase Agreement"}
                  onChange={onValueChange}
                />
                <h6>Signed a Purchase Agreement</h6>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="p-home-box-2" className="home-text-box">
                <input
                  type={"radio"}
                  name="purchase-home-radio"
                  id="p-home-box-2"
                  value="Offer Pending / Found a House"
                  checked={purchaseHome === "Offer Pending / Found a House"}
                  onChange={onValueChange}
                />
                <h6>Offer Pending / Found a House</h6>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="p-home-box-3" className="home-text-box">
                <input
                  type={"radio"}
                  name="purchase-home-radio"
                  id="p-home-box-3"
                  value="Buying in 30 Days"
                  checked={purchaseHome === "Buying in 30 Days"}
                  onChange={onValueChange}
                />
                <h6>Buying in 30 Days</h6>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="p-home-box-4" className="home-text-box">
                <input
                  type={"radio"}
                  name="purchase-home-radio"
                  id="p-home-box-4"
                  value="Buying in 2 to 3 Months"
                  checked={purchaseHome === "Buying in 2 to 3 Months"}
                  onChange={onValueChange}
                />
                <h6>Buying in 2 to 3 Months</h6>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="p-home-box-5" className="home-text-box">
                <input
                  type={"radio"}
                  name="purchase-home-radio"
                  id="p-home-box-5"
                  value="Buying in 4 to 5 Months"
                  checked={purchaseHome === "Buying in 4 to 5 Months"}
                  onChange={onValueChange}
                />
                <h6>Buying in 4 to 5 Months</h6>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="p-home-box-6" className="home-text-box">
                <input
                  type={"radio"}
                  name="purchase-home-radio"
                  id="p-home-box-6"
                  value="Buying in 6+ Months"
                  checked={purchaseHome === "Buying in 6+ Months"}
                  onChange={onValueChange}
                />
                <h6>Buying in 6+ Months</h6>
              </label>
            </li>
            <li className="text-center">
              <label htmlFor="p-home-box-7" className="home-text-box">
                <input
                  type={"radio"}
                  name="purchase-home-radio"
                  id="p-home-box-7"
                  value="Researching Options"
                  checked={purchaseHome === "Researching Options"}
                  onChange={onValueChange}
                />
                <h6>Researching Options</h6>
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

export default PurchaseHome;
