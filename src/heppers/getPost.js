const getPost = async (userId) => {


    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    const res   = await fetch(url);
    const user  = res.json();    

    return user;
}


export default getPost;