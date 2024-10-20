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
        REGISTER: (userName, firstName,lastName,emailAddress,phoneNumber,password,confirmPassword) => ({
            userName:userName,
            firstName:firstName,
            lastName:lastName,
            emailAddress:emailAddress,
            phoneNumber:phoneNumber,
            password:password,
            confirmPassword:confirmPassword,
        }),
    },
    FREELANCER: {

    },
    PARTNER: {

    },
    SHARED: {

    }
}