import { Card, Button } from 'react-bootstrap';

const RoomDetails = ({ room }) => {
  return (
    <Card className="shadow-sm mt-5">
      <Card.Body>
        <Card.Title>{room.type} Room</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">₹{room.price}/night</Card.Subtitle>
        <Card.Text>
          <strong>Features:</strong> {room.features}<br />
          <strong>Status:</strong>{' '}
          <span className={room.available ? 'text-success' : 'text-danger'}>
            {room.available ? 'Available' : 'Not Available'}
          </span>
        </Card.Text>
        <Button variant="primary" disabled={!room.available}>
          Book Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RoomDetails;
