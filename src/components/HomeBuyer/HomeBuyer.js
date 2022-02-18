import {  Button, Container } from 'react-bootstrap';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import './HomeBuyer.css';


function HomeBuyer(props) {
  return (
    <section>
        <Container>
        <div className="HomeDescription">
        <h3 className='title'>Are you a first-time home buyer?</h3>
        <ul className='box-wrap'>
            <li className='text-center'>
                <label for="home-box-13" className='home-box'>
                    <input type={'radio'} name="home-radio" id="home-box-13" />
                    <div className=''>
                        <span><AiOutlineCheckCircle /></span>
                        <h6>Yes</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-14" className='home-box'>
                    <input type={'radio'} name="home-radio" id="home-box-14" />
                    <div className=''>
                        <span><AiOutlineCloseCircle /></span>
                        <h6>No</h6>
                    </div>
                </label>
            </li>
        </ul>
        <div className='form-btns'>
            <Button onClick={props.nextStep}  className="btn btn-red">Next</Button><br />
            <Button onClick={props.previousStep} variant="">Go Back</Button>
        </div>
    </div>
    </Container>
    </section>
  );
}

export default HomeBuyer;
