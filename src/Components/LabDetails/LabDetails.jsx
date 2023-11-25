import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import LabScheduler from '../../Components/LabSchedule/LabSchedule.jsx';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import '../../Pages/Labs/Labs.css';
import LabTest from '../../Assets/about_assets/labtest.jfif';


const LabDetails = ({ Id}) => {
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

  useEffect (() => {
    // Update card height when component mounts
    setCardHeight (`${document.getElementById (`lab-card-${Id}`).scrollHeight}px`);
  }, [Id]);

  return (
    <div className="lab_tests_display">
      <Card id={`lab-card-${Id}`} style={{width: '550px', height: cardHeight}}>
        <Card.Title
          className="lab_test_name"
          style={{textAlign: 'left', marginLeft: '130px'}}
        >
          CBC Test-blood count test
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
            style={{marginTop: '-15%', width: '750px', marginLeft: '20%'}}
          >
            <p className="p_name">
              Description of the lab test
              {sections.description
                ? <AiOutlineMinus
                    onClick={() => toggleSection ('description')}
                  />
                : <AiOutlinePlus
                    onClick={() => toggleSection ('description')}
                  />}
            </p>
            {sections.description &&
              <div
                className="description_content"
                style={{marginTop: '-1%', marginLeft: '-1%', margin: '5px'}}
              >
                The Complete Blood Count (CBC) test measures various components of the blood, including red blood cells,
                white blood cells, and platelets. It provides valuable information about overall health and can help
                diagnose various conditions.
              </div>}

            <p className="p_name" style={{marginTop: '-1%'}}>
              Benefits & usage
              {sections.benefitsUsage
                ? <AiOutlineMinus
                    onClick={() => toggleSection ('benefitsUsage')}
                  />
                : <AiOutlinePlus
                    onClick={() => toggleSection ('benefitsUsage')}
                  />}
            </p>
            {sections.benefitsUsage &&
              <div
                className="benefits"
                style={{marginTop: '-2%', margin: '5px'}}
              >
                The CBC test is beneficial for detecting and monitoring a variety of medical conditions, including anemia,
                infection, and certain blood disorders. It is widely used in routine health check-ups.
              </div>}

            <p className="p_name" style={{marginTop: '1%'}}>
              Test Duration
              {sections.testDuration
                ? <AiOutlineMinus
                    onClick={() => toggleSection ('testDuration')}
                  />
                : <AiOutlinePlus
                    onClick={() => toggleSection ('testDuration')}
                  />}
            </p>
            {sections.testDuration &&
              <div
                className="duration"
                style={{margin: '12px', marginTop: '-2%', marginLeft: '-1%'}}
              >
                The CBC test typically takes a few minutes to collect a blood sample, and the results are usually
                available within a day. It is a quick and essential diagnostic tool for healthcare providers.
              </div>}
          </div>
        </Card.Body>
        {isScheduleOpen && <LabScheduler onClose={closePopup} />}
      </Card>
    </div>
  );
};

export default LabDetails;
