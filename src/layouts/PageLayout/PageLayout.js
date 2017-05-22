import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import FontAwesomeIcon from '../../components/FontAwesomeIcon';
import './PageLayout.scss';

class PageLayout extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div className='container text-center'>
                <div className='nav-back'>
                    <Link to='/'>
                        Go To Management Software Demo
                        <FontAwesomeIcon icon='long-arrow-right' />
                    </Link>
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
    }
}

PageLayout.propTypes = {
    children: PropTypes.node,
};

export default PageLayout;
