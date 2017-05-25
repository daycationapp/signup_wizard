import { connect } from 'react-redux';
import Cabanas from '../components/Cabanas';
import { saveCabanas } from '../modules/cabanas';

const mapDispatchToProps = (dispatch) => {
    return {
        saveCabanas: (cabanas) => {
            dispatch(saveCabanas(cabanas));
        }
    };
};

const mapStateToProps = (state) => {
    return {
        cabanas: state.cabanas
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cabanas);
