import React, { PropTypes } from 'react';
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
        debugger;
        const value = event.target.value;
        this.setState({
            [fieldName]: value
        });
    }

    render() {
        const data = {...this.props.hotelInfo}
        return (
            <form className='signup'>
                <FormGroup>
                    <ControlLabel className='highlight-label'>Hotel Name</ControlLabel>
                    <FormControl
                        type='text'
                        value={data[HOTEL_NAME]}
                        onBlur={this.handleFieldChange.bind(this, HOTEL_NAME)}
                    />
                </FormGroup>

                <Row>
                    <Col lg={6} md={12}>
                        <FormGroup>
                            <ControlLabel className='highlight-label'>How did you find out about Daycation?</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[FIND_OUT]}
                                onBlur={this.handleFieldChange.bind(this, FIND_OUT)}/>
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
                        onBlur={this.handleFieldChange.bind(this, STREET_ADDRESS)}
                    />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Address Line2</ControlLabel>
                    <FormControl
                        type='text'
                        value={data[ADDRESS_LINE2]}
                        onBlur={this.handleFieldChange.bind(this, ADDRESS_LINE2)}
                    />
                </FormGroup>

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>City</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[CITY]}
                                onBlur={this.handleFieldChange.bind(this, CITY)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>State / Province / Region</ControlLabel>
                            <FormControl
                                type='text'
                                value={data[STATE]}
                                onBlur={this.handleFieldChange.bind(this, STATE)}
                            />
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

HotelInfo.PropTypes = {
    hotelInfo: PropTypes.object.required
};

HotelInfo.defaultProps = {
    hotelInfo: {}
}

export default HotelInfo;
