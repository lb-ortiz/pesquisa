import React from 'react';
import styled from 'styled-components';
import RestaurantCard from './RestaurantCard';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const RestaurantList = ({ restaurants, priceRangeFilter, zoneRangeFilter, nameFilter }) => {
  const anyPriceSelected = Object.values(priceRangeFilter).some(f => f);
  const anyZoneSelected = Object.values(zoneRangeFilter).some(f => f);

    
  const zoneandPriceRange = (anyPriceSelected || anyZoneSelected)
    ? restaurants.filter(restaurant => priceRangeFilter[restaurant.priceRange] || zoneRangeFilter[restaurant.zoneRange])
    : restaurants;

  const filteredRestaurants = zoneandPriceRange.filter(
    restaurant =>
      restaurant.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(nameFilter.toLowerCase()),
  );

  return (
    <CardContainer>
      {filteredRestaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </CardContainer>
  );
};

export default RestaurantList;
