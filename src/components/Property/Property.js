import {  Button, Container } from 'react-bootstrap';
import { RiHome4Line } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { BsMailbox } from "react-icons/bs";

import './Property.css';


function Property(props) {
  return (
    <section>
        <Container>
        <div className="HomeDescription">
        <h3 className='title'>Property Use</h3>
        <ul className='box-wrap'>
            <li className='text-center'>
                <label for="home-box-5" className='home-box property-box'>
                    <input type={'radio'} name="home-radio" id="home-box-5" />
                    <div className=''>
                        <span><BsMailbox /></span>
                        <h6>Primary Residence</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-6" className='home-box property-box'>
                    <input type={'radio'} name="home-radio" id="home-box-6" />
                    <div className=''>
                        <span><RiHome4Line /></span>
                        <h6>Secondary Home</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-7" className='home-box property-box'>
                    <input type={'radio'} name="home-radio" id="home-box-7" />
                    <div className=''>
                        <span><MdAttachMoney /></span>
                        <h6>Investment Property</h6>
                    </div>
                </label>
            </li>
        </ul>
        <div className='form-btns'>
            <Button onClick={props.nextStep}  className="btn btn-red">Next</Button> <br />
            <Button onClick={props.previousStep} variant="">Go Back</Button>
        </div>
    </div>
    </Container>
    </section>
  );
}

export default Property;
