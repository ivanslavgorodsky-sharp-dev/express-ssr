import { connect } from "react-redux";
import makeApiCall from "./services"; //component to make api call
import App from "./app";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(makeApiCall())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
