throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

export const post = (request) => {
    const formbody = JSON.parse(request.body);
    const username = formbody.username;
    const email = formbody.email;
    const password = formbody.password;
    const confirmpassword = formbody.confirmpassword;
    const phonenumber = formbody.phonenumber;
    
    return {
        status: 200,
        
    }
}