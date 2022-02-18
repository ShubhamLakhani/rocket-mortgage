


import {  Button, Container } from 'react-bootstrap';

import './ProfileDetail.css';


function ProfileDetail(props) {
  return (
    <section>
        <Container>
        <div className="HomeDescription">
        {/* <h3 className='title'>Your Credit Profile</h3> */}
        <ul className='form-input'>
            <li>
                <div className='input-box'>
                    <label>First Name</label>
                    <input type={'text'} />
                </div>
            </li>
            <li>
                <div className='input-box'>
                    <label>Last  Name</label>
                    <input type={'text'} />
                </div>
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

export default ProfileDetail;
