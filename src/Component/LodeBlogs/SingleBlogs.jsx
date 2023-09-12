import PropTypes from 'prop-types';
const SingleBlogs = ({blog}) => {
    console.log(blog)
    return (
        <div>
            <p>hello</p>
        </div>
    );
};

SingleBlogs.propTypes={
    blog: PropTypes.object,
}

export default SingleBlogs;