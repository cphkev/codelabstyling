import { useEffect, useState } from "react";
import styled from "styled-components";
import TruckCard from "../components/TruckCard";

const TruckList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
`;

const Trucks = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trucks")
      .then((response) => response.json())
      .then((data) => setTrucks(data))
      .catch((error) => console.error("Error fetching trucks:", error));
  }, []);

  return (
    <div>
      <h1>Trucks</h1>
      <TruckList>
        {trucks.map((truck) => (
          <TruckCard key={truck.id} truck={truck} />
        ))}
      </TruckList>
    </div>
  );
};

export default Trucks;
