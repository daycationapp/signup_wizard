import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './HotelInfo.scss';

class HotelInfo extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }

    render() {
        return (
            <form className='signup'>
                <FormGroup>
                    <ControlLabel className='highlight-label'>Hotel Name</ControlLabel>
                    <FormControl type='text' value={this.state.hotelName}/>
                </FormGroup>

                <Row>
                    <Col lg={6} md={12}>
                        <FormGroup>
                            <ControlLabel className='highlight-label'>How did you find out about Daycation?</ControlLabel>
                            <FormControl type='text' value={this.state.findout}/>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <ControlLabel className='highlight-label'>Address</ControlLabel>
                    <br />
                    <ControlLabel>Street Address</ControlLabel>
                    <FormControl type='text' value={this.state.streetAddress}/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Address Line2</ControlLabel>
                    <FormControl type='text' value={this.state.address2}/>
                </FormGroup>

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>City</ControlLabel>
                            <FormControl type='text' value={this.state.city}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>State / Province / Region</ControlLabel>
                            <FormControl type='text' value={this.state.state}/>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>ZIP / Postal Code</ControlLabel>
                            <FormControl type='text' value={this.state.postalCode}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>Country</ControlLabel>
                            <FormControl componentClass='select'>
                                <option value='select'>select</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>

                <div className='mt20 text-left'>
                    <div className='section-title'>Adminstrator of day guest program</div>
                    <p>Who will be the main contact and lead account manager for <b>Daycation?</b></p>
                </div>

                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <ControlLabel>First</ControlLabel>
                            <FormControl type='text' value={this.state.first}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ControlLabel>Last</ControlLabel>
                            <FormControl type='text' value={this.state.last}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl type='text' value={this.state.title}/>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt20'>
                            <ControlLabel className='highlight-label'>Email</ControlLabel>
                            <FormControl type='email' value={this.state.email}/>
                        </FormGroup>
                    </Col>
                </Row>

                <div className='text-center mt20'>
                    <Button bsStyle='link' className='mr20'>Next</Button>
                    <Button bsStyle='primary'>Save</Button>
                </div>
            </form>
        );
    }
}

export default HotelInfo;
