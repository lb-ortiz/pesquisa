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

  const finalFilter = calculaFilter(anyPriceSelected, anyZoneSelected)
  
  function calculaFilter(anyPriceSelected, anyZoneSelected) {
    if(anyPriceSelected && !anyZoneSelected) {
      return restaurants.filter(restaurant => priceRangeFilter[restaurant.priceRange])
    } else if(!anyPriceSelected && anyZoneSelected) {
      return restaurants.filter(restaurant => zoneRangeFilter[restaurant.zoneRange])
    } else if(anyPriceSelected && anyZoneSelected) {
      return restaurants.filter(restaurant => priceRangeFilter[restaurant.priceRange] && zoneRangeFilter[restaurant.zoneRange])
    } else {
      return restaurants
    }
  }

  const filteredRestaurants = finalFilter.filter(
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
