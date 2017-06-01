import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button, Alert } from 'react-bootstrap';
import merge from 'lodash.merge';
import * as API from '../../../middleware/api';
import './Agreement.scss';

const MAXIMUM_AVAILABILITY = 'maximumAvailability';
const MINIMUM_PASSES = 'minimumPasses';
const INFLUENCERS = 'influencers';
const CHECK_IN_PLACES = 'checkInPlaces';
const CHECK_IN_OTHER_PLACE = 'checkInOtherPlace';
const CHECK_IN_COMMENT = 'checkInComment';
const PAY_MONTHLY = 'payMonthly';
const PARTICIPATE = 'participate';
const DAYCATION_BY = 'daycationBy';
const CONTRACTOR_BY = 'contractorBy';
const CONTRACTOR_NAME = 'contractorName';
const CONTRACTOR_TITLE = 'contractorTitle';

const places = [
    'Front desk',
    'Spa',
    'Concierge',
    'Bell desk',
    'Recreation Desk',
    'Other'
];

class Agreement extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            agreement: this.props.agreement
        };

        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    }

    handleFieldChange(fieldName, event) {
        const value = event.target.value;
        let agreement = {...this.state.agreement};
        agreement[fieldName] = value;
        this.setState({ agreement: agreement });
    }

    handleCheckboxClick(fieldName, value) {
        let selectedValues = this.state.agreement[fieldName] || [];
        let itemPos = selectedValues.indexOf(value);
        if (itemPos > -1) {
            selectedValues.splice(itemPos, 1);
        } else {
            selectedValues.push(value);
        }

        this.setState({
            agreement: merge({}, {...this.state.agreement}, {[fieldName]: selectedValues})
        });
    }

    handlePreviousClick() {
        let agreement = {...this.state.agreement};
        this.props.saveAgreement(agreement);
        browserHistory.push('/cabanas');
    }

    handleSaveClick() {
        let agreement = {...this.state.agreement};

        this.setState({ isFetching: true });
        API.post(agreement).then(response => {
            this.props.saveAgreement(agreement);
            this.setState({
                isFetching: false,
                alert: {type: 'success', message: 'The data has been saved successfully.'}
            });
        }).catch(error => {
            this.setState({
                isFetching: false,
                alert: {type: 'error', message: 'Failed to save. Please try again later'}
            });
        });
    }

    handleAlertDismiss() {
        this.setState({ alert: null });
    }

    renderAlert() {
        if (this.state.alert) {
            return (
                <Alert bsStyle={this.state.alert.type} onDismiss={this.handleAlertDismiss.bind(this)}>
                    <p>{this.state.alert.message}</p>
                </Alert>
            );
        }
    }

    handleSubmitClick() {
        let agreement = {...this.state.agreement};
        let all = merge(
            {},
            {...agreement},
            {...this.props.hotelInfo},
            {...this.props.dayPasses},
            {...this.props.cabanas}
        );

        this.setState({ isFetching: true });
        API.post(all).then(response => {
            this.props.saveAgreement(agreement);
            this.setState({
                isFetching: false,
                alert: {type: 'success', message: 'The data has been saved successfully.'}
            });
        }).catch(error => {
            this.setState({
                isFetching: false,
                alert: {type: 'error', message: 'Failed to save. Please try again later'}
            });
        });
    }

    renderCheckboxes(items, fieldName) {
        return items.map((item) => {
            return (
                <Checkbox
                    key={item}
                    checked={this.state.agreement[fieldName] && this.state.agreement[fieldName].indexOf(item) > -1}
                    onChange={(e) => this.handleCheckboxClick(fieldName, item)}
                >
                    {item}
                </Checkbox>
            );
        })
    }

    render() {
        const data = {...this.state.agreement};
        return (
            <div>
                {this.renderAlert()}
                <form className='signup'>
                    <FormGroup>
                        <ControlLabel className='highlight-label'>Day guests can book up to 10 weeks in advance. Is this acceptable?</ControlLabel>
                        <br />
                        <ControlLabel>
                            Setting a maximum amount of passes and spots available for upcoming months based on general trends at the hotel allows for guests to book weeks in advance.
                            You will be able to increase, decrease or block out the availability for days each week but you will have to honor the guests that already booked.
                        </ControlLabel>
                        <FormControl
                            componentClass='select'
                            className='fixed-control'
                            value={data[MAXIMUM_AVAILABILITY]}
                            onChange={this.handleFieldChange.bind(this, MAXIMUM_AVAILABILITY)}
                        >
                            <option value='select'>select</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Do you agree to offer a minimum of 45 day passes per month on Daycation?</ControlLabel>
                        <FormControl
                            componentClass='select'
                            className='fixed-control'
                            value={data[MINIMUM_PASSES]}
                            onChange={this.handleFieldChange.bind(this, MINIMUM_PASSES)}
                        >
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
                        <FormControl
                            componentClass='select'
                            className='fixed-control'
                            value={data[INFLUENCERS]}
                            onChange={this.handleFieldChange.bind(this, INFLUENCERS)}
                        >
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
                        {this.renderCheckboxes(places, CHECK_IN_PLACES)}
                        <Row>
                            <Col md={6} sm={12}>
                                <FormControl
                                    type='text'
                                    placeholder='Others'
                                    value={data[CHECK_IN_OTHER_PLACE]}
                                    onChange={this.handleFieldChange.bind(this, CHECK_IN_OTHER_PLACE)}
                                />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Row>
                        <Col md={6} sm={12}>
                            <FormGroup className='mt30'>
                                <ControlLabel className='highlight-label'>Additional check-in comments</ControlLabel>
                                <FormControl
                                    type='text'
                                    value={data[CHECK_IN_COMMENT]}
                                    onChange={this.handleFieldChange.bind(this, CHECK_IN_COMMENT)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Daycation will pay Hotel total balances due monthly. Is this acceptable?</ControlLabel>
                        <FormControl
                            componentClass='select'
                            className='fixed-control'
                            value={data[PAY_MONTHLY]}
                            onChange={this.handleFieldChange.bind(this, PAY_MONTHLY)}
                        >
                            <option value='select'>select</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>
                            Do you agree to participate in the Daycation Program for one year in order to fully benefit from the program 
                            through the difference seasons and from Daycation growth?
                        </ControlLabel>
                        <FormControl
                            componentClass='select'
                            className='fixed-control'
                            value={data[PARTICIPATE]}
                            onChange={this.handleFieldChange.bind(this, PARTICIPATE)}
                        >
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
                                    <FormControl
                                        type="text"
                                        value={data[DAYCATION_BY]}
                                        onChange={this.handleFieldChange.bind(this, DAYCATION_BY)}
                                    />
                                </FormGroup>
                            </div>
                            <p className='sign-by'>Matthew Boney<br />Chief Executive Officer</p>
                        </Col>
                        <Col md={6}>
                            <p className='contractor-name'>Hotel Name</p>
                            <div className='form-inline sign-form'>
                                <FormGroup>
                                    <ControlLabel>By: </ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={data[CONTRACTOR_BY]}
                                        onChange={this.handleFieldChange.bind(this, CONTRACTOR_BY)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Name: </ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={data[CONTRACTOR_NAME]}
                                        onChange={this.handleFieldChange.bind(this, CONTRACTOR_NAME)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Title: </ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={data[CONTRACTOR_TITLE]}
                                        onChange={this.handleFieldChange.bind(this, CONTRACTOR_TITLE)}
                                    />
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>

                    <h4 className='end-title'>"Daycation" by Pineapple Global, Inc. Agreement</h4>

                    <div className='text-center mt30'>
                        <Button bsStyle='link' className='mr20' disabled={this.state.isFetching} onClick={this.handlePreviousClick.bind(this)}>Previous</Button>
                        <Button bsStyle='danger' className='mr20' disabled={this.state.isFetching} onClick={this.handleSubmitClick.bind(this)}>Submit</Button>
                        <Button bsStyle='primary' disabled={this.state.isFetching} onClick={this.handleSaveClick.bind(this)}>Save</Button>
                    </div>
                </form>
            </div>
        );
    }
}

Agreement.propTypes = {
    agreement: PropTypes.object.isRequired,
    cabanas: PropTypes.object,
    hotelInfo: PropTypes.object,
    dayPasses: PropTypes.object,
    saveAgreement: PropTypes.func.isRequired
};

Agreement.defaultProps = {
    agreement: {},
    cabanas: {},
    hotelInfo: {},
    dayPasses: {},
    saveAgreement: () => {}
}

export default Agreement;
