// components/PetForm.js
import React, { useState } from 'react';

const PetForm = ({ onAddPet }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  const handleAddPet = async () => {
    try {
      // Perform validation if needed

      // Create a new pet object
      const newPet = { name, breed, age: parseInt(age) };

      // Send a POST request to the server
      const response = await fetch('http://localhost:5000/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPet),
      });

      // Check if the request was successful
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();

        // Notify the parent component about the new pet
        onAddPet(data);
      } else {
        console.error('Failed to add pet:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Pet</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddPet}>
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default PetForm;
