import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import FontAwesomeIcon from '../../components/FontAwesomeIcon';
import './PageLayout.scss';

class PageLayout extends React.Component {
    constructor(...args) {
        super(...args);

        this.tok = this.props.location.query.tok;
        this.state = {
            showChildren: false,
            loading: true
        }
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidMount(){
        this.validate(this.tok);
    }

    validate(token){
        fetch("https://falconheavy.daycationapp.com/api/validate_agreement_token?token=" + token)
            .then((function(response){
                if(response.ok){
                    return response.json()
                } 
            }))
            .then(function(j){
                if(j.status == "success"){
                    this.setState({loading: false, showChildren: true});
                } else {
                    this.setState({loading: false});
                }
            }.bind(this))
            .catch((err)=>{
                console.error(err)
            })
    }

    render() {
        if(this.state.showChildren){
            return (
                <div className='container text-center'>
                    <div className='nav-back'>
                        <a href="http://www.google.com">
                            Go To Management Software Demo
                            <FontAwesomeIcon icon='long-arrow-right' />
                        </a>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='main'>
                                <h3 className='main-title'>Daycation Program Setup</h3>
                                <div className='step-links'>
                                    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>1<br />Hotel Info</IndexLink>
                                    <Link to='/day-passes' activeClassName='page-layout__nav-item--active'>2<br />Day Passes</Link>
                                    <Link to='/cabanas' activeClassName='page-layout__nav-item--active'>3<br />Cabanas</Link>
                                    <Link to='/agreement' activeClassName='page-layout__nav-item--active'>4<br />Agreement</Link>
                                </div>

                                <div className='page-layout__viewport'>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if(this.state.loading){
            return(
                <div className='loader'>
                    Loading
                </div>
            )
        } else {
            return(
                <div className='DaycationView'>
                    <img className='DaycationLogo' src='/imgs/DaycationSymbol.RGB.Orange.png' alt='DaycationLogo_Orange'/>
                    <div className='DaycationAlert'>
                        <h3 className='DaycationAlert__Header'>Access Forbidden</h3>
                        <div className='DaycationAlert__EmailLink'>
                            Send us an email at <a className='DaycationLink' href='mailto:matt@daycationapp.com'>matt@daycationapp.com</a>&nbsp; 
                            if you'd like to partner with Daycation.
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

PageLayout.propTypes = {
    children: PropTypes.node,
};

export default PageLayout;
