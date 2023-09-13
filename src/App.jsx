import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookMarkItem, setBookMarkItem]=useState([]);
  const handelAddBookMark=( addNewBookMarks)=>{
    const isMatch = bookMarkItem.find(findItemID=> findItemID.id == addNewBookMarks.id);
    
    if(isMatch){
      return alert("This Blog Is Already Add In BookMark")
    }else{
      const newBookMarks = [...bookMarkItem , addNewBookMarks];
      setBookMarkItem(newBookMarks);
    }
  };

  const [readTime, setReadTime]=useState(0);
  const readCount=(time)=>{
    const newReadTime= readTime + time;
    setReadTime(newReadTime)
    console.log(newReadTime)
  }

  return (
    <div className='container'>
      <Header></Header>
      <div className=' flex flex-col-reverse md:flex-row md:justify-between gap-5 '>
        <Blogs handelAddBookMark={handelAddBookMark} readCount={readCount}></Blogs>
        <Bookmarks bookMarkItem={bookMarkItem} readTime={readTime} ></Bookmarks>
      </div>
    </div>
  )
}

export default App
