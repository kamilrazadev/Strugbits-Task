import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-my-blue" />);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<FaStarHalfAlt key={`half-${i}`} className="text-my-blue" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-my-blue" />);
    }
    return stars;
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>{renderStars()}</div>
  );
};

export default StarRating;
