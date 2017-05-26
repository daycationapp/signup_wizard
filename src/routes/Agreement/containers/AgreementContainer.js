import { connect } from 'react-redux';
import Agreement from '../components/Agreement';
import { saveAgreement } from '../modules/agreement';

const mapDispatchToProps = (dispatch) => {
    return {
        saveAgreement: (agreement) => {
            dispatch(saveAgreement(agreement));
        }
    };
};

const mapStateToProps = (state) => {
    return {
        agreement: state.agreement || {},
        hotelInfo: state.hotelInfo || {},
        dayPasses: state.dayPasses || {},
        cabanas: state.cabanas || {}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Agreement);
