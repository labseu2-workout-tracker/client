import axios from 'axios';

export const FETCH_SETTINGS = 'FETCH_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

const settings = `${process.env.REACT_APP_BASE_URL}/settings`;
// adress get's changed later