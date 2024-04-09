function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Assuming a successful response
      const responseData = { message: 'Success!' };
      resolve(responseData); // Resolve the promise with the response data
    }, 2000); // Simulating a delay of 2 seconds
  });
}

export default getResponseFromAPI;
