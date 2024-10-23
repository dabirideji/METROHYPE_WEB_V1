import { getConfig } from "./../BASE_UTILITIES/configurationAccessor.js";
import { API_METHOD } from "./apiDetailsProvider.js";


export async function ConsumeApi(relativeEndpoint, method = API_METHOD.GET, payload = null, routeParams = {}) {
  console.clear();
  const config = await getConfig();
//   console.log("Loaded Config:", config);
  const API_BASE_URL = config.API_BASE_URL;
  if (!API_BASE_URL || !/^https?:\/\//.test(API_BASE_URL)) {
      throw new Error("Invalid API_BASE_URL: " + API_BASE_URL);
  }
  Object.keys(routeParams).forEach((key) => {
      const regex = new RegExp(`:${key}(,)?`, 'g');
      relativeEndpoint = relativeEndpoint.replace(regex, `${routeParams[key]}$1`);
  });
  const url = `${API_BASE_URL}${relativeEndpoint}`;
  const options = {
      method,
      headers: {
          'Content-Type': 'application/json',
      },
  };
  if (payload && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(payload);
  }
  let activityData = {
      payload,
      endpoint: url,
      options,
  };
  try {
      const response = await fetch(url, options);
      if (!response.ok) {
          const errorResponse = await response.json();
          console.log(errorResponse);
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const mainResponseFromApi = await response.json();
      activityData.responseFromApi = mainResponseFromApi;
      activityData.repsonseMetadata = response;

      if (mainResponseFromApi && mainResponseFromApi.Status === true) {
        // Check if the Data field exists and return it
        if (mainResponseFromApi.Data) {
            return mainResponseFromApi.Data;
        } else {
            throw new Error("Unexpected response format: No 'Data' field found in the response");
        }
    } else {
        throw new Error(`API returned an error: ${mainResponseFromApi.ResponseMessage}`);
    }


    //   if (Array.isArray(mainResponseFromApi)) {
    //     //  TODO
    //     // if(method.toUpperCase().startsWith=="P"){
    //         // showNotification(mainResponseFromApi.ResponseMessage);
    //     // }
    //       return mainResponseFromApi;
    //   } else {
    //       throw new Error("Unexpected response format: " + JSON.stringify(mainResponseFromApi));
    //   }
  } catch (error) {
      console.error('Error consuming API:', error);
      throw error;
  } finally {
      console.log("API CONSUMPTION SUMMARY: ", activityData);
  }
}