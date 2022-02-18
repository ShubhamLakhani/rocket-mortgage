import {  Button, Container, InputGroup, FormControl } from 'react-bootstrap';

import './EmailDetail.css';


function EmailDetail(props) {
  return (
    <section>
        <Container>
        <div className="HomeDescription">
        <h3 className='title'>Email Address</h3>
        <ul className='form-input'>
            <li>
                <div className='input-box'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
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

export default EmailDetail;
