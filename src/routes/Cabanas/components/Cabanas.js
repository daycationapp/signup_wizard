import React, { PropTypes } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Cabanas extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {};
    }

    render() {
        return (
            <form className='signup'>
                <FormGroup>
                    <ControlLabel className='highlight-label'>Do you plan on offering cabanas?</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                            <ControlLabel className='highlight-label'>How many cabanas are on your property?</ControlLabel>
                            <FormControl type='text' value={this.state.cabanasCount}/>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Are the cabanas seasonal or year-round?</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Please list all cabana packages, the amenities included in them, and the pricing.</ControlLabel>
                    <br />
                    <ControlLabel>
                        Include variations such as half day and full day rentals.
                    </ControlLabel>
                    <FormControl componentClass="textarea" rows={5} value={this.state.cabanaPackages}/>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Canaba Availability</ControlLabel>
                    <br />
                    <ControlLabel>
                        Based on the general trends at the hotel, pre-populate the maximum number of cabanas to be offered to day guests by range of months and week/weekday in the field below.
                        You will be able to set the number for individual days as well as block out days in the calendar but this creates the general framework as a starting point.
                    </ControlLabel>
                    <FormControl componentClass="textarea" rows={5} value={this.state.cabanaAvailability}/>
                </FormGroup>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                            <ControlLabel className='highlight-label'>Cabana hours</ControlLabel>
                            <FormControl type='text' value={this.state.cabanaHours}/>
                        </FormGroup>
                    </Col>
                </Row>

                <div className='text-center mt30'>
                    <Button bsStyle='link' className='mr20'>Previous</Button>
                    <Button bsStyle='link' className='mr20'>Next</Button>
                    <Button bsStyle='primary'>Save</Button>
                </div>
            </form>
        );
    }
}

Cabanas.propTypes = {
};

export default Cabanas;
