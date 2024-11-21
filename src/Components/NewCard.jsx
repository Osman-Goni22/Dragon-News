import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <FaRegBookmark />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-48 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{details}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          {/* Rating */}
          <div className="flex items-center">
            <span className="text-yellow-500 text-lg">&#9733;</span>
            <span className="ml-1 text-gray-600 text-sm">{rating.number}</span>
          </div>
          {/* Views */}
          <div className="flex items-center text-gray-500 text-sm">
            <FaEye className="mr-1" />
            {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
