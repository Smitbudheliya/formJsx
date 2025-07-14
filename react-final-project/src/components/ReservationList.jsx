import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, cancelReservation } from '../redux/action/hotelActions.js';
import { Button, Card } from 'react-bootstrap';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { reservations, loading } = useSelector(state => state.hotel);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Your Reservations</h3>
      {loading && <div>Loading reservations...</div>}
      {!loading && reservations.length === 0 && <div>No reservations found.</div>}

      <div className="row">
        {reservations.map(res => (
          <div className="col-md-4 mb-4" key={res.id}>
            <Card>
              <Card.Body>
                <Card.Title>{res.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Room ID: {res.roomId}</Card.Subtitle>
                <Card.Text>
                  <strong>Check-in:</strong> {res.checkIn}<br />
                  <strong>Check-out:</strong> {res.checkOut}
                </Card.Text>
                <Button variant="danger" onClick={() => handleCancel(res.id)}>
                  Cancel
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
