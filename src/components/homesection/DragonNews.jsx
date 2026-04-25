const DragonNews = ({ item }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm space-y-3 mt-5">
            <h2 className="text-lg font-semibold text-gray-800 ">
                {item?.title}
            </h2>
        </div>
    );
};

export default DragonNews;