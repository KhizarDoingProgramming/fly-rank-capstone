import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    bio: '',
    github: '',
    linkedin: '',
    calendly: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple basic validation
    if (!formData.name || !formData.title) {
      alert("Name and Title are required!");
      return;
    }
    alert("Settings saved successfully!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="settings-container">
      <h2>Portfolio Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Bio:</label>
          <textarea 
            name="bio" 
            value={formData.bio} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>GitHub URL:</label>
          <input 
            type="text" 
            name="github" 
            value={formData.github} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>LinkedIn URL:</label>
          <input 
            type="text" 
            name="linkedin" 
            value={formData.linkedin} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Calendly URL:</label>
          <input 
            type="text" 
            name="calendly" 
            value={formData.calendly} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="save-btn">Save Settings</button>
      </form>
    </div>
  );
}

export default App;
