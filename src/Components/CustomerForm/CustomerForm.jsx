import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import Geolib from 'geolib';
import './CustomerForm.css';

const CustomerForm = () => {
  const [formData, setFormData] = useState ({
    name: '',
    age: '',
    contactNumber: '',
    whatsappNumber: '',
    email: '',
    shippingAddress: '',
    billingAddress: '',
  });

  const [coordinates, setCoordinates] = useState (null);
  const [address, setAddress] = useState ('');
  const [isUserInteracting, setIsUserInteracting] = useState (false);
  const [geocodingError, setGeocodingError] = useState (null);

//   useEffect (
//     () => {
//       if (isUserInteracting) {
//         // Reverse geocoding to get the coordinates from the shipping address
//         if (formData.shippingAddress) {
//           try {
//             const geocodeResult = Geolib.geocode (formData.shippingAddress);

//             if (geocodeResult.length > 0) {
//               setCoordinates ({
//                 latitude: geocodeResult[0].latitude,
//                 longitude: geocodeResult[0].longitude,
//               });
//             } else {
//               setGeocodingError ('No coordinates found for the given address.');
//             }
//           } catch (error) {
//             setGeocodingError ('Error during geocoding. Please try again.');
//           }
//         }
//         setIsUserInteracting (false);
//       }
//     },
//     [formData.shippingAddress, isUserInteracting]
//   );

  const handleInputChange = e => {
    const {name, value} = e.target;
    setFormData ({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = async () => {
    try {
      const apiKey = '6000437dee7442019ee2704d106cb4fe';
      const address = formData.shippingAddress;

      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        address
      )}&key=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        setCoordinates({ lat, lng });
        console.log('Coordinates:', { lat, lng });
      } else {
        console.error('No results found for the address.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // You can perform additional actions with the obtained coordinates here
    // For example, update state, make additional API calls, etc.
  }, [coordinates]);


//   const handleMapClick = e => {
//     const {lat, lng} = e.latlng;
//     setCoordinates ({latitude: lat, longitude: lng});
//     setIsUserInteracting (true);

//     // Reverse geocoding to get the address from coordinates
//     try {
//       const reverseGeocodeResult = Geolib.reverseGeocode (
//         {latitude: lat, longitude: lng},
//         1
//       );

//       if (reverseGeocodeResult.length > 0) {
//         setAddress (reverseGeocodeResult[0].formattedAddress);
//       } else {
//         setGeocodingError ('No address found for the given coordinates.');
//       }
//     } catch (error) {
//       setGeocodingError ('Error during reverse geocoding. Please try again.');
//     }
//   };

  return (
    <div>
      <h4 className="custumer_form_title">Enter Your Details</h4>
      <Card className="customer_form">
        <Card.Body>
          <div className="input_row">
            <label htmlFor="name" className="detail-label">
              Name:
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              id="name"
              placeholder="Enter your name"
              required
              className = 'input_field'

            />
          </div>

          <div className="input_row">
            <label htmlFor="age" className="detail-label">
              Age:
            </label>
            <input
              type="text"
              value={formData.age}
              onChange={handleInputChange}
              id="age"
              placeholder="Enter your age"
              required
              className="input_field"
            />
          </div>

          <div className="input_row">
            <label htmlFor="contactNumber" className="detail-label">
              Contact Number:
            </label>
            <input
              type="tel"
              value={formData.contactNumber}
              onChange={handleInputChange}
              id="contactNumber"
              placeholder="Enter your contact number"
              required
              className = 'input_field'

            />
          </div>

          <div className="input_row">
            <label htmlFor="whatsappNumber" className="detail-label">
              Whatsapp Number:
            </label>
            <input
              type="tel"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              id="whatsappNumber"
              placeholder="Enter your Whatsapp number"
              required
              className = 'input_field'

            />
          </div>

          <div className="input_row">
            <label htmlFor="email" className="detail-label">
              Email:
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              placeholder="Enter your email"
              required
              className = 'input_field'

            />
          </div>

          <div className="input_row">
            <label htmlFor="shippingAddress" className="detail-label">
              Shipping Address:
            </label>
            <input
              type="text"
              id="shippingAddress"
              name="shippingAddress"
              placeholder="Enter your shipping address"
              value={formData.shippingAddress}
              onChange={handleInputChange}
              required
              className = 'input_field'

            />
          </div>

          <div className="input_row">
            <label htmlFor="billingAddress" className="detail-label">
              Billing Address:
            </label>
            <input
              type="text"
              value={formData.billingAddress}
              onChange={handleInputChange}
              id="billingAddress"
              placeholder="Enter your billing address"
              required
              className = 'input_field'

            />
          </div>
          <button className="save_btn" onClick={handleSubmit}>Save</button>
        </Card.Body>
      </Card>

      <div className="pin_location">
        <h4 style={{color: 'black'}}>Pin Location for Delivery</h4>

      </div>

          <div className="sub_total_container">
  <h4 classname="sub_total_title" style={{marginLeft:"-110px"}}>Sub total</h4>
  <Card className="sub_total_card" style={{marginLeft:"-110px"}}>
                  <Card.Body>
<div className="product_details_card">
  <div className="product">
                <p className="productName">Dr. Sharma</p>
                <div className="productmethod">
    <p>General Health Checkup</p>

                </div>
                <div className="productdate">
    <p>2023-12-01</p>
                </div>
                <div className="productdate">
    <p>10:00 AM</p>

                </div>


  </div>
  {/* Assuming the Doctor consultation has no specific price */}
  <div className="product_price">
    <p>Not Applicable</p>
  </div>
</div>

<div className="product_details_card">
  <div className="product">
    <p className="productName">Dr. Sharma</p>
    <div className="productmethod">
      <p>General Health Checkup</p>

    </div>
    <div className="productdate">
      <p>2023-12-01</p>
    </div>
    <div className="productdate">
      <p>10:00 AM</p>

    </div>

  </div>
  <div className="product_price">
    <p>Not Applicable</p>
  </div>
</div>

<div className="product_details_card">
  <div className="product">
    <p className="productName">Dr. Sharma</p>
    <div className="productmethod">
      <p>General Health Checkup</p>

    </div>
    <div className="productdate">
      <p>2023-12-01</p>
    </div>
    <div className="producttime">
      <p>10:00 AM</p>

    </div>

  </div>
  <div className="product_price">
    <p>Not Applicable</p>
  </div>
</div>

            <div className="product_price_details">
              <div className="product_price_gst">
                <p className="gst">GST:12%</p>
              </div>
              <div className="product_price_actual">
  <p className="actual_price">Total:2,000/-</p>
</div>

            </div>
            <div className="sub_total_btn">
              <button className="pay_btn">Pay</button>
              </div>
    </Card.Body>
  </Card>

                
</div>

</div>
    
  );
};

export default CustomerForm;
