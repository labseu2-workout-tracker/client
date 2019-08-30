import axios from 'axios';

export const FETCH_SETTINGS = 'FETCH_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

const settings = `${process.env.REACT_APP_BASE_URL}/settings`;
// adress get's changed later

export const fetchSettings = () => dispatch => {
  // type LOADING needs to be added (also for the redux state) 
  return axios.get(settings)
    .then(res => {
      dispatch({ type: FETCH_SETTINGS, exercises: res.data });
    })
    .catch(err => {
   // type ERROR needs to be added (also for the redux state)
    });
};