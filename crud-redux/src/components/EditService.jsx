//6
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateService } from '../redux/action/serviceActions';
import { useNavigate, useParams } from 'react-router-dom';

const EditService = () => {
    const { id } = useParams();
    const services = useSelector(state => state.services);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const service = services.find(s => s.id === id);
        if (service) {
            setName(service.name);
            setDescription(service.description);
        }
    }, [id, services]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateService({ id, name, description }));
        navigate('/');
    };

    return (
        <div className="container mt-4">
            <h2>Edit Service</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-2" value={name} onChange={e => setName(e.target.value)} required />
                <textarea className="form-control mb-2" value={description} onChange={e => setDescription(e.target.value)} required />
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default EditService;
