import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button, Alert } from 'react-bootstrap';
import merge from 'lodash.merge';
import * as API from '../../../middleware/api';
import './DayPasses.scss';

const POOL_CHAIRS = 'poolChairs';
const POOL_AMENITIES = 'poolAmenities';
const OTHER_AMENITIES = 'otherAmenities';
const POOLSIDE_SERVICE = 'poolsideService';
const PARKING = 'parking';
const FREE_WIFI = 'freeWifi';
const GUEST_CHECKED_IN = 'guestCheckedIn';
const DISCOUNT_SERVICE = 'discountService';
const COMPLIMENTARY_SERVICE = 'complimentaryService';
const WEEKDAY_PEAK_PRICE = 'weekdayPeakPrice';
const WEEKEND_PEAK_PRICE = 'weekendPeakPrice';
const WEEKDAY_OFF_PEAK_PRICE = 'weekdayOffPeakPrice';
const WEEKEND_OFF_PEAK_PRICE = 'weekendOffPeakPrice';
const DAYS_HAVE_WEEKEND_PRICE = 'daysHaveWeekendPrice';
const PEAK_SEASON_MONTHS = 'peakSeasonMonths';
const CHILDREN = 'children';
const CHILDREN_PRICE = 'childrenPrice';
const CHILDREN_AGE = 'childrenAge';
const AVAILABILITY = 'availability';
const POOL_HOURS = 'poolHours';
const PRIVATE_EVENTS = 'privateEvents';
const BOOKING_EMAIL = 'bookingEmail';
const VALET_FEE = 'valetPrice';
const SELF_PARKING_FEE = 'selfParkingFee';
const DISCOUNTED_VALET = 'discountedValetFee';

const PARKING_VALUES = [
    'Valet',
    'Complimentary Self-Parking',
    'Self-Parking for a fee',
    'Street Parking',
    'Discounted Valet',
];

const GUEST_CHECKED_IN_VALUES = [
    'Hotel key to access pool and amenities',
    'Wristbands',
    'Neither',
    'Other'
];

const DAYS_HAVE_WEEKEND_PRICE_VALUES = [
    'Friday',
    'Saturday',
    'Sunday'
]

class DayPasses extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            dayPasses: this.props.dayPasses,
            alert: null,
            isFetching: false
        };

        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    }

    handleFieldChange(fieldName, event) {
        const value = event.target.value;
        let dayPasses = {...this.state.dayPasses};
        dayPasses[fieldName] = value;
        this.setState({ dayPasses: dayPasses });
    }

    handleCheckboxClick(fieldName, value) {
        let selectedValues = this.state.dayPasses[fieldName] || [];
        let itemPos = selectedValues.indexOf(value);
        if (itemPos > -1) {
            selectedValues.splice(itemPos, 1);
        } else {
            selectedValues.push(value);
        }

        this.setState({
            dayPasses: merge({}, {...this.state.dayPasses}, {[fieldName]: selectedValues})
        });
    }

    handleNextClick() {
        let dayPasses = {...this.state.dayPasses};
        this.props.saveDayPasses(dayPasses);
        browserHistory.push('/agreement/cabanas');
    }

    handlePreviousClick() {
        let dayPasses = {...this.state.dayPasses};
        this.props.saveDayPasses(dayPasses);
        browserHistory.push('/agreement/');
    }

    handleSaveClick() {
        let dayPasses = {...this.state.dayPasses};
        this.setState({ isFetching: true });
        API.post(dayPasses).then(response => response.json()).then(response => {
            this.props.saveDayPasses(dayPasses);
            if(typeof response == "string") response = JSON.parse(response);
            if(response.status == "success"){
                this.setState({
                    isFetching: false,
                    alert: {type: 'success', message: 'The data has been saved successfully.'}
                });
            } else {
                this.setState({
                    isFetching: false,
                    alert: {type: 'danger', message: response.message }
                });
            }
        }).catch(error => {
            this.setState({
                isFetching: false,
                alert: {type: 'danger', message: 'Failed to save. Please try again later'}
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

    renderCheckboxes(items, fieldName) {
        return items.map((item) => {
            return (
                <Checkbox
                    key={item}
                    checked={this.state.dayPasses[fieldName] && this.state.dayPasses[fieldName].indexOf(item) > -1}
                    onChange={(e) => this.handleCheckboxClick(fieldName, item)}
                >
                    {item}
                </Checkbox>
            );
        })
    }

    render() {
        const data = {...this.state.dayPasses};
        return (
            <div>
                {this.renderAlert()}
                <form className='signup'>
                    {/* <Row>
                        <Col md={6} sm={12}>
                            <FormGroup>
                                <ControlLabel className='highlight-label'>Number of pool chairs on property</ControlLabel>
                                <FormControl
                                    type='text'
                                    value={data[POOL_CHAIRS]}
                                    onChange={this.handleFieldChange.bind(this, POOL_CHAIRS)}
                                />
                            </FormGroup>
                        </Col>
                    </Row> */}

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Pool amenities included in the day pass:</ControlLabel>
                        <br />
                        <ControlLabel>
                            Please list all pools and hot tubs to be included in day pass along with all pool features.
                        </ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            rows={5}
                            value={data[POOL_AMENITIES]}
                            onChange={this.handleFieldChange.bind(this, POOL_AMENITIES)}
                        />
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Other features, amenities, and activities included in day pass:</ControlLabel>
                        <br />
                        <ControlLabel>
                            Please list other amenities and activities that are currenly complimentary to night guests to be included in day pass:
                        </ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            rows={5}
                            value={data[OTHER_AMENITIES]}
                            onChange={this.handleFieldChange.bind(this, OTHER_AMENITIES)}
                        />
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Is there poolside food and drink service?</ControlLabel>
                        <br />
                        <ControlLabel>
                            A bar or restaurant that serves drinks/food poolside, not call-and-order delivery.
                        </ControlLabel>
                        <FormControl
                            componentClass='select'
                            className='fixed-control'
                            value={data[POOLSIDE_SERVICE]}
                            onChange={this.handleFieldChange.bind(this, POOLSIDE_SERVICE)}
                        >
                            <option value='select'>select</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Please select the parking option provided at the hotel.</ControlLabel>
                        <FormGroup className='flex flexrow-nowrap'>
                            <Checkbox 
                                checked={this.state.dayPasses[PARKING] && this.state.dayPasses[PARKING].indexOf(PARKING_VALUES[0]) > -1}
                                onChange={(e) => this.handleCheckboxClick(PARKING, PARKING_VALUES[0])}
                            >{PARKING_VALUES[0]}</Checkbox>
                            <FormControl 
                                className='extra-info' 
                                componentClass='input' 
                                placeholder='$ ..' 
                                onChange={this.handleFieldChange.bind(this, VALET_FEE)}
                            ></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <Checkbox 
                                checked={this.state.dayPasses[PARKING] && this.state.dayPasses[PARKING].indexOf(PARKING_VALUES[1]) > -1}
                                onChange={(e) => this.handleCheckboxClick(PARKING, PARKING_VALUES[1])}
                            >{PARKING_VALUES[1]}</Checkbox>
                        </FormGroup>
                        <FormGroup className='flex flexrow-nowrap'>
                            <Checkbox 
                                checked={this.state.dayPasses[PARKING] && this.state.dayPasses[PARKING].indexOf(PARKING_VALUES[2]) > -1}
                                onChange={(e) => this.handleCheckboxClick(PARKING, PARKING_VALUES[2])}
                            >{PARKING_VALUES[2]}</Checkbox>
                            <FormControl className='extra-info' componentClass='input' placeholder='$ ..' onChange={this.handleFieldChange.bind(this, SELF_PARKING_FEE)} />
                        </FormGroup>
                        <FormGroup>
                            <Checkbox 
                                checked={this.state.dayPasses[PARKING] && this.state.dayPasses[PARKING].indexOf(PARKING_VALUES[3]) > -1}
                                onChange={(e) => this.handleCheckboxClick(PARKING, PARKING_VALUES[3])}
                            >{PARKING_VALUES[3]}</Checkbox>
                        </FormGroup>
                        <FormGroup className='flex flexrow-nowrap'>
                            <Checkbox 
                                checked={this.state.dayPasses[PARKING] && this.state.dayPasses[PARKING].indexOf(PARKING_VALUES[4]) > -1}
                                onChange={(e) => this.handleCheckboxClick(PARKING, PARKING_VALUES[4])}
                            >{PARKING_VALUES[4]}</Checkbox>
                            <FormControl className='extra-info' componentClass='input' placeholder='$ ..' onChange={this.handleFieldChange.bind(this, DISCOUNTED_VALET)} />
                        </FormGroup>
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Is free Wifi offered by hotel at the pool area?</ControlLabel>
                        <FormControl componentClass='select' className='fixed-control'>
                            <option value='select'>select</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </FormControl>
                    </FormGroup>

                    {/* <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>What do you guests currenly receive when they checked in?</ControlLabel>
                        <br />
                        <ControlLabel>Select all that apply.</ControlLabel>
                        {this.renderCheckboxes(GUEST_CHECKED_IN_VALUES, GUEST_CHECKED_IN)}
                    </FormGroup> */}

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>What discount (%) will you offer Daycation guests on restaurants, retail shops and spa services?</ControlLabel>
                        <br />
                        <ControlLabel>Offering discounts not only encourages spending by day guests but helps track revenue from day guests at the hotel.</ControlLabel>
                        <FormControl
                            componentClass='input'
                            className='fixed-control'
                            value={data[DISCOUNT_SERVICE]}
                            onChange={this.handleFieldChange.bind(this, DISCOUNT_SERVICE)}
                        >
                        </FormControl>
                    </FormGroup>

                    <Row>
                        <Col md={6} sm={12}>
                            <FormGroup className='mt30'>
                                <ControlLabel className='highlight-label'>Will you offer any complimentary food + beverage or other items?</ControlLabel>
                                <FormControl
                                    type='text'
                                    value={data[COMPLIMENTARY_SERVICE]}
                                    onChange={this.handleFieldChange.bind(this, COMPLIMENTARY_SERVICE)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Pricing</ControlLabel>
                        <br />
                        <ControlLabel>What price will you offer for day passes?</ControlLabel>
                        <FormControl
                            componentClass='input'
                            className='fixed-control'
                            value={data[WEEKEND_PEAK_PRICE]}
                            onChange={this.handleFieldChange.bind(this, WEEKEND_PEAK_PRICE)}
                        >
                        </FormControl>
                    </FormGroup>

                    {/* <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Weekday Peak Season price</ControlLabel>
                        <br />
                        <ControlLabel>What price will you offer for day passes on a weekday during peak season?</ControlLabel>
                        <FormControl
                            componentClass='input'
                            className='fixed-control'
                            value={data[WEEKDAY_PEAK_PRICE]}
                            onChange={this.handleFieldChange.bind(this, WEEKDAY_PEAK_PRICE)}
                        >
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Weekend Peak Season price</ControlLabel>
                        <br />
                        <ControlLabel>What price will you offer for day passes on weekends during peak season?</ControlLabel>
                        <FormControl
                            componentClass='input'
                            className='fixed-control'
                            value={data[WEEKEND_PEAK_PRICE]}
                            onChange={this.handleFieldChange.bind(this, WEEKEND_PEAK_PRICE)}
                        >
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Weekday Off-Peak Season price</ControlLabel>
                        <br />
                        <ControlLabel>What price will you offer for day passes on a weekday during off-peak season?</ControlLabel>
                        <FormControl
                            componentClass='input'
                            className='fixed-control'
                            value={data[WEEKDAY_OFF_PEAK_PRICE]}
                            onChange={this.handleFieldChange.bind(this, WEEKDAY_OFF_PEAK_PRICE)}
                        >
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Weekend Off-Peak Season price</ControlLabel>
                        <br />
                        <ControlLabel>What price will you offer for day passes on weekends during off-peak season?</ControlLabel>
                        <FormControl
                            componentClass='input'
                            className='fixed-control'
                            value={data[WEEKEND_OFF_PEAK_PRICE]}
                            onChange={this.handleFieldChange.bind(this, WEEKEND_OFF_PEAK_PRICE)}
                        >
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>What days should have the weekend price?</ControlLabel>
                        {this.renderCheckboxes(DAYS_HAVE_WEEKEND_PRICE_VALUES, DAYS_HAVE_WEEKEND_PRICE)}
                    </FormGroup> */}

                    {/* <Row>
                        <Col md={6} sm={12}>
                            <FormGroup className='mt30'>
                                <ControlLabel className='highlight-label'>What months are peak season?</ControlLabel>
                                <FormControl
                                    type='text'
                                    value={data[PEAK_SEASON_MONTHS]}
                                    onChange={this.handleFieldChange.bind(this, WEEKEND_OFF_PEAK_PRICE)}
                                />
                            </FormGroup>
                        </Col>
                    </Row> */}

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Children</ControlLabel>
                        <br />
                        <ControlLabel>Are children allowed?</ControlLabel>
                        <FormControl
                            componentClass='select'
                            className='fixed-control'
                            value={data[CHILDREN]}
                            onChange={this.handleFieldChange.bind(this, CHILDREN)}
                        >
                            <option value='select'>select</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </FormControl>
                    </FormGroup>

                    <Row>
                        <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                                <ControlLabel className='highlight-label'>Children price</ControlLabel>
                                <br />
                                <ControlLabel>How much should children pay for a day pass?</ControlLabel>
                                <FormControl
                                    type='text'
                                    value={data[CHILDREN_PRICE]}
                                    onChange={this.handleFieldChange.bind(this, CHILDREN_PRICE)}
                                />
                            </FormGroup>
                            <FormGroup className='mt30'>
                                <ControlLabel className='highlight-label'>Children ages</ControlLabel>
                                <br />
                                <ControlLabel>What age children should have the children price?</ControlLabel>
                                <FormControl
                                    type='text'
                                    value={data[CHILDREN_AGE]}
                                    onChange={this.handleFieldChange.bind(this, CHILDREN_AGE)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <h4 className='subtitle'>Availability / Maximums</h4>

                    <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>How many day passes do you want to offer on a daily basis?</ControlLabel>
                        <ControlLabel>
                            You will be able to change the number of individuals days as well as block out days in the calendar 
                            but this creates the general framework as a starting point.
                        </ControlLabel>
                        <FormControl 
                            componentClass='textarea' 
                            rows={5} 
                            value={data[AVAILABILITY]}
                            onChange={this.handleFieldChange.bind(this, AVAILABILITY)}
                        />
                    </FormGroup>

                    <Row>
                        <Col md={6} sm={12}>
                            <FormGroup className='mt30'>
                                <ControlLabel className='highlight-label'>Pool hours</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='i.e., 7am-9am'
                                    value={data[POOL_HOURS]}
                                    onChange={this.handleFieldChange.bind(this, POOL_HOURS)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    {/* <FormGroup className='mt30'>
                        <ControlLabel className='highlight-label'>Does the resort ever hold private events at the pool area?</ControlLabel>
                        <FormControl
                            componentClass='select'
                            className='fixed-control'
                            value={data[PRIVATE_EVENTS]}
                            onChange={this.handleFieldChange.bind(this, PRIVATE_EVENTS)}
                        >
                            <option value='select'>select</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </FormControl>
                    </FormGroup> */}

                    <Row>
                        <Col md={6} sm={12}>
                            <FormGroup className='mt30'>
                                <ControlLabel className='highlight-label'>Email for booking notifications</ControlLabel>
                                <br />
                                <ControlLabel>What email should the automatic notifications for when a day guest books a day pass be sent to?</ControlLabel>
                                <FormControl
                                    type='text'
                                    value={data[BOOKING_EMAIL]}
                                    onChange={this.handleFieldChange.bind(this, BOOKING_EMAIL)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <div className='text-center mt30'>
                        <Button bsStyle='link' className='mr20' disabled={this.state.isFetching} onClick={this.handlePreviousClick.bind(this)}>Previous</Button>
                        <Button bsStyle='link' className='mr20' disabled={this.state.isFetching} onClick={this.handleNextClick.bind(this)}>Next</Button>
                        <Button bsStyle='primary' disabled={this.state.isFetching} onClick={this.handleSaveClick.bind(this)}>Save</Button>
                    </div>
                </form>
            </div>
        );
    }
}

DayPasses.propTypes = {
    dayPasses: PropTypes.object.isRequired,
    saveDayPasses: PropTypes.func.isRequired
};

DayPasses.defaultProps = {
    dayPasses: {},
    saveDayPasses: () => {}
};

export default DayPasses;
