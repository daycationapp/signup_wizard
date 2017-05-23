import React, { PropTypes } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import './DayPasses.scss';

class DayPasses extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {};
    }

    render() {
        return (
            <form className='signup'>
                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup>
                            <ControlLabel className='highlight-label'>Number of pool chairs on property</ControlLabel>
                            <FormControl type='text' value={this.state.chairs}/>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Pool amenities included in the day pass:</ControlLabel>
                    <br />
                    <ControlLabel>
                        Please list all pools and hot tubs to be included in day pass along with all pool features (waterslides, lazy river, etc).
                        Exclude separate spa pools.
                    </ControlLabel>
                    <FormControl componentClass="textarea" rows={5} value={this.state.pools}/>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Other features, amenities, and activities included in day pass:</ControlLabel>
                    <br />
                    <ControlLabel>
                        Please list other amenities and activities that are currenly complimentary to night guests to be included in day pass (fitness center, playground, game room, ping pong table, etc).
                    </ControlLabel>
                    <FormControl componentClass="textarea" rows={5} value={this.state.activities}/>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Is there poolside food and drink service?</ControlLabel>
                    <br />
                    <ControlLabel>
                        A bar or restaurant that serves drinks/food poolside, not call-and-order delivery.
                    </ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Please select the parking option provided at the hotel.</ControlLabel>
                    <Checkbox>Valet</Checkbox>
                    <Checkbox>Complimentary Self-Parking</Checkbox>
                    <Checkbox>Self-Parking for a fee</Checkbox>
                    <Checkbox>Street Parking</Checkbox>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Is fee Wifi offered by hotel at the pool area?</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>What do you guests currenly receive when they checked in?</ControlLabel>
                    <br />
                    <ControlLabel>Select all that apply.</ControlLabel>
                    <Checkbox>Hotel key to access pool and amenities</Checkbox>
                    <Checkbox>Wristbands</Checkbox>
                    <Checkbox>Neither</Checkbox>
                    <Checkbox>Other</Checkbox>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Will you offer a 15% discount on restaurants, retail shops and spa services?</ControlLabel>
                    <br />
                    <ControlLabel>Offering discounts not only encourages spending by day guests but helps track revenue from day guests at the hotel.</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                            <ControlLabel className='highlight-label'>Will you offer any complimentary food + beverage or other items?</ControlLabel>
                            <FormControl type='text' value={this.state.otherItems}/>
                        </FormGroup>
                    </Col>
                </Row>

                <h4 className='subtitle'>Pricing</h4>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Weekday Peak Season price</ControlLabel>
                    <br />
                    <ControlLabel>What price will you offer for day passes on a weekday during peak season?</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Weekend Peak Season price</ControlLabel>
                    <br />
                    <ControlLabel>What price will you offer for day passes on weekends during peak season?</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Weekday Off-Peak Season price</ControlLabel>
                    <br />
                    <ControlLabel>What price will you offer for day passes on a weekday during off-peak season?</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Weekend Peak Season price</ControlLabel>
                    <br />
                    <ControlLabel>What price will you offer for day passes on weekends during off-peak season?</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>What days should have the weekend price?</ControlLabel>
                    <Checkbox>Friday</Checkbox>
                    <Checkbox>Saturday</Checkbox>
                    <Checkbox>Sunday</Checkbox>
                </FormGroup>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                            <ControlLabel className='highlight-label'>What months are peak season?</ControlLabel>
                            <FormControl type='text' value={this.state.peakSeasonMonths}/>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup className='mt30'>
                    <ControlLabel className='highlight-label'>Children</ControlLabel>
                    <FormControl componentClass='select' className='fixed-control'>
                        <option value='select'>select</option>
                    </FormControl>
                </FormGroup>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                            <ControlLabel className='highlight-label'>Children ages</ControlLabel>
                            <br />
                            <ControlLabel>What age children should have the children price?</ControlLabel>
                            <FormControl type='text' value={this.state.childrenAges}/>
                        </FormGroup>
                    </Col>
                </Row>

                <h4 className='subtitle'>Availability / Maximums</h4>

                <FormGroup className='mt30'>
                    <ControlLabel>
                        Based on the general trends at the hotel, pre-populate your availability calendar with the maximum amount of the day passes
                        to be offered to day guests for weekdays and weekends and peak and off-peak months.
                        You will be able to change the number of individuals days as well as block out days in the calendar 
                        but this creates the general framework as a starting point.
                    </ControlLabel>
                    <FormControl 
                        componentClass='textarea' 
                        rows={5} 
                        value={this.state.generalAvailability}
                        placeholder='(i.e., Weekdays October-April: 50 passes; Weekends October-April: 40 passes; Weekdays May-Sept: 30 passes; Weekends Map-Sept: 20 passes; Mondays year-round: 50 passes)'
                    />
                </FormGroup>

                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup className='mt30'>
                            <ControlLabel className='highlight-label'>Pool hours</ControlLabel>
                            <FormControl type='text' value={this.state.poolHours} placeholder='i.e., 7am-9am'/>
                        </FormGroup>
                    </Col>
                </Row>
            </form>
        );
    }
}

DayPasses.propTypes = {
};

export default DayPasses;
