import axios from 'axios';

export const getCar = () => dispatch => {
  axios
    .get('https://test-nest-project.herokuapp.com/car')
    .then(res => {
      console.log('res', res);
      dispatch({
        type: 'SET_DATA',
        value: res.data.cars,
      });
    })
    .catch(err => {
      console.log(err);
    });
};
