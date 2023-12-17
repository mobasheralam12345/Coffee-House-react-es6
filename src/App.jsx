import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [reading_time,setReadingTime] = useState(0); // Number howay start value 0 dichi

  const handleRead = (id,time) =>{
    const newReadingTime = reading_time + time;
    setReadingTime(newReadingTime);
    
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
     <Header></Header>
     <div className='my-2 md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleRead={handleRead} ></Blogs>
        <Bookmarks bookmarks={bookmarks} reading_time={reading_time}></Bookmarks>
     </div>
    </>
  )
}

export default App
