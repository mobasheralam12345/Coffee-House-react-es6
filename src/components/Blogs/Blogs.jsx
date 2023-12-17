import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark,handleRead}) => {

    const [blogs,setBlogs] = useState([]);

useEffect( ()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
},[]);

    return (
        <div className="md: w-2/3">
            <h1 className="text-3xl">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog handleAddToBookmark={handleAddToBookmark} key={blog.id} blog={blog}
                    handleRead={handleRead}
                ></Blog>)
            }
        </div>
    );
};

 Blogs.propTypes ={
    handleAddToBookmark: PropTypes.func.isRequired,
    handleRead : PropTypes.func.isRequired
 }
export default Blogs;