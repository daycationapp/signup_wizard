import React, { PropTypes } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import './Agreement.scss';

class Agreement extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {};
    }

    render() {
        return (
            <form className='signup'>
                <FormGroup>
                    <ControlLabel className='highlight-label'>Day guests can book up to 10 weeks in advance. Is this acceptable?</ControlLabel>
                    <br />
                    <ControlLabel>
                        Setting a maximum amount of passes and spots available for upcoming months based on general trends at the hotel allows for guests to book weeks in advance.
                        You will be able to increase, decrease or block out the availability for days each week but you will have to honor the guests that already booked.
                    </ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Do you agree to offer a minimum of 45 day passes per month on Daycation?</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Do you agree to allow Daycation to offer complimentary Daycation access to qualified social media influencers?</ControlLabel>
                    <br />
                    <ControlLabel>
                        Social media influencers add significant exposure and demand to your property. 
                        A qualified influencer has a relevant following of over 10,000. Most of our influencers have around 60,000 followers.
                    </ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Where would you like day guests to check in?</ControlLabel>
                    <br />
                    <ControlLabel>
                        Day guests check in similar no night guests. They must provide a valid photo ID or their booking ID for hotel staff to verify their booking and check them in using our management software. 
                        Staff instructions for day guest program will be provided once your account is set up.
                    </ControlLabel>
                    <Checkbox>Front desk</Checkbox>
                    <Checkbox>Spa</Checkbox>
                    <Checkbox>Concierge</Checkbox>
                    <Checkbox>Bell desk</Checkbox>
                    <Checkbox>Recreation Desk</Checkbox>
                    <Row>
                        <Col md={6} sm={12}>
                            <FormControl type='text' placeholder='Others' value={this.state.guestCheckInOther}/>
                        </Col>
                    </Row>
                </FormGroup>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                            <ControlLabel className='highlight-label'>Additional check-in comments</ControlLabel>
                            <FormControl type='text' value={this.state.additionalComments}/>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Daycation will pay Hotel total balances due monthly. Is this acceptable?</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>
                        Do you agree to participate in the Daycation Program for one year in order to fully benefit from the program 
                        through the difference seasons and from Daycation growth?
                    </ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <div className='agreement'>Agreement Section</div>

                <Row className='sign-form'>
                    <Col md={6}>
                        <p className='contractor-name'>"Daycation" by <br />Pineapple Global, Inc.</p>
                        <div className='form-inline sign-form'>
                            <FormGroup>
                                <ControlLabel>By: </ControlLabel>
                                <FormControl type="text" value={this.state.ownerBy} />
                            </FormGroup>
                        </div>
                        <p className='sign-by'>Matthew Boney<br />Chief Executive Officer</p>
                    </Col>
                    <Col md={6}>
                        <p className='contractor-name'>Hotel Name</p>
                        <div className='form-inline sign-form'>
                            <FormGroup>
                                <ControlLabel>By: </ControlLabel>
                                <FormControl type="text" value={this.state.contractorBy} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Name: </ControlLabel>
                                <FormControl type="text" value={this.state.contractorName} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Title: </ControlLabel>
                                <FormControl type="text" value={this.state.contractorTitle} />
                            </FormGroup>
                        </div>
                    </Col>
                </Row>

                <h4 className='end-title'>"Daycation" by Pineapple Global, Inc. Agreement</h4>

                <div className='text-center mt30'>
                    <Button bsStyle='link' className='mr20'>Previous</Button>
                    <Button bsStyle='danger' className='mr20'>Submit</Button>
                    <Button bsStyle='primary'>Save</Button>
                </div>
            </form>
        );
    }
}

Agreement.propTypes = {
};

export default Agreement;
