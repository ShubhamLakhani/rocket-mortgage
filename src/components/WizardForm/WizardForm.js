import { useState } from "react";
import StepWizard from "react-step-wizard";
import CreditProfile from "../CreditProfile/CreditProfile";
import HomeBuyer from "../HomeBuyer/HomeBuyer";
import HomeDescription from "../HomeDescription/HomeDescription";
import ProfileDetail from "../ProfileDetail/ProfileDetail";
import Property from "../Property/Property";
import PurchaseHome from "../PurchaseHome/PurchaseHome";
import TypeLoan from "../TypeLoan/TypeLoan";
import EmailDetail from "../EmailDetail/EmailDetail";
import PasswordDetail from "../PasswordDetail/PasswordDetail";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./WizardForm.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

const Progressbar = ({ percentage }) => {
  return percentage >= 10 ? (
    <div style={{ maxWidth: "150px", margin: "0 auto" }}>
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "100%" }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          {/* <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
            {(percentage) => (
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            )}
          </ChangingProgressProvider> */}
        </div>
      </div>
    </div>
  ) : null;
};

const WizardForm = (props) => {
  const [formData, setFormData] = useState({
    loanType: "",
    homeDescription: "",
    property: "",
    purchaseHome: "",
    isHomeBuyer: "",
    creditProfile: "",
    userName: {},
    email: "",
  });
  const [progressPercentage, serProgressPercentage] = useState(0);

  const handleChangeData = (name, value, percentage) => {
    setFormData({ ...formData, [name]: value });
  };

  const onChangeProgress = (percentage) => {
    serProgressPercentage(percentage);
  };
  console.log({ formData });
  return (
    <>
      <StepWizard nav={<Progressbar percentage={progressPercentage} />}>
        <TypeLoan
          handleChangeData={handleChangeData}
          onChangeProgress={onChangeProgress}
        />
        <HomeDescription
          handleChangeData={handleChangeData}
          onChangeProgress={onChangeProgress}
        />
        <Property
          handleChangeData={handleChangeData}
          onChangeProgress={onChangeProgress}
        />
        <PurchaseHome
          handleChangeData={handleChangeData}
          onChangeProgress={onChangeProgress}
        />
        <HomeBuyer
          handleChangeData={handleChangeData}
          onChangeProgress={onChangeProgress}
        />
        <CreditProfile
          handleChangeData={handleChangeData}
          onChangeProgress={onChangeProgress}
        />
        <ProfileDetail
          handleChangeData={handleChangeData}
          onChangeProgress={onChangeProgress}
        />
        <EmailDetail
          handleChangeData={handleChangeData}
          onChangeProgress={onChangeProgress}
        />
        <PasswordDetail
          handleChangeData={handleChangeData}
          formData={formData}
          onChangeProgress={onChangeProgress}
        />
      </StepWizard>
    </>
  );
};

export default WizardForm;

{
  /* <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
  {(percentage) => (
    <CircularProgressbar value={percentage} text={`${percentage}%`} />
  )}
</ChangingProgressProvider>; */
}
