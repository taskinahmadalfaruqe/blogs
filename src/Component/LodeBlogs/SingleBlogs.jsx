import PropTypes from 'prop-types';
import { BsBookmarkCheckFill } from 'react-icons/bs';

const SingleBlogs = ({blog,handelAddBookMark}) => {
    const {cover_photo,author,author_png,posted_date,reading_time,cover_title,hashtags}=blog;
    return (
        <div className='border-2 border-[#eee] p-3 rounded-md text-center lg:text-start'>
            <div className="image">
                <img src={cover_photo} alt="Cover_Photo" className=' rounded-md' />
            </div>

            <div className='flex justify-between items-center my-5 text-start'>
                <div className="author flex items-center gap-2">
                    <div className="authorImage w-10 h-10 rounded-full overflow-hidden">
                        <img src={author_png} alt="Author-Image" />
                    </div>
                    <div>
                        <h2 className="authorName text-base md:text-xl font-semibold">{author}</h2>
                        <p className='text-xs font-semibold'>{posted_date}</p>
                    </div>

                </div>
                <div className="readTime text-end flex gap-1 items-center">
                    <p className='text-sm md:text-xs'>{reading_time} Minutes Read</p>
                    <p> < BsBookmarkCheckFill className='text-xl text-[#6047EC] cursor-pointer' onClick={()=>{handelAddBookMark(blog)}}/> </p>
                </div>
            </div>

            <h1 className=' text-xl md:text-2xl lg:text-3xl font-bold my-5'>{cover_title}</h1>
            <div className='hashtag flex gap-5 my-5 items-center justify-center'>
                {
                    hashtags.map((hashtag, index)=>  <a href={hashtag} key={index}>{hashtag}</a>)
                }
            </div>
            <button  className='btn btn-primary'>Mark As Read</button>
        </div>
    );
};

SingleBlogs.propTypes={
    blog: PropTypes.object,
    handelAddBookMark: PropTypes.func,
}

export default SingleBlogs;