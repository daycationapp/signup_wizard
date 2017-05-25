import React, { PropTypes } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

const PLAN = 'plan';
const COUNT = 'count';
const OPTION = 'option';
const PACKAGES = 'packages';
const AVAILABILITY = 'availability';
const HOURS = 'hours';

class Cabanas extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            cabanas: this.props.cabanas
        };
    }

    handleFieldChange(fieldName, event) {
        const value = event.target.value;
        let cabanas = {...this.state.cabanas};
        cabanas[fieldName] = value;
        this.setState({ cabanas: cabanas });
    }

    handleNextClick() {
        browserHistory.push('/agreement');
    }

    handleSaveClick() {
        let cabanas = {...this.state.cabanas};
        this.props.saveCabanas(cabanas);
    }

    handlePreviousClick() {
        browserHistory.push('/day-passes');
    }

    render() {
        const data = {...this.state.dayPasses};
        return (
            <form className='signup'>
                <FormGroup>
                    <ControlLabel className='highlight-label'>Do you plan on offering cabanas?</ControlLabel>
                    <FormControl
                        componentClass='select'
                        className='fixed-control'
                        value={data[PLAN]}
                        onChange={this.handleFieldChange.bind(this, PLAN)}
                    >
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                            <ControlLabel className='highlight-label'>How many cabanas are on your property?</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[COUNT]}
                                onChange={this.handleFieldChange.bind(this, COUNT)}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Are the cabanas seasonal or year-round?</ControlLabel>
                    <FormControl
                        componentClass='select'
                        className='fixed-control'
                        value={data[OPTION]}
                        onChange={this.handleFieldChange.bind(this, OPTION)}
                    >
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Please list all cabana packages, the amenities included in them, and the pricing.</ControlLabel>
                    <br />
                    <ControlLabel>
                        Include variations such as half day and full day rentals.
                    </ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        rows={5}
                        value={data[PACKAGES]}
                        onChange={this.handleFieldChange.bind(this, PACKAGES)}
                    />
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Canaba Availability</ControlLabel>
                    <br />
                    <ControlLabel>
                        Based on the general trends at the hotel, pre-populate the maximum number of cabanas to be offered to day guests by range of months and week/weekday in the field below.
                        You will be able to set the number for individual days as well as block out days in the calendar but this creates the general framework as a starting point.
                    </ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        rows={5}
                        value={data[AVAILABILITY]}
                        onChange={this.handleFieldChange.bind(this, AVAILABILITY)}
                    />
                </FormGroup>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                            <ControlLabel className='highlight-label'>Cabana hours</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[HOURS]}
                                onChange={this.handleFieldChange.bind(this, HOURS)}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <div className='text-center mt30'>
                    <Button bsStyle='link' className='mr20' onClick={this.handlePreviousClick.bind(this)}>Previous</Button>
                    <Button bsStyle='link' className='mr20' onClick={this.handleNextClick.bind(this)}>Next</Button>
                    <Button bsStyle='primary' onClick={this.handleSaveClick.bind(this)}>Save</Button>
                </div>
            </form>
        );
    }
}

Cabanas.propTypes = {
    cabanas: PropTypes.object.isRequired,
    saveCabanas: PropTypes.func.isRequired
};

Cabanas.defaultProps = {
    cabanas: {},
    saveCabanas: () => {}
};

export default Cabanas;
