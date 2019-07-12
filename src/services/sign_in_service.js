import axios from 'axios';

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



    static signUp(email, password,name) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await axios.post(url + "users", {
                    email, password,name
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

    //
    // static   insertPost(text) {
    //     return   axios.post(`${url}create`,{text});
    // }
    //
    //
    // static   deletePost(postId) {
    //     return   axios.delete(url+`delete/${postId}`);
    // }

}