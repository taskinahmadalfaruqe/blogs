import PropTypes from 'prop-types';
const SingleBlogs = ({blog}) => {
    const {cover_photo,author,author_png,posted_date,reading_time,cover_title,hashtags}=blog;
    console.log(blog)
    return (
        <div className='mb-10 w-2/3 border-2 border-[#eee] p-5 rounded-md'>
            <div className="image">
                <img src={cover_photo} alt="Cover_Photo" className=' rounded-md' />
            </div>

            <div className='flex justify-between items-center my-5'>
                <div className="author flex items-center gap-5">
                    <div className="authorImage w-12 h-12 rounded-full overflow-hidden">
                        <img src={author_png} alt="Author-Image" />
                    </div>
                    <div>
                        <h2 className="authorName text-2xl font-semibold">{author}</h2>
                        <p className='text-xl font-medium'>{posted_date}</p>
                    </div>

                </div>
                <div className="readTime">
                    <p>0{reading_time} Minutes Read </p>
                </div>
            </div>

            <h1 className='text-4xl font-bold my-5'>{cover_title}</h1>
            <button className='btn btn-primary'>Mark As Read</button>
        </div>
    );
};

SingleBlogs.propTypes={
    blog: PropTypes.object,
}

export default SingleBlogs;