import { RECEIVE_APPS } from './actions';

function reducer( state = {isFetching: false, users: []}, action) {
  switch (action.type) {

    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.apps
      });

    default:
      return state
  }
}

export default reducer;
