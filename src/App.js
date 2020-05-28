import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Loading from './Loading';
import Filters from './Filters';
import RestaurantList from './RestaurantList';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const defaultFilters = {
  nameFilter: '',
  priceRangeFilter: {
    $: false,
    $$: false,
    $$$: false,
    $$$$: false,
  },
  zoneRangeFilter: {
    ZN: false,
    ZS: false,
    ZL: false,
    ZO: false,
    C: false,
  },
};

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      loading: true,
      error: false,
      ...defaultFilters,
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/restaurants.json`)
      .then(result => result.json())
      .then(restaurants => {
        this.setState({
          restaurants: restaurants.map(restaurant => ({
            ...restaurant,
            imageSrc: `${host}${restaurant.imageSrc}`,
          })),
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  setNameFilter = value => this.setState({ nameFilter: value });

  setPriceRangeFilter = range => checked => {
    this.setState(({ priceRangeFilter }) => ({
      priceRangeFilter: {
        ...priceRangeFilter,
        [range]: checked,
      },
    }));
  };

  setZoneRangeFilter = range => checked => {
    this.setState(({ zoneRangeFilter }) => ({
      zoneRangeFilter: {
        ...zoneRangeFilter,
        [range]: checked,
      },
    }));
  };

  resetAllFilters = () => this.setState(defaultFilters);

  render() {
    const {
      restaurants,
      priceRangeFilter,
      zoneRangeFilter,
      nameFilter,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Desculpe, a loja está indisponível no momento :(
        </MainColumn>
      );
    }

    return (
      <Router history={this.props.history || defaultHistory}>
        <MainColumn>
          <Filters
            name={nameFilter}
            priceRange={priceRangeFilter}
            zoneRange={zoneRangeFilter}
            setNameFilter={this.setNameFilter}
            setPriceRangeFilter={this.setPriceRangeFilter}
            setZoneRangeFilter={this.setZoneRangeFilter}
            resetAll={this.resetAllFilters}
          />
          <RestaurantList
            restaurants={restaurants}
            priceRangeFilter={priceRangeFilter}
            zoneRangeFilter={zoneRangeFilter}
            nameFilter={nameFilter}
          />
        </MainColumn>
      </Router>
    );
  }
}

export default App;
