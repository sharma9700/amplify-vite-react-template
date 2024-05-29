import { ApiError, get } from 'aws-amplify/api';

try {
  const restOperation = get({ 
    apiName: 'myRestApi',
    path: 'items' 
  });
  await restOperation.response;
} catch (error) {
  if (error instanceof ApiError) {
    if (error.response) {
      const { 
        statusCode, 
        headers, 
        body 
      } = error.response;
      console.error(`Received ${statusCode} error response with payload: ${body}`);
    }
    // Handle API errors not caused by HTTP response.
  }
  // Handle other errors.
}