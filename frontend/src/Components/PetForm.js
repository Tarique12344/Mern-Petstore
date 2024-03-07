// PetForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';
import logo from './Carousel1_pics/logo.jpg';

const PetForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [breed, setBreed] = useState('');
  const [category, setCategory] = useState('all'); // Default category is 'all'
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestData = {
      name,
      description,
      age,
      breed,
      image: imageURL,
      category, // Include category when submitting
    };

    try {
      setLoading(true);
      setErrorMessage('');

      const response = await fetch('http://localhost:5000/storefront', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log('Pet added successfully');
        // Handle success, e.g., redirect to another page
      } else {
        console.error('Error adding pet:', response.statusText);
        setErrorMessage('Error adding pet. Please try again.');
      }
    } catch (error) {
      console.error('Error adding pet:', error.message);
      setErrorMessage('Error adding pet. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavigationBar />
<<<<<<< HEAD
      <div style={{ marginTop: '50px' }}></div>
=======
      <img src={logo} alt='logo' className='logo' />
      <br />
>>>>>>> 080d02625a437138634afb67620628df56ca609e
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card login">
              <div className="card-body card-content">
                <h2 className="card-title text-center mb-4 login">Add a Pet</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="petName" className="form-label">
                      Pet Name:
                    </label>
                    <input
                      id="petName"
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="petDescription" className="form-label">
                      Pet Description:
                    </label>
                    <textarea
                      id="petDescription"
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="petAge" className="form-label">
                      Pet Age:
                    </label>
                    <input
                      id="petAge"
                      type="number"
                      className="form-control"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="petBreed" className="form-label">
                      Pet Breed:
                    </label>
                    <input
                      id="petBreed"
                      type="text"
                      className="form-control"
                      value={breed}
                      onChange={(e) => setBreed(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="petCategory" className="form-label">
                      Pet Category:
                    </label>
                    <select
                      id="petCategory"
                      className="form-control"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      {/* Add more categories if needed */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="petImage" className="form-label">
                      Pet Image URL:
                    </label>
                    <input
                      id="petImage"
                      type="url"
                      className="form-control"
                      value={imageURL}
                      onChange={(e) => setImageURL(e.target.value)}
                    />
                  </div>
                  <div className="text-center button" style={{ marginBottom: '20px' }}>
                    <button type="submit" disabled={loading} className="btn btn-success">
                      {loading ? 'Adding Pet...' : 'Add Pet'}
                    </button>
                  </div>
                  {errorMessage && <p className="text-center mt-3" style={{ color: 'red' }}>{errorMessage}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PetForm;
