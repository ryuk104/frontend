export const post = (request) => {
    const formbody = JSON.parse(request.body);
    const email = formbody.email;
    const password = formbody.password;
    
    return {
        status: 200,
        
    }
}