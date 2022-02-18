import {  Button, Container } from 'react-bootstrap';
import { AiOutlineStar } from "react-icons/ai";

import './CreditProfile.css';


function CreditProfile(props) {
  return (
    <section>
        <Container>
        <div className="HomeDescription">
        <h3 className='title'>Your Credit Profile</h3>
        <ul className='box-wrap'>
            <li className='text-center'>
                <label for="home-box-16" className='home-box property-box star-box'>
                    <input type={'radio'} name="home-radio" id="home-box-16" />
                    <div className=''>
                        <span><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /> <br/><AiOutlineStar /><AiOutlineStar /></span>
                        <h6>Excellent <br/> 720+</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-17" className='home-box property-box star-box'>
                    <input type={'radio'} name="home-radio" id="home-box-17" />
                    <div className=''>
                        <span><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>
                        <h6>Good <br/> 660-719</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-18" className='home-box property-box star-box'>
                    <input type={'radio'} name="home-radio" id="home-box-18" />
                    <div className=''>
                        <span><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>
                        <h6>Avg. <br/> 620-659</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-19" className='home-box property-box star-box'>
                    <input type={'radio'} name="home-radio" id="home-box-19" />
                    <div className=''>
                        <span><AiOutlineStar /><AiOutlineStar /></span>
                        <h6>Below Avg. <br/> 580-619</h6>
                    </div>
                </label>
            </li>
            <li className='text-center'>
                <label for="home-box-20" className='home-box property-box star-box'>
                    <input type={'radio'} name="home-radio" id="home-box-20" />
                    <div className=''>
                        <span><AiOutlineStar /></span>
                        <h6>Poor <br/> ≤ 579</h6>
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

export default CreditProfile;
