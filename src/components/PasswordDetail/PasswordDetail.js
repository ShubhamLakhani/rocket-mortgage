import {  Button, Container } from 'react-bootstrap';
import { BsCheckCircleFill } from "react-icons/bs";


import './PasswordDetail.css';


function PasswordDetail(props) {
  return (
    <section>
        <Container>
        <div className="password-info">
            <div className='password-info2'>
                <p>Your email address <span>(qwe@dsa.dsfs)</span> will be your Username.</p>
                <ul>
                    <li className='active'><BsCheckCircleFill/> Contains 1 Uppercase Letter</li>
                    <li className='active'><BsCheckCircleFill/> Contains 1 Lowercase Letter</li>
                    <li><BsCheckCircleFill/> Contains 1 Number</li>
                    <li><BsCheckCircleFill/> At Least 8 Characters Long</li>
                </ul>
            </div>
        <ul className='form-input'>
            <li>
                <div className='input-box'>
                    <label>Password</label>
                    <input type={'text'} />
                </div>
            </li>
            <li>
                <div className='input-box'>
                    <label>Re-enter Password</label>
                    <input type={'text'} />
                </div>
            </li>
           
        </ul>
        <div className='grayBox'>
            <label>
                <input type={'checkbox'} name='checkbox' />
                <h6> I agree that my data can be used for the purposes noted below.</h6>
            </label>
            <p>You're agreeing that we can share your personal data with third parties, such as our mortgage partners, service providers and other affiliates, and that we can use this data for marketing and analytics, and to make your experience easier.</p>
            <p>You can opt out of sharing your data now by unchecking the box. You can also opt out at any time by calling (888) 444-7492.</p>
        </div>
        <div className='form-btns'>
            <Button onClick={props.nextStep}  className="btn btn-red">Next</Button> <br />
            <Button onClick={props.previousStep} variant="">Go Back</Button>
        </div>
    </div>
    </Container>
    </section>
  );
}

export default PasswordDetail;
