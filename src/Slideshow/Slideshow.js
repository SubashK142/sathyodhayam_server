import React, { useState } from 'react';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../Firebase/firebase';  // Import the Firestore instance
import '../News_feeds/news_feed.css';
import { Link } from 'react-router-dom';


const SubmitSlideshow = () => {
  const [formData, setFormData] = useState({
    Image_link: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newsFeedCollection = collection(db, "slideshow");  // Reference to your Firestore collection
      await addDoc(newsFeedCollection, formData);  // Add the document to Firestor
      alert('Slideshow submitted successfully!');
      setFormData({
        Image_link: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the article.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Slideshow of master Details</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.formGroup}>
          <label htmlFor="Image_link" style={styles.label}>Image Link (URL):</label>
          <input
            type="text"
            id="Image_link"
            name="Image_link"
            value={formData.Image_link}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      <Link to='/manageSlideshow'><button style={styles.link}>View All Records</button></Link>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    marginTop:'-40px',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    textAlign: 'center',
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  }
};

export default SubmitSlideshow;
