import axios from 'axios';
import errorHandler from './errorHandler.js';

// Define a function called axiosGet that takes a url as a parameter
export async function axiosGet(url, flag_logErrors) {
  try {
    // Use axios to make a GET request to the specified url and store the response in a variable called response
    const response = await axios.get(url);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // If there is an error, first check whether or not you should log the error using the flag_logErrors parameter
    if (flag_logErrors) {
      // If you should log the error, simply hand it off to the errorHandler function.
      errorHandler(error);
    }

    // Return the string "error" to indicate that there was an error
    return "error";
  }
};

// Define a function called axiosPost that takes a url and data as parameters
export async function axiosPost(url, data, flag_logErrors) {
  try {
    // Use axios to make a POST request to the specified url with the provided data and store the response in a variable called response
    const response = await axios.post(url, data);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // If there is an error, first check whether or not you should log the error using the flag_logErrors parameter
    if (flag_logErrors) {
      // If you should log the error, simply hand it off to the errorHandler function.
      errorHandler(error);
    }

    // Return the string "error" to indicate that there was an error
    return "error";
  }
};