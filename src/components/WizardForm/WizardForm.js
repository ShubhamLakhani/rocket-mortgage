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

import './WizardForm.css';

function WizardForm(props) {
  return (
    < >
    <StepWizard>
    <TypeLoan />
    <HomeDescription />
    <Property/>
    <PurchaseHome/>
    <HomeBuyer/>
    <CreditProfile/>
    <ProfileDetail/>
    <EmailDetail />
    <PasswordDetail/>
    </StepWizard>
    </>
  );
}

export default WizardForm;
