import React from 'react';
import styled from 'styled-components';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Button from './components/Button';

const mediumScreen = `@media (max-width: 830px)`;
const smallScreen = `@media (max-width: 430px)`;

const FilterRow = styled.div`
  padding: 30px;
  font-size: 24px;
  display: flex;
  background-color: #00510a;
  margin-top: 10px;
  margin-bottom: 20px;

  border-radius: 20px 20px 20px 20px;
  box-shadow: 10px 10px 10px 5px black;
  border-color: #000000;

  ${mediumScreen} {
    flex-direction: column;
  }
`;



const PriceRangeFields = styled.span`
  margin: 0 20px;
  display: flex;

  ${mediumScreen} {
    margin: 10px;
  }

  ${smallScreen} {
    flex-direction: column;
  }
`;

const ZoneRangeFields = styled.span`
  margin: 0 20px;
  display: flex;

  ${mediumScreen} {
    margin: 10px;
  }

  ${smallScreen} {
    flex-direction: column;
  }
`;

const Filters = ({
  name,
  priceRange,
  zoneRange,
  setNameFilter,
  setPriceRangeFilter,
  setZoneRangeFilter,
  resetAll,
}) => (
  <FilterRow>
    <TextInput label="Procurar:" value={name} onChange={setNameFilter} />
    <ZoneRangeFields>
      Zona:
      <Checkbox
        label="Norte"
        checked={zoneRange.ZN}
        onChange={setZoneRangeFilter('ZN')}
      />
      <Checkbox
        label="Sul"
        checked={zoneRange.ZS}
        onChange={setZoneRangeFilter('ZS')}
      />
      <Checkbox
        label="Leste"
        checked={zoneRange.ZL}
        onChange={setZoneRangeFilter('ZL')}
      />
      <Checkbox
        label="Oeste"
        checked={zoneRange.ZO}
        onChange={setZoneRangeFilter('ZO')}
      />
      <Checkbox
        label="Centro"
        checked={zoneRange.C}
        onChange={setZoneRangeFilter('C')}
      />
    </ZoneRangeFields>
    <PriceRangeFields>
      Preço:
      <Checkbox
        label="$"
        checked={priceRange.$}
        onChange={setPriceRangeFilter('$')}
      />
      <Checkbox
        label="$$"
        checked={priceRange.$$}
        onChange={setPriceRangeFilter('$$')}
      />
      <Checkbox
        label="$$$"
        checked={priceRange.$$$}
        onChange={setPriceRangeFilter('$$$')}
      />
      <Checkbox
        label="$$$$"
        checked={priceRange.$$$$}
        onChange={setPriceRangeFilter('$$$$')}
      />
    </PriceRangeFields>
    
    <Button onClick={resetAll}>Limpar</Button>
  </FilterRow>
);

export default Filters;
