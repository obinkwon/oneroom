import axios from 'axios';

// const USER_API_BASE_URL = "http://localhost:8000/api";
const axiosInstance = () => {
    const _axios = axios.create({
        baseURL: 'http://localhost:8000/api',
        timeout: 50000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*' ,
            'Content-Type': 'multipart/form-data',
        },
    });

    _axios.interceptors.response.use(
        response => {
            //alert('성공'+response);
            return response;
        },
        error => {
            return Promise.reject(error);
        },
    );

    return _axios;
};

// class ApiService {

//     fetchUsers(){
//         //return axios.get(USER_API_BASE_URL);
//     }

//     fetchUserByID(userID){
//         //return axios.get(USER_API_BASE_URL + userID);
//     }

//     deleteUser(userID){
//         //return axios.delete(USER_API_BASE_URL + userID);
//     }

//     addUser(user){
//         //return axios.post(USER_API_BASE_URL, user);
//     }

//     editUser(user){
//         //return axios.put(USER_API_BASE_URL + '/' + user.id, user);
//     }

//     addExpend(user){
//         // return axios.post(USER_API_BASE_URL, user).then((Response)=>{
//         //     console.log(Response.data);
//         // }).catch((Error)=>{
//         //     console.log(Error);
//         // });
//     }

//     editExpend(user){
//         // return axios.post(USER_API_BASE_URL, user).then((Response)=>{
//         //     console.log(Response.data);
//         // }).catch((Error)=>{
//         //     console.log(Error);
//         // });
//     }

//     getExpend(user){
//         return axios.get(USER_API_BASE_URL+'/main/getExpend.do',{
//             headers : {
//                 "Access-Control-Allow-Origin" : 
//             }
//         })
//         .then(response => {
//             console.log(response.data);
//         }).catch(err => {
//             alert('실패');
//             console.log(err);
//         });
//     }
// }

export function getExpend() {
    return new Promise((resolve, reject) => {
        return axiosInstance()
        .get(`/main/getExpend.do?mid=C1234`)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
}