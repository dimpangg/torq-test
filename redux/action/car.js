import axios from 'axios';

export const addCar = (form, navigation) => () => {
  axios
    .post('https://test-nest-project.herokuapp.com/car/cars', form, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log('res post', res);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => console.log('err', err));
};
