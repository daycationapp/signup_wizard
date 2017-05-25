import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const HOTEL_NAME = 'hotelName';
const FIND_OUT = 'findout';
const STREET_ADDRESS = 'streetAddress';
const ADDRESS_LINE2 = 'addressLine2';
const CITY = 'city';
const STATE = 'state';
const ZIP_CODE = 'zipCode';
const COUNTRY = 'country';
const ADMIN_FIRST_NAME = 'adminFirstName';
const ADMIN_LAST_NAME = 'adminLastName';
const ADMIN_TITLE = 'adminTitle';
const EMAIL = 'email';

class HotelInfo extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            hotelInfo: this.props.hotelInfo
        };
    }

    handleFieldChange(fieldName, event) {
        const value = event.target.value;
        let hotelInfo = {...this.state.hotelInfo};
        hotelInfo[fieldName] = value;
        this.setState({ hotelInfo: hotelInfo });
    }

    handleNextClick() {
        browserHistory.push('/day-passes');
    }

    handleSaveClick() {
        let hotelInfo = {...this.state.hotelInfo};
        this.props.saveHotelInfo(hotelInfo);
    }

    render() {
        const data = {...this.state.hotelInfo};
        return (
            <form className='signup'>
                <FormGroup>
                    <ControlLabel className='highlight-label'>Hotel Name</ControlLabel>
                    <FormControl
                        type='text'
                        value={data[HOTEL_NAME]}
                        onChange={this.handleFieldChange.bind(this, HOTEL_NAME)}
                    />
                </FormGroup>

                <Row>
                    <Col lg={6} md={12}>
                        <FormGroup>
                            <ControlLabel className='highlight-label'>How did you find out about Daycation?</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[FIND_OUT]}
                                onChange={this.handleFieldChange.bind(this, FIND_OUT)}/>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <ControlLabel className='highlight-label'>Address</ControlLabel>
                    <br />
                    <ControlLabel>Street Address</ControlLabel>
                    <FormControl
                        type='text'
                        value={data[STREET_ADDRESS]}
                        onChange={this.handleFieldChange.bind(this, STREET_ADDRESS)}
                    />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Address Line2</ControlLabel>
                    <FormControl
                        type='text'
                        value={data[ADDRESS_LINE2]}
                        onChange={this.handleFieldChange.bind(this, ADDRESS_LINE2)}
                    />
                </FormGroup>

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>City</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[CITY]}
                                onChange={this.handleFieldChange.bind(this, CITY)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>State / Province / Region</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[STATE]}
                                onChange={this.handleFieldChange.bind(this, STATE)}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>ZIP / Postal Code</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[ZIP_CODE]}
                                onChange={this.handleFieldChange.bind(this, ZIP_CODE)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>Country</ControlLabel>
                            <FormControl
                                componentClass='select'
                                value={data[COUNTRY]}
                                onChange={this.handleFieldChange.bind(this, COUNTRY)}
                            >
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
                            <FormControl
                                type='text'
                                value={data[ADMIN_FIRST_NAME]}
                                onChange={this.handleFieldChange.bind(this, ADMIN_FIRST_NAME)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ControlLabel>Last</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[ADMIN_LAST_NAME]}
                                onChange={this.handleFieldChange.bind(this, ADMIN_LAST_NAME)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[ADMIN_TITLE]}
                                onChange={this.handleFieldChange.bind(this, ADMIN_TITLE)}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt20'>
                            <ControlLabel className='highlight-label'>Email</ControlLabel>
                            <FormControl
                                type='email'
                                value={data[EMAIL]}
                                onChange={this.handleFieldChange.bind(this, EMAIL)}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <div className='text-center mt20'>
                    <Button bsStyle='link' className='mr20' onClick={this.handleNextClick.bind(this)}>Next</Button>
                    <Button bsStyle='primary' onClick={this.handleSaveClick.bind(this)}>Save</Button>
                </div>
            </form>
        );
    }
}

HotelInfo.PropTypes = {
    hotelInfo: PropTypes.object.required,
    saveHotelInfo: PropTypes.func.required
};

HotelInfo.defaultProps = {
    hotelInfo: {},
    saveHotelInfo: () => {}
}

export default HotelInfo;
