import { connect } from 'react-redux';
import HotelInfo from '../components/HotelInfo';
import { saveHotelInfo } from '../modules/hotelInfo';

const mapDispatchToProps = (dispatch) => {
    return {
        saveHotelInfo: (hotelInfo) => {
            dispatch(saveHotelInfo(hotelInfo));
        }
    };
};

const mapStateToProps = (state) => {
    return {
        hotelInfo: state.hotelInfo
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelInfo);
