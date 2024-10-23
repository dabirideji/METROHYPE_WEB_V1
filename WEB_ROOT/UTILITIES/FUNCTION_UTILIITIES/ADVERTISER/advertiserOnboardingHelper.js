import { AdvertiserLogin } from "../../API_UTILITIIES/apiFunctions.js";


export async function LoginAdvertiser(email, password) {
    try {
        const result = await AdvertiserLogin(email, password);
        console.log(result);
    } catch (error) {
        console.error("Error creating advertiser:", error);
    }
}


function goo(){
    console.log("gooing");
}