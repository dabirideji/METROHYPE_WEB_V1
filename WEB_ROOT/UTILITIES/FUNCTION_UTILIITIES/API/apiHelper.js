import { AdvertiserLogin,CreateAdvertiser,GetAllAdvertisers } from "../../API_UTILITIIES/apiFunctions.js";


export async function LoginAdvertiser(email, password) {
    try {
        const result = await AdvertiserLogin(email, password);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error creating advertiser:", error);
    }
}


export async function RegisterAdvertiser (advertiserFirstName, advertiserLastName,advertiserUserName,advertiserPhoneNumber,advertiserEmailAddress,advertiserStatus,advertiserPassword,advertiserConfirmPassword)  {
    try {
        
        const result = await CreateAdvertiser (advertiserFirstName, advertiserLastName,advertiserUserName,advertiserPhoneNumber,advertiserEmailAddress,advertiserStatus,advertiserPassword,advertiserConfirmPassword) ;
        console.log(result);
    } catch (error) {
        console.error("Error creating advertiser:", error);
    }
}


export async function GetAll() {
    try {
        const result = await GetAllAdvertisers();
                console.log(result);
    } catch (error) {
        console.error("Error creating advertiser:", error);
    }
}