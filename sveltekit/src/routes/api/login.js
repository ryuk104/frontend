import axios from 'axios';



export const post = () => {
    const email = body(email);
    const password = body(password);

    
    const submitlogin = async () => {
        axios({
            method: 'post',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            withCredentials: true, 
            url: 'http://localhost:8080/auth/api/login',
            auth: {
            email: email,
            password: password
        }
    })
}

    return {
        status: 200,
        
    }


}