import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    return error;
  }

};

export const fetchNotes = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    return error;
  }

};

export const sendDataToApi = async (postData) => {
  try {
    return axios.post('https://jsonplaceholder.typicode.com/posts', postData)
  } catch (error) {
    return error
  }

}