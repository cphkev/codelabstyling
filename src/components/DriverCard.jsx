import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  box-shadow: 0 2px 4px ${(props) => props.theme.colors.cardShadow};
  background-color: ${(props) => props.theme.colors.cardBackground};
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const DriverName = styled.h2`
   font-size: 1.2rem;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
`;

const DriverDetails = styled.p`
 margin: 0.5rem 0;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
`;

const DriverCard = ({ driver, assignedTruck }) => {
  const { name, phone, email, address, description, image } = driver;

  // Check if address exists and provide fallback values if it's missing
  const addressDisplay = address
    ? `${address.street}, ${address.city}, ${address.zip}`
    : "Address not available";

  return (
    <Card>
      <Image src={image || "https://via.placeholder.com/250x150"} alt={name} />
      <Content>
        <DriverName>{name}</DriverName>
        <DriverDetails>
          <strong>Phone:</strong> {phone}
        </DriverDetails>
        <DriverDetails>
          <strong>Email:</strong> {email}
        </DriverDetails>
        <DriverDetails>
          <strong>Address:</strong> {addressDisplay}
        </DriverDetails>
        <DriverDetails>
          <strong>Assigned Truck:</strong> {assignedTruck}
        </DriverDetails>
        <DriverDetails>{description}</DriverDetails>
      </Content>
    </Card>
  );
};

DriverCard.propTypes = {
  driver: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    description: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      zip: PropTypes.string,
    }),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  assignedTruck: PropTypes.string.isRequired, 
};

export default DriverCard;
