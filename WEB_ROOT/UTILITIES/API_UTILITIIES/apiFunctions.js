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
