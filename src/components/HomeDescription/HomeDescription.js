import {  Button, Container } from 'react-bootstrap';
import { RiHome2Line, RiHome4Line } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

import './HomeDescription.css';


function HomeDescription(props) {
  return (
    <section>
        <Container>
        <div className="HomeDescription">
        <h3 className='title'>Home Description</h3>
        <ul className='box-wrap'>
            <li className='text-center'>
                <label for="home-box-1" className='home-box'>
                    <input type={'radio'} name="home-radio" id="home-box-1" />
                    <div className=''>
                        <span><RiHome2Line /></span>
                        <h6>Single-Family</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-2" className='home-box'>
                    <input type={'radio'} name="home-radio" id="home-box-2" />
                    <div className=''>
                        <span><RiHome4Line /></span>
                        <h6>Single-Family</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-3" className='home-box'>
                    <input type={'radio'} name="home-radio" id="home-box-3" />
                    <div className=''>
                        <span><FaRegBuilding /></span>
                        <h6>Single-Family</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-4" className='home-box'>
                    <input type={'radio'} name="home-radio" id="home-box-4" />
                    <div className=''>
                        <span><BsBuilding /></span>
                        <h6>Single-Family</h6>
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

export default HomeDescription;
