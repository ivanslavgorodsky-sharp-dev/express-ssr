import { receiveApps } from '../redux/actions';

export default function fetchUsers() {
  return dispatch => {

    return fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(json => dispatch(receiveApps(json.data)))
  }
}
