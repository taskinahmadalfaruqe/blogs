import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <div className=' flex flex-col-reverse md:flex-row md:justify-between gap-5 '>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
