import axios from 'axios';

export const getData = async (url) => {
  try {
    let response = axios({
      url: url,
      method: 'get',
    });

    console.log(response);
    return response;
  } catch (err) {
    return { message: err.message };
  }
};
