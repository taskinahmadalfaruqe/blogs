import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookMarkItem, setBookMarkItem]=useState([]);
  const handelAddBookMark=( addNewBookMarks)=>{
    const newBookMarks = [...bookMarkItem , addNewBookMarks];
    setBookMarkItem(newBookMarks);
  }
  return (
    <div className='container'>
      <Header></Header>
      <div className=' flex flex-col-reverse md:flex-row md:justify-between gap-5 '>
        <Blogs handelAddBookMark={handelAddBookMark}></Blogs>
        <Bookmarks bookMarkItem={bookMarkItem} ></Bookmarks>
      </div>
    </div>
  )
}

export default App
