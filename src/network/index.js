import axios from 'axios'

export function request(config) {

 return new Promise((resolve, reject) =>{
    const instance = axios.create({
        baseURL: "https://api.github.com/users/",
        timeout: 5000
    })

    instance(config)
        .then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
 })
}