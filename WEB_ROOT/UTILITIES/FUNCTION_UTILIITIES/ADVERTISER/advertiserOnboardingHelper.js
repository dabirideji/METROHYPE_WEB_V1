import { ConsumeApi } from "../../API_UTILITIIES/apiConsumeUtiliityHelper.js";

async function createAdvertiser() {
    try {
        const response = await ConsumeApi("/users", "GET",);
        console.log(response);
    } catch (e) {
        console.error("Failed to create advertiser:", e);
    }
}

createAdvertiser();