// This code simply dissects errors and displays their full information in the console. It's mostly just for debug purposes and not necessary to use in production.
// This code might be verbose and unnecessary, but it's mostly for my own practice. It also might be more useful in later projects.

export default function errorHandler(error) {
  // If the error has a response property, log the data, status, and headers of the response
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } 
  // If the error has a request property, log the request object
  else if (error.request) {
    console.log(error.request);
  } 
  // If the error does not have a response or request property, log the error message
  else {
    console.log("Error", error.message);
  }
}