import PropTypes from 'prop-types'

const SingleBookMark = ({singleBookmarkData}) => {
    const {cover_title}=singleBookmarkData;
    return (
            <div className='border-2 border-[#eee] bg-[#eee] rounded-md p-5'>
                <h2>{cover_title}</h2>
            </div>
        );
}

SingleBookMark.propTypes = {
    singleBookmarkData: PropTypes.object,
}

export default SingleBookMark;