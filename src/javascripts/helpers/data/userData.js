import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios.get(`${baseURL}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        // POST OBJECT TO FARMERS
        // {
        //   image:
        //   uid:
        //   displayName:
        //   email:
        //   lastSignInTime:
        // }

        // use axios.post
        // pass it the url ${baseURL}/farmers.json
        // pass it an object that's going to be posted
        axios.post(`${baseURL}/farmers.json`, {
          image: `${userObj.photoURL}`,
          uid: `${userObj.uid}`,
          displayName: `${userObj.displayName}`,
          email: `${userObj.email}`,
          lastSignInTime: `${userObj.metadata.lastSignInTime}`
        });
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };
