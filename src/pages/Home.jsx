// src/pages/Home.jsx
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const TruckImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 2rem 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Trucking Company App</h1>
      <TruckImage src="https://via.placeholder.com/800x400" alt="Truck" />
      <p>
        This application helps manage trucking companies by keeping track of
        trucks, drivers, and registrations.
      </p>
    </HomeContainer>
  );
};

export default Home;
