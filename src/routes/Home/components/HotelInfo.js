import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import * as API from '../../../middleware/api';

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
const EMAIL = 'adminEmail';

class HotelInfo extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            hotelInfo: this.props.hotelInfo,
            alert: null,
            isFetching: false
        };
    }

    handleFieldChange(fieldName, event) {
        const value = event.target.value;
        let hotelInfo = {...this.state.hotelInfo};
        hotelInfo[fieldName] = value;
        this.setState({ hotelInfo: hotelInfo });
    }

    handleNextClick() {
        let hotelInfo = {...this.state.hotelInfo};
        this.props.saveHotelInfo(hotelInfo);
        browserHistory.push('/day-passes');
    }

    handleSaveClick() {
        let hotelInfo = {...this.state.hotelInfo};

        this.setState({ isFetching: true });
        API.post(hotelInfo).then(response => response.json())
        .then((data)=> {
            this.props.saveHotelInfo(hotelInfo);
            if(typeof data == "string") data = JSON.parse(data);
            if(data.status == "success"){
                this.setState({
                    isFetching: false,
                    alert: {type: 'success', message: 'The data has been saved successfully.'}
                });
            } else {
                this.setState({
                    isFetching: false,
                    alert: {type: 'danger', message: data.message }
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

    render() {
        const data = {...this.state.hotelInfo};
        return (
            <div>
                {this.renderAlert()}
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
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Åland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">Antigua and Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia, Plurinational State of</option>
                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                    <option value="BA">Bosnia and Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei Darussalam</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">Central African Republic</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CD">Congo, the Democratic Republic of the</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Côte d'Ivoire</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curaçao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">Dominican Republic</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">French Southern Territories</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Heard Island and McDonald Islands</option>
                                    <option value="VA">Holy See (Vatican City State)</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran, Islamic Republic of</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                    <option value="KR">Korea, Republic of</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Lao People's Democratic Republic</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia, Federated States of</option>
                                    <option value="MD">Moldova, Republic of</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PW">Palau</option>
                                    <option value="PS">Palestinian Territory, Occupied</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Réunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russian Federation</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="BL">Saint Barthélemy</option>
                                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                    <option value="KN">Saint Kitts and Nevis</option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="MF">Saint Martin (French part)</option>
                                    <option value="PM">Saint Pierre and Miquelon</option>
                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">Sao Tome and Principe</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SX">Sint Maarten (Dutch part)</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syrian Arab Republic</option>
                                    <option value="TW">Taiwan, Province of China</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania, United Republic of</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad and Tobago</option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">Turks and Caicos Islands</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="UM">United States Minor Outlying Islands</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                                    <option value="VN">Viet Nam</option>
                                    <option value="VG">Virgin Islands, British</option>
                                    <option value="VI">Virgin Islands, U.S.</option>
                                    <option value="WF">Wallis and Futuna</option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
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
                        <Button
                            bsStyle='link'
                            className='mr20'
                            disabled={this.state.isFetching}
                            onClick={this.handleNextClick.bind(this)}
                        >
                            Next
                        </Button>
                        <Button
                            bsStyle='primary'
                            disabled={this.state.isFetching}
                            onClick={this.handleSaveClick.bind(this)}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </div>
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
