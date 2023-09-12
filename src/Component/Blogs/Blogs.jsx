import { useState } from 'react';
import './Blogs.css'
import { useEffect } from 'react';
import SingleBlogs from '../LodeBlogs/SingleBlogs';

const Blogs = () => {
    const [blogsValue, setBlogs]= useState([]);

    // DATA FETCH FROM LOCAL STORAGE
    useEffect(()=>{
        try {
            fetch('/Blogs.json')
            .then(res=>res.json())
            .then(data=>setBlogs(data))
        } catch (error) {
            return alert("Data Lode Problem", error)    
        }
    },[])
    

    return (
        <div className='bg-purple-300 mt-5'>
            <h2>Total Blogs: {blogsValue.length}</h2>
            {
                blogsValue.map(blog=>{
                    <SingleBlogs singleBlogs={blog} key={blog.id}></SingleBlogs>
                })
            }
        </div>
    );
};

export default Blogs;



