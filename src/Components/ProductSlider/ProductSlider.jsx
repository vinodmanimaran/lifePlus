import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import Slider from 'react-slick';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import ProductScheduler from '../../Components/ProductScheduler/ProductScheduler.jsx';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css';
import Slide1 from '../../Assets/about_assets/slide1.webp';
import Slide2 from '../../Assets/about_assets/slide2.webp';
import Slide3 from '../../Assets/about_assets/slide3.webp';
import Slide4 from '../../Assets/about_assets/slide4.webp';
import Slide5 from '../../Assets/about_assets/slide5.webp';

const ProductSlider = ({ Id}) => {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];
  const [isScheduleOpen, setIsScheduleOpen] = useState (false);
  const [showLabSchedule, setShowLabSchedule] = useState (false);

  const [sections, setSections] = useState ({
    description: false,
    benefitsUsage: false,
    manufacturingDate: false,
  });

  const [cardHeight, setCardHeight] = useState ('auto');

  const handleScheduleClick = () => {
    setShowLabSchedule (prevState => !prevState);
  };

  const toggleSection = section => {
    setSections (prevSections => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect (
    () => {
      const card = document.getElementById ('lab-card');
      if (card) {
        setCardHeight (
          sections.description ? `${card.scrollHeight}px` : 'auto'
        );
      }
    },
    [sections.description]
  );

  return (
    <Card className="product_card" id={`lab-card-${Id}`} styles={{height:cardHeight}}>
      <Card.Body>
        <Slider
          {...settings}
          className="product_slider_img"
          style={{width: '80px', marginLeft: '2px'}}
        >
          {slides.map ((slide, index) => (
            <div key={index}>
              <Card.Img
                src={slide}
                alt={`slide-${index + 1}`}
                style={{width: '65px'}}
              />
            </div>
          ))}
        </Slider>
        <Card.Title className="product_title">Violin spray</Card.Title>
        <div className="price">
          <h3 className="discount">Discount % MRP</h3>
          <h3 className="selling_price">Selling Price</h3>
        </div>
        <div className="product_content" >
          <div
            className="test_content"
            style={{
              width: '750px',
              marginLeft: '20%',
            }}
          >
            {renderSection ('description', 'Description of the Product')}
            {renderSection ('benefits', 'Benefits & usage')}
            {renderSection ('duration', 'Manufacturing Date & Expiry Date')}
          </div>

          {isScheduleOpen &&
            <ProductScheduler onClose={() => setIsScheduleOpen (false)} />}
        </div>
      </Card.Body>
      <button
        className="schedule"
        onClick={() => setIsScheduleOpen (true)}
      >
        Schedule order
      </button>
    </Card>
  );

  function renderSection (sectionKey, sectionTitle) {
    return (
      <div>
        <p className="p_name">
          {sectionTitle}
          {sections[sectionKey]
            ? <AiOutlineMinus onClick={() => toggleSection (sectionKey)} />
            : <AiOutlinePlus onClick={() => toggleSection (sectionKey)} />}
        </p>
        {sections[sectionKey] &&
          <div className={`${sectionKey}_content`} style={{margin: '5px'}}>
            {sectionKey === 'description' &&
              <div>
                Violini spray is a unique product designed to provide relief from
                various musculoskeletal conditions. It combines the benefits of
                traditional herbal remedies with modern scientific advancements
                to offer a natural and effective solution for pain and
                discomfort. The formulation includes carefully selected
                ingredients known for their anti-inflammatory and analgesic
                properties, making it a versatile product for everyday use.
              </div>}
            {sectionKey === 'benefits' &&
              <div className={`${sectionKey}`}>
                Violini spray offers several benefits, including:
                <ul>
                  <li>Relieving muscle and joint pain</li>
                  <li>Reducing inflammation and swelling</li>
                  <li>Improving flexibility and mobility</li>
                  <li>Providing a cooling and soothing sensation</li>
                </ul>
                To use, simply spray the product on the affected area and massage
                gently. It is suitable for use before or after physical
                activities and can be incorporated into your daily wellness
                routine.
              </div>}
            {sectionKey === 'duration' &&
              <div className={`${sectionKey}`}>
                This product was manufactured on MM/DD/YYYY and has an expiry
                date of MM/DD/YYYY.
              </div>}
          </div>}
      </div>
    );
  }
};

export default ProductSlider;
