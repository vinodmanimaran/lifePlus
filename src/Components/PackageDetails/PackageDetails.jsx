import React, {useState,useEffect} from 'react';
import LabScheduler from '../../Components/LabSchedule/LabSchedule.jsx';
import {Card} from 'react-bootstrap';
import LabTest from '../../Assets/about_assets/labtest.jfif';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

import '../../Pages/Labs/Labs.css';

const PackageDetails = ({Id }) => {
  const [isScheduleOpen, setIsScheduleOpen] = useState (false);
  const [showLabSchedule, setShowLabSchedule] = useState (false);

  const [sections, setSections] = useState ({
    description: false,
    benefitsUsage: false,
    testDuration: false,
  });
  const [cardHeight, setCardHeight] = useState ('auto');

  const handleScheduleClick = () => {
    setShowLabSchedule (prevState => !prevState);
  };

  const OpenSchedule = () => {
    setIsScheduleOpen (true);
  };

  const closePopup = () => {
    setIsScheduleOpen (false);
  };

  const toggleSection = section => {
    setSections (prevSections => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
    setCardHeight ('auto'); // Reset height to auto
    setTimeout (() => {
      const card = document.getElementById ('lab-card');
      if (card) {
        setCardHeight (`${card.scrollHeight}px`);
      }
    }, 0);
  };

  useEffect (
  () => {
    setCardHeight (
      `${document.getElementById (`lab-card-${Id}`).scrollHeight}px`
    );
  },
  [Id]
);

  return (
<div className="lab_tests_display">
      <Card id={`lab-card-${Id}`} style={{width: '680px', height: cardHeight}}>
    <Card.Title
      className="lab_test_name"
      style={{textAlign: 'left', marginLeft: '130px'}}
    >
      Premium Health Package
    </Card.Title>
    <Card.Body>
      <div className="test_content_btn" style={{marginTop: '-8%'}}>
        <h3 className="discount_text" style={{whiteSpace: 'wrap'}}>
          Discount % MRP
        </h3>

        <button
          className="schedule_btn"
          onClick={() => setIsScheduleOpen (!isScheduleOpen)}
        >
          {isScheduleOpen ? 'Hide Schedule' : 'Show Schedule'}
        </button>
      </div>

      <Card.Img
        src={LabTest}
        alt="Lab Test"
        style={{width: '100px', marginTop: '-11%'}}
        className="lab_test_img"
      />
      <div
        className="test_content"
        style={{
          marginTop: '-15%',
          fontSize: '10px',
          width: '750px',
          marginLeft: '20%',
        }}
      >
        <p className="p_name">
          Description of the Health Package
          {sections.description
            ? <AiOutlineMinus onClick={() => toggleSection ('description')} />
            : <AiOutlinePlus onClick={() => toggleSection ('description')} />}
        </p>
        {sections.description &&
          <div
            className="description_content"
            style={{marginLeft: '-5px', marginTop: '-5px', width: '300px'}}
          >
            This comprehensive health package includes a range of tests and screenings to assess
            your overall health. It covers various aspects, including blood count, cholesterol
            levels, and more.
          </div>}

        <p className="p_name">
          Benefits & Usage
          {sections.benefitsUsage
            ? <AiOutlineMinus onClick={() => toggleSection ('benefitsUsage')} />
            : <AiOutlinePlus onClick={() => toggleSection ('benefitsUsage')} />}
        </p>
        {sections.benefitsUsage &&
          <div
            className="benefits"
            style={{marginLeft: '-5px', marginTop: '-5px', width: '300px'}}
          >
            The Premium Health Package is designed to help you proactively manage your health. It
            enables early detection of potential issues and provides insights for a healthier
            lifestyle.
          </div>}

        <p className = 'p_name'
>
          Test Duration
          {sections.testDuration
            ? <AiOutlineMinus onClick={() => toggleSection ('testDuration')} />
            : <AiOutlinePlus onClick={() => toggleSection ('testDuration')} />}
        </p>
        {sections.testDuration &&
          <div
            className="duration"
            style={{marginLeft: '-5px', marginTop: '-5px', width: '300px'}}
          >
            The Health Package test duration varies based on the included tests. Typically, it
            takes a few minutes to collect samples, and results are available within a day.
          </div>}
      </div>
    </Card.Body>
    {isScheduleOpen && <LabScheduler onClose={closePopup} />}
  </Card>
</div>

  );
};

export default PackageDetails;
