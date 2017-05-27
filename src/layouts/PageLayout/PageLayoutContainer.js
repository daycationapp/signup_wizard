import { connect } from 'react-redux';
import PageLayout from './PageLayout';

const mapStateToProps = (state) => {
    return {
        agreement: state.agreement || {},
        hotelInfo: state.hotelInfo || {},
        dayPasses: state.dayPasses || {},
        cabanas: state.cabanas || {}
    };
};

export default connect(mapStateToProps)(PageLayout);
