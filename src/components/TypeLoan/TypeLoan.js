import {  Button, Container } from 'react-bootstrap';
import { RiHome4Line } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { FaPercentage } from "react-icons/fa";

import './TypeLoan.css';


function Property(props) {
  return (
    <section>
        <Container>
        <div className="HomeDescription">
        <h3 className='title'>Property Use</h3>
        <ul className='box-wrap'>
            <li className='text-center'>
                <label for="home-box-8" className='home-box property-box'>
                    <input type={'radio'} name="home-radio" id="home-box-8" />
                    <div className=''>
                        <span><FaPercentage /></span>
                        <h6>Home Refinance</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-9" className='home-box property-box'>
                    <input type={'radio'} name="home-radio" id="home-box-9" />
                    <div className=''>
                        <span><RiHome4Line /></span>
                        <h6>Home Purchase</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-10" className='home-box property-box'>
                    <input type={'radio'} name="home-radio" id="home-box-10" />
                    <div className=''>
                        <span><MdAttachMoney /></span>
                        <h6>Cash-Out Refinance</h6>
                    </div>
                </label>
            </li>
        </ul>
        <div className='form-btns'>
            <Button onClick={props.nextStep}  className="btn btn-red">Next</Button> <br />
        </div>
    </div>
    </Container>
    </section>
  );
}

export default Property;
