import { connect } from 'react-redux';
import HotelInfo from '../components/HotelInfo';

const mapDispatchToProps = (dispatch) => {
    return {};
};

const mapStateToProps = (state) => {
    return {
        hotelInfo: state.hotelInfo
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelInfo);
