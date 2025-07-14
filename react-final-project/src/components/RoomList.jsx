// RoomList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/action/hotelActions.js';
import RoomDetails from './RoomDetails';

const RoomList = () => {
  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector(state => state.hotel);
  const [sortBy, setSortBy] = useState('');
  const [filterAvailable, setFilterAvailable] = useState('');

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const sortedRooms = [...rooms].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const filteredRooms = sortedRooms.filter(room => {
    if (filterAvailable === 'available') return room.available;
    if (filterAvailable === 'unavailable') return !room.available;
    return true;
  });

  if (loading) return <div className="text-center mt-4">Loading rooms...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container" style={{marginTop:100}}>
      <h2 className="mb-4 text-center">Available Rooms</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <select className="form-select" onChange={e => setSortBy(e.target.value)}>
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        <div className="col-md-6">
          <select className="form-select" onChange={e => setFilterAvailable(e.target.value)}>
            <option value="">Filter by availability</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filteredRooms.map(room => (
          <div className="col-md-4 mb-4" key={room.id}>
            <RoomDetails room={room} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
