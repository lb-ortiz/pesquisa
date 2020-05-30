import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Card = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 200px;
  margin: 0 5px;
`;

const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  margin: 0;
`;

const PriceRange = styled.span`
  font-size: 20px;
`;

const ZoneRange = styled.span`
  font-size: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 20px;
`;

const RestaurantCard = ({ restaurant }) => (
  <Card>
    <StyledLink to={`/restaurant/${restaurant.id}`}>
      <CardTitleRow>
        <CardTitle>{restaurant.name}</CardTitle>
        <PriceRange>{restaurant.priceRange}</PriceRange>
        <ZoneRange>{restaurant.zoneRange}</ZoneRange>
      </CardTitleRow>
      <Img src={restaurant.imageSrc} alt={restaurant.imageDescription} />
      <Description>{restaurant.description}</Description>
    </StyledLink>
  </Card>
);

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    zoneRange: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RestaurantCard;
