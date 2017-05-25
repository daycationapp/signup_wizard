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
        agreement: state.agreement || {}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Agreement);
