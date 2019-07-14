import axios from 'axios';
import {UserSession} from "./users_session_services";
import {vm} from "../main";

const url = "https://young-tor-63067.herokuapp.com/api/";

export class AuthService {


    static signIn(email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.post(url + "auth", {
                    email, password

                });

                const data = result.data;
                resolve(data);
            } catch (e) {

                reject(e);
            }
        });


    }


    static signUp(email, password, name) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.post(url + "users", {
                    email, password, name
                });

                try {
                    const result = await axios.post(url + "auth", {
                        email, password

                    });

                    const data = result.data;
                    resolve(data);
                } catch (e) {

                    reject(e);
                }
            } catch (e) {

                reject(e);
            }
        });


    }


    static passwordReset(email) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.post(url + "users/password_reset", {
                    email
                });
                const data = result.data;
                resolve(data);
            } catch (e) {

                reject(e);
            }
        });
    }


    static passwordChange(newPassword, resetToken) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.post(url + `users/password_change/${resetToken}`, {
                    "new_password": newPassword
                });
                const data = result.data;
                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    }


    static passwordUpdate(newPassword, oldPassword, user_token) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.put(url + "users/update_password", {
                    "old_password": oldPassword,
                    "new_password": newPassword
                }, {
                    headers: {
                        "Authorization": `jwt ${user_token}`
                    }
                });
                const data = result.data;
                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    }


    static updateUserInfo(phone_num, about, job, user_id, token) {
        //users/5cc429961c3f8211e0e1277f/profile
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.post(url + `users/${user_id}/profile`, {
                    "phone_number": phone_num,
                    "about": about,
                    "job": job
                }, {
                    headers: {
                        "Authorization": `jwt ${token}`
                    }
                });
                const data = result.data;
                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    }

    static getUserInfo(token) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.get(url + "users", {
                    headers: {
                        "Authorization": `jwt ${token}`
                    }
                });

                const data = result.data;
                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    }


    static uploadProfileImage(image, token) {
        return new Promise(async (resolve, reject) => {
            try {
                let formData = new FormData();
                formData.append('profile_image', image);
                const result = await axios.post(url + "users/profile/upload_profile_image", formData, {
                    headers: {
                        "Authorization": `jwt ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                });
                const data = result.data;
                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    }


    //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M0Mjk5NjFjM2Y4MjExZTBlMTI3N2YiLCJlbWFpbCI6Im1lbGFtaW4xMDBAeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkYm0zMlZrMElQb3BuMDBPNDJnWjVuT0JhVWR1b2FIdzRJMXRrMlRNRzJPVFVSZWtqOVUwUnUiLCJuYW1lIjoiYXNkc2FkIiwicHJvZmlsZSI6eyJfaWQiOiI1Y2M0Mjk5NjFjM2Y4MjExZTBlMTI3ODAiLCJhYm91dCI6Im1vaGFtbWVkIGVsYW1pbiBkZXZlbG9wZXIgc2ZzZGYiLCJwaG9uZV9udW1iZXIiOiIwOTAyNjQ5OTY2MjMiLCJqb2IiOiJhc2Rhc2Rhc2R2diIsInByb2ZpbGVfaW1hZ2VfcGF0aCI6Imh0dHBzOi8veW91bmctdG9yLTYzMDY3Lmhlcm9rdWFwcC5jb20vYXBpL3VzZXJzL3Byb2ZpbGVfaW1hZ2UvYXBwX2Jvb2tzX3Byb3ZpZGVyXzE1NTYzNjQ2Mzg1NzEuanBnIn0sInVwZGF0ZWRBdCI6IjIwMTktMDctMTNUMTQ6MjY6MTMuNzU1WiIsImNyZWF0ZWRBdCI6IjIwMTktMDQtMjdUMTA6MDY6MTYuMDU5WiIsIl9fdiI6MCwicGFzc3dvcmRfcmVzZXRfdG9rZW4iOm51bGwsImlhdCI6MTU2MzAzMTMwNCwiZXhwIjoxNTYzMTIxMzA0fQ._h2mX7nWdN5Xjz3582sLZ1Wd4WC_7wPk_aGmICt9znE
    // static   insertPost(text) {
    //     return   axios.post(`${url}create`,{text});
    // }
    //
    //
    // static   deletePost(postId) {
    //     return   axios.delete(url+`delete/${postId}`);
    // }

}