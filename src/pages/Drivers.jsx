import { useEffect, useState } from "react";
import styled from "styled-components";
import DriverCard from "../components/DriverCard";

const DriverList = styled.div`
 display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    // Fetch trucks and drivers data
    const fetchData = async () => {
      try {
        const driversResponse = await fetch("http://localhost:3000/drivers");
        const driversData = await driversResponse.json();
        const trucksResponse = await fetch("http://localhost:3000/trucks");
        const trucksData = await trucksResponse.json();

        setTrucks(trucksData);
        setDrivers(driversData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getAssignedTruck = (assignedTruckId) => {
    console.log("Assigned Truck ID:", assignedTruckId); // Debugging line
    if (!assignedTruckId) return "No truck assigned"; // Handle case where assignedTruckId is missing

    // Find the truck based on the assignedTruckId
    const truck = trucks.find((truck) => truck.id === assignedTruckId);
    console.log("Found truck:", truck); // Debugging line
    return truck ? truck.name : "No truck assigned"; // Return truck name or fallback if not found
  };

  return (
    <div>
      <h1>Drivers</h1>
      <DriverList>
        {drivers.map((driver) => (
          <DriverCard
            key={driver.id}
            driver={driver}
            assignedTruck={getAssignedTruck(driver.assignedTruck)}
          />
        ))}
      </DriverList>
    </div>
  );
};

export default Drivers;
