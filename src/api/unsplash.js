import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID aa6ec8c0933d4c92d3fa320b65ffc88ff71c9088350fd2a42d8a680f83488eb5'
  }
});
