import {  Button, Container } from 'react-bootstrap';

import './PurchaseHome.css';


function PurchaseHome(props) {
  return (
    <section>
        <Container>
        <div className="home-text-box-wrap">
        <h3 className='title'>Home Description</h3>
        <ul className='box-wrap'>
            <li className='text-center'>
                <label for="p-home-box-1" className='home-text-box'>
                    <input type={'radio'} name="home-radio" id="p-home-box-1" />
                        <h6>Signed a Purchase Agreement</h6>
                </label>
            </li>
            <li className='text-center'>
                <label for="p-home-box-2" className='home-text-box'>
                    <input type={'radio'} name="home-radio" id="p-home-box-2" />
                        <h6>Offer Pending / Found a House</h6>
                </label>
            </li>
            <li className='text-center'>
                <label for="p-home-box-3" className='home-text-box'>
                    <input type={'radio'} name="home-radio" id="p-home-box-3" />
                        <h6>Buying in 30 Days</h6>
                </label>
            </li>
            <li className='text-center'>
                <label for="p-home-box-4" className='home-text-box'>
                    <input type={'radio'} name="home-radio" id="p-home-box-4" />
                        <h6>Buying in 2 to 3 Months</h6>
                </label>
            </li>
            <li className='text-center'>
                <label for="p-home-box-5" className='home-text-box'>
                    <input type={'radio'} name="home-radio" id="p-home-box-5" />
                        <h6>Buying in 4 to 5 Months</h6>
                </label>
            </li>
            <li className='text-center'>
                <label for="p-home-box-6" className='home-text-box'>
                    <input type={'radio'} name="home-radio" id="p-home-box-6" />
                        <h6>Buying in 6+ Months</h6>
                </label>
            </li>
            <li className='text-center'>
                <label for="p-home-box-7" className='home-text-box'>
                    <input type={'radio'} name="home-radio" id="p-home-box-7" />
                        <h6>Researching Options</h6>
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

export default PurchaseHome;
