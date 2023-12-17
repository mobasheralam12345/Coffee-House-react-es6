import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";
const Blog = ({ blog,handleAddToBookmark,handleRead }) => {
        
    const {id,title,cover,reading_time,author,author_image,posted_date,hashtags} = blog ;

    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mt-2'>
                    <div className='flex'>
                        <img className='w-14 rounded-full' src={author_image} alt="" />
                        <div className='ml-6'>
                            <h3 className='text-2xl'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>

                    <div>
                        <span>{reading_time} min read</span>
                        <button onClick={()=>handleAddToBookmark(blog)} className='ml-2'><IoBookmarkOutline></IoBookmarkOutline></button>
                    </div>
            </div>               
            <h2 className='text-2xl'>Title : {title}</h2>
            <p className='gap-1'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash} </a></span>)
                }
            </p>
            <button className='text-xl underline text-purple-600' 
                onClick={()=>handleRead(id,reading_time)}
            >
                Mark as Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleRead:PropTypes.func
}
export default Blog;