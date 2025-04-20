import React, { useState } from "react";
import {
  PageContainer,
  Title,
  FilterBar,
  Select,
  CardList,
  LocationCard
} from "./style";
import Navbar from "../../components/Navbar";


const locations = [
  {
    id: 1,
    name: "GreenTech Donation Center",
    type: "Donation Centers",
    address: "123 Elm St, Davis, CA",
  },
  {
    id: 4,
    name: "EcoGive Station",
    type: "Donation Centers",
    address: "987 Walnut St, Davis, CA",
  },
  {
    id: 5,
    name: "Hope & Tech Foundation",
    type: "Donation Centers",
    address: "654 Maple Ln, Davis, CA",
  },
  {
    id: 2,
    name: "RecycleMore E-Waste Facility",
    type: "Recycling",
    address: "456 Oak Ave, Davis, CA",
  },
  {
    id: 6,
    name: "CleanLoop Center",
    type: "Recycling",
    address: "321 Cedar Rd, Davis, CA",
  },
  {
    id: 7,
    name: "Sustainable Future Recycling",
    type: "Recycling",
    address: "852 Willow Way, Davis, CA",
  },
  {
    id: 3,
    name: "City Hall Drop-off",
    type: "Drop-off Points",
    address: "789 Pine Blvd, Davis, CA",
  },
  {
    id: 8,
    name: "Northside E-Waste Bin",
    type: "Drop-off Points",
    address: "1100 Birch Ave, Davis, CA",
  },
  {
    id: 9,
    name: "Campus Collection Spot",
    type: "Drop-off Points",
    address: "1 UC Davis Way, Davis, CA",
  },
];


export default function LocationsPage() {
  const [filter, setFilter] = useState("Donation Centers");

  const filteredLocations = locations.filter(
    (loc) => loc.type === filter
  );

  return (
    <>
    <Navbar />
    <PageContainer>
      <Title>Find what you're looking for</Title>

      <FilterBar>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>Donation Centers</option>
          <option>Recycling</option>
          <option>Drop-off Points</option>
        </Select>
      </FilterBar>

      <CardList>
        {filteredLocations.map((loc) => (
          <LocationCard key={loc.id}>
            <h3>{loc.name}</h3>
            <p>{loc.address}</p>
          </LocationCard>
        ))}
      </CardList>
    </PageContainer>
    </>
  );
}
