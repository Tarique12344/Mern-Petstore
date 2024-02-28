import React, { useState } from 'react';

const PetForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestData = {
      name,
      description,
      age,
      image,
    };

    try {
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
      }
    } catch (error) {
      console.error('Error adding pet:', error.message);
    }
  };

  return (
    <div>
      <h2>Add a Pet</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="url" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default PetForm;
