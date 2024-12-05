import { useState } from "react";
import { useEffect } from "react";


const RegisterDriver = () => {
    const [formData, setFormData] = useState({
      name: "",
      license: "",
      phone: "",
      email: "",
      street: "",
      zip: "",
      city: "",
      assignedTruck: "",
      agreeToTerms: false,
    });
  
    const [trucks, setTrucks] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/trucks")
        .then((response) => response.json())
        .then((data) => setTrucks(data))
        .catch((error) => console.error("Error fetching trucks:", error));
    }, []);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!formData.agreeToTerms) {
        alert("You must agree to the terms and conditions.");
        return;
      }
  
      fetch("http://localhost:3000/drivers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Driver registered successfully!");
          setFormData({
            name: "",
            license: "",
            phone: "",
            email: "",
            street: "",
            zip: "",
            city: "",
            assignedTruck: "",
            agreeToTerms: false,
          });
        })
        .catch((error) => console.error("Error registering driver:", error));
    };
  
    return (
      <div style={{ maxHeight: "100vh", overflowY: "auto", padding: "20px",paddingBottom: "80px"}}>
        <h1>Register New Driver</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="license">License Number:</label><br />
          <input
            type="text"
            id="license"
            name="license"
            value={formData.license}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="phone">Phone Number:</label><br />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="street">Street Address:</label><br />
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="zip">ZIP Code:</label><br />
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="city">City:</label><br />
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          /><br /><br />
  
          <label htmlFor="assignedTruck">Assigned Truck:</label><br />
          <select
            id="assignedTruck"
            name="assignedTruck"
            value={formData.assignedTruck}
            onChange={handleChange}
          >
            <option value="">Select a Truck</option>
            {trucks.map((truck) => (
              <option key={truck.id} value={truck.id}>
                {truck.name}
              </option>
            ))}
          </select><br /><br />
  
          <label htmlFor="agreeToTerms">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions
          </label><br /><br />
  
          <button type="submit" style={{ position: "relative" }}>
            Register Driver
          </button>
        </form>
      </div>
    );
  };
  
  export default RegisterDriver;
  