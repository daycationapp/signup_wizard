import { connect } from 'react-redux';
import DayPasses from '../components/DayPasses';
import { saveDayPasses } from '../modules/dayPasses';

const mapDispatchToProps = (dispatch) => {
    return {
        saveDayPasses: (dayPasses) => {
            dispatch(saveDayPasses(dayPasses));
        }
    };
};

const mapStateToProps = (state) => {
    return {
        dayPasses: state.dayPasses
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayPasses);
