import { connect } from 'react-redux';
import Chart from '../components/Chart';
import { updateFastingChart } from '../actions';
import Constants from '../Constants';

const mapStateToProps = state => ({
  data: state.chart.fasting,
  images: Constants.FASTING_CHART_IMAGES,
});

export default connect(
  mapStateToProps,
  { updateFastingChart },
)(Chart);
