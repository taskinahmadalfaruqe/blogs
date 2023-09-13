import PropsTypes from 'prop-types'
import SingleBookMark from '../SingleBookMark/SingleBookMark';
const Bookmarks = ({bookMarkItem}) => {
    return (
        <div className= 'md:mt-5 w-full lg:w-1/3 flex flex-col gap-5'>
            <div className="text-center border-2 border-[#eee] p-5 rounded-md text-[#6047EC] font-bold">
                Spend Time: Minutes  
            </div>
            <div className="border-2 border-[#eee] p-5 rounded-md">
                <h2 className="text-center font-bold">Bookmark Blogs: {bookMarkItem.length} </h2>
                <div className="bookMarksCard flex gap-5 flex-col mt-5">
                    {
                        bookMarkItem.map(singleBookmarkData => {
                            return (
                                <SingleBookMark singleBookmarkData={singleBookmarkData} key={singleBookmarkData.id}></SingleBookMark>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    Bookmarks: PropsTypes.object,
}
export default Bookmarks;