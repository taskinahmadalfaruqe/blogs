import { useState } from 'react';
import { useEffect } from 'react';
import SingleBlogs from '../LodeBlogs/SingleBlogs';
import PropTypes from 'prop-types';

const Blogs = ({handelAddBookMark}) => {
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
        <div className='md:mt-5  w-full lg:w-2/3 grid grid-cols-1 xl:grid-cols-2 gap-5'>
            {
                blogsValue.map(blog=> {
                    return (
                        <SingleBlogs
                            key={blog.id}
                            blog={blog}
                            handelAddBookMark={handelAddBookMark}
                        ></SingleBlogs>
                    )
                })
            }
        </div>
    );
};
Blogs.propTypes={
    handelAddBookMark: PropTypes.func,
}
export default Blogs;



