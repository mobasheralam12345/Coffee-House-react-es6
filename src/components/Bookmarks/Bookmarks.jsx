
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks ,reading_time}) => {
    return (
        <div className='md:w-1/3 bg-green-400 ml-4 mt-2 pt-4'>
            <div className='mb-4 bg-red-600 text-xl'>
                Total Spend Time : {reading_time}
            </div>
            <h1>Bookmarked Length : {bookmarks.length}</h1> 
         
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    reading_time:PropTypes.number
}
export default Bookmarks;