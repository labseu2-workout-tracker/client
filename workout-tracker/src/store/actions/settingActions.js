import axios from "axios";

export const FETCH_SETTINGS = "FETCH_SETTINGS";
export const UPDATE_SETTINGS = "UPDATE_SETTINGS";

const settings = `${process.env.REACT_APP_BASE_URL}/settings`;
// adress get's changed later

export const fetchSettings = () => dispatch => {
  // type LOADING needs to be added (also for the redux state)
  const userId = localStorage.getItem('userId');

  return axios
  .get(`${settings}/${userId}`)
  .then(res => {
      dispatch({ type: FETCH_SETTINGS, settings: res.data });
    })
    .catch(err => {
      // type ERROR needs to be added (also for the redux state)
    });
  };
  
  export const updateSettings = updatedSettings => {
    const userId = localStorage.getItem('userId');
  debugger
  return axios
    .put(`${settings}/${userId}`, updatedSettings)
    .then(res => {
debugger
      return axios.get(settings)
      .then(res => {
        return { type: UPDATE_SETTINGS, updatedSettings: res.data };
      });
    })
    .catch(err => {
      // type ERROR needs to be added (also for the redux state)
    debugger
    });
};
