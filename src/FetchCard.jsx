import React, { useState,useEffect } from 'react';
import getUser from './heppers/getUser';
import getPost from './heppers/getPost';



const initialUser= {
    name:'eze',
    email:'eze@gmail.com'
}
const initialPost=[
    {
    id:1,
    title: "prueba 1 "
},
{
    id:2,
    title: "prueba 2 "
},

]



const FetchCard = () => {

const [user, setUser]   = useState({});
const [posts, setPosts] = useState([]);

const updateUser = ()=>{
    getUser().then((Newuser)=>{
        setUser(Newuser);

    })
}

const updatePosts=()=>{
getPost(user.id).then((newPosts)=>{
    setPosts(newPosts);

})

}
useEffect(() => {

    updateUser();
  
}, []);


useEffect(() => {
    if(user?.id){

    updatePosts();

    }
  
}, [user]);



    return (
        <div>

        <button onClick={updateUser}>
            Another User
        </button>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>

        <br/>
        <h1>Posts - user : {user.id}</h1>
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))}

        </ul>


        </div>
    );
};


export default FetchCard;