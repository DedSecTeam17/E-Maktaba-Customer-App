export class UserSession {


    static setToken(token) {
        // localStorage.setItem( "iat",iat);
        // localStorage.setItem( "expire",expire);
        localStorage.setItem("token", token);

    }


    static saveUserData(user) {
        localStorage.setItem("email", user["email"]);
        localStorage.setItem("name", user["name"]);
        //profile
        localStorage.setItem("about", user.profile["about"]);
        localStorage.setItem("phone_number", user.profile["phone_number"]);
        localStorage.setItem("job", user.profile["job"]);
        localStorage.setItem("profile_image_path", user.profile["profile_image_path"]);
    }


    static getUserData() {
        return {
            "email": localStorage.getItem("email"),
            "name": localStorage.getItem("name"),
            "job": localStorage.getItem("job"),
            "profile_image_path": localStorage.getItem("profile_image_path"),
            "about": localStorage.getItem("about"),
            "phone_number": localStorage.getItem("phone_number"),


        };
    }


    static destroySession() {
        localStorage.setItem("token", undefined);
        localStorage.setItem("email", undefined);
        localStorage.setItem("name", undefined);
        localStorage.setItem("job", undefined);
        localStorage.setItem("about", undefined);
        localStorage.setItem("profile_image_path", undefined);
        localStorage.setItem("phone_number", undefined);
    }

    static getUserToken() {
        return localStorage.getItem("token");
    }

    static isAuth() {
        return this.getUserToken() !=='undefined';
    }


}


//{
//     "_id": "5cc429961c3f8211e0e1277f",
//     "email": "melamin100@yahoo.com",
//     "password": "$2a$10$urFN7MmWoQTpVdf1uMIdL.fp.3wver62.5et.KUEjHjETQh/hgj5K",
//     "name": "asdsad",
//     "profile": {
//         "_id": "5cc429961c3f8211e0e12780",
//         "about": "mohammed elamin developer sfsdf",
//         "phone_number": "090264996623",
//         "job": "asdasdasdvv",
//         "profile_image_path": "https://young-tor-63067.herokuapp.com/api/users/profile_image/app_books_provider_1556364638571.jpg"
//     },
//     "updatedAt": "2019-04-27T11:44:04.239Z",
//     "createdAt": "2019-04-27T10:06:16.059Z",
//     "__v": 0,
//     "password_reset_token": "HrVdxMkgEqjss5l9"
// }