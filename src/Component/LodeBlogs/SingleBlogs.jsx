import PropTypes from 'prop-types';
const SingleBlogs = ({blog}) => {
    const {cover_photo,author,author_png,posted_date,reading_time,cover_title,hashtags}=blog;
    console.log(blog)
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
                <div className="readTime text-end">
                    <p className='text-sm md:text-xs'>{reading_time} Minutes Read </p>
                </div>
            </div>

            <h1 className=' text-xl md:text-2xl lg:text-3xl font-bold my-5'>{cover_title}</h1>
            <button className='btn btn-primary'>Mark As Read</button>
        </div>
    );
};

SingleBlogs.propTypes={
    blog: PropTypes.object,
}

export default SingleBlogs;