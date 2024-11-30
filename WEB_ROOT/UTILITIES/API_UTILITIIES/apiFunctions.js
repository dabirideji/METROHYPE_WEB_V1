import { API_PAYLOAD_FACTORY, API_ROUTES, API_METHOD } from "./apiDetailsProvider.js";
import { ConsumeApi } from "./apiConsumeUtiliityHelper.js";

export async function AdvertiserLogin(email = "", password = "") {
    try {
        const route = API_ROUTES.ADVERTISER.LOGIN;
        const payload = API_PAYLOAD_FACTORY.ADVERTISER.LOGIN(email, password);
        return await ConsumeApi(route, API_METHOD.POST, payload);
    } catch (e) {
        console.error("Failed to create advertiser:", e);
        throw e;
    }
}

export async function CreateAdvertiser (advertiserFirstName, advertiserLastName,advertiserUserName,advertiserPhoneNumber,advertiserEmailAddress,advertiserStatus,advertiserPassword,advertiserConfirmPassword) {
    try {
        //get  route 
        const route = API_ROUTES.ADVERTISER.CREATE;
       
        //create payload
        const payload = API_PAYLOAD_FACTORY.ADVERTISER.CREATE (advertiserFirstName, advertiserLastName,advertiserUserName,advertiserPhoneNumber,advertiserEmailAddress,advertiserStatus,advertiserPassword,advertiserConfirmPassword);
       
        return await ConsumeApi(route, API_METHOD.POST, payload,{userType:"Advertiser"});
    } catch (e) {
        console.error("Failed to create advertiser:", e);
        throw e;
    }
}

export async function GetAllAdvertisers () {
    try {
        //get  route 
        const route = API_ROUTES.ADVERTISER.GET_ALL;
        return await ConsumeApi(route);
    } catch (e) {
        console.error("Failed to get Advertisers:", e);
        throw e;
    }
}
