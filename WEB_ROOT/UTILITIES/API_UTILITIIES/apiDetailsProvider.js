export const API_METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

export const API_ROUTES = {
    ADMIN: {

    },
    ADVERTISER: {
        REGISTER: "/API/ADVERTISERS/CREATE",
        LOGIN: "/API/ADVERTISERS/LOGIN",
        GET_ALL: "/API/ADVERTISERS/GETALL",
        GET_BY_ID: "/API/ADVERTISERS/GETBYID/{ID}",
        UPDATE: "/API/ADVERTISERS/UPDATE/{ID}",
        DELETE: "/API/ADVERTISERS/DELETE/{ID}"
    },
    FREELANCER: {

    },
    PARTNER: {

    },
    SHARED: {

    }
}


export const API_PAYLOAD = {
    ADMIN: {

    },
    ADVERTISER: {
        LOGIN: {
            email: "",
            password: ""
        }
    },
    FREELANCER: {

    },
    PARTNER: {

    },
    SHARED: {

    }
}


export const API_PAYLOAD_FACTORY = {
    ADMIN: {

    },
    ADVERTISER: {
        LOGIN: (email, password) => ({
            email:email,
            password:password
        }),

        REGISTER: (advertiserFirstName, advertiserLastName,advertiserUserName,advertiserPhoneNumber,advertiserEmailAddress,advertiserStatus,advertiserPassword,advertiserConfirmPassword) => ({
            advertiserFirstName:advertiserFirstName,
            advertiserLastName:advertiserLastName,
            advertiserUserName:advertiserUserName,
            advertiserPhoneNumber:advertiserPhoneNumber,
            advertiserEmailAddress:advertiserEmailAddress,
            advertiserStatus:advertiserStatus,
            advertiserPassword:advertiserPassword,
            advertiserConfirmPassword:advertiserConfirmPassword,
        }),
    },
    FREELANCER: {

    },
    PARTNER: {

    },
    SHARED: {

    }
}