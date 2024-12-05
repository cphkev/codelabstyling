
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 300px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TruckImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const TruckName = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const TruckDetails = styled.p`
  margin: 0.5rem 0;
`;

const TruckCard = ({ truck }) => {
  return (
    <Card>
      <TruckImage src={truck.image} alt={truck.name} />
      <TruckName>{truck.name}</TruckName>
      <TruckDetails>
        <strong>Weight:</strong> {truck.weight} kg
      </TruckDetails>
      <TruckDetails>
        <strong>Capacity:</strong> {truck.capacity} tons
      </TruckDetails>
      <TruckDetails>
        <strong>Description:</strong> {truck.description}
      </TruckDetails>
    </Card>
  );
};
TruckCard.propTypes = {
  truck: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TruckCard;
