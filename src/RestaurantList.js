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
  
  const restaurantsInPriceRange = anyPriceSelected
    ? restaurants.filter(restaurant => priceRangeFilter[restaurant.priceRange])
    : restaurants;
    
  const restaurantsInZoneRange = anyZoneSelected
    ? restaurants.filter(restaurant => zoneRangeFilter[restaurant.zoneRange])
    : restaurants;

  const filteredRestaurantsPrice = restaurantsInPriceRange.filter(
    restaurant =>
      restaurant.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(nameFilter.toLowerCase()),
  );

  const filteredRestaurantsZone = restaurantsInZoneRange.filter(
    restaurant1 =>
      restaurant1.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
      restaurant1.description.toLowerCase().includes(nameFilter.toLowerCase()),
  );

  return (
    <CardContainer>
      {filteredRestaurantsPrice.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </CardContainer>
  );
};

export default RestaurantList;
