import PropTypes from "prop-types";

const Card = ({ title, description, image }) => {
  return (
    <div className="card bg-base-100 shadow-xl transform transition-transform hover:scale-105 duration-300 ease-in-out rounded-lg overflow-hidden w-full sm:w-80 lg:w-96">
      <figure className="w-full">
        <img
          src={image}
          alt="Card Image"
          className="w-full h-40 sm:h-48 lg:h-52 object-cover"
        />
        <div className="border-b border-gray-500"></div>
      </figure>
      <div className="card-body p-4 sm:p-6">
        <h2 className="card-title text-xl sm:text-2xl font-thin ">{title}</h2>
        <p className="font-thin my-2 sm:my-4">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
