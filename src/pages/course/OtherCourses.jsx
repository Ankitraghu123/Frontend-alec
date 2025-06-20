import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample course data (import or define this in your main file)
const coursesData = [ /* Your course objects here */ ];

const OtherCoursesSlider = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const coursesData = [
  {
    id: 1,
    title: "Foundation Course",
    features: [
      " Live classes on 10 subjects of Law, GK, English (Old+New Laws)  ",
      " Live chat with faculty - student interaction during the class.",
      " Recordings of all the live classes available same day",
      " Class notes (delivered by faculty in class)",
      " Study modules in hard copy (delivered at residence of student)",
      " Regular objective tests Prelims + Mains Topic wise ",
      " Separate live doubt clearing sessions and discussions on the objective tests.",
      " Regular descriptive tests on the pattern of Mains Exam.",
      " Live discussion on the model synopsis of each question of the descriptive test.",
      " Evaluation and individual review of the answer sheets of each student."

    ],
    price: "₹75,000",
    validity: "18 Months",
    faculty: "Nitesh Sir, Anamika Mam",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"
  },

  {
    id: 2,
    title: "Foundation Advanced",
    features: [
         "Live classes on 10 subjects of Law, GK, English (Old+New Laws)",
    "Live chat with faculty - student interaction during the class.",
    "Recordings of all the live classes available same day",
    "Class notes (delivered by faculty in class)",
    "Study modules in hard copy (delivered at residence of student)",
    "Regular objective tests (Prelims + Mains Topic wise)",
    "Separate live doubt clearing sessions and discussions on the objective tests.",
    "Regular descriptive tests on the pattern of Mains Exam.",
    "Live discussion on the model synopsis of each question of the descriptive test.",
    "Evaluation and individual review of the answer sheets of each student."


    ],
    price: "₹75,000",
    validity: "36 Months",
    faculty: "Nitesh Sir, Anamika Mam",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 3,
    title: "Target Judiciary",
    features: [
      " Caters to10 subjects of Law ( Major and Minor ), GK, Hindi , English & Computer ( Recorded )",
 "Revision classes for crucial topics ( Recorded ) & Doubt Discussion Group . "
    ],
    price: "₹25,000",
    validity: "13 Months",
    type: "Recorded Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"


  },
  {
    id: 4,
    title: "BNSS",
    features: [
      " Live Classes of BNSS",
"Recording of the LIVE classes" ,
"Topic test ",
" Validity - Till completion of Subject",
    ],
    price: "₹5,000",
    validity: "Till completion",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 5,
    title: "MP Local Laws",
    features: [
      "Live Classes",
      "Recorded videos of the live classes",
"Class Notes",
"Study Modules in Hard Copy ",
   "Objective Tests (For Prelims) ",
   " Descriptive Test (For Mains) ",
 "Duration of the course will be around 20-22 classes to complete the syllabus of the two Acts -  ",
 " MP Land Revenue Code ",
 "MP Accommodation Control Act ",






    ],
    price: "₹7,999",
    validity: "1 Year",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 6,
    title: "RJS Essay Writing",
    features: [
       "24 Live Classes",
    "Recordings of all the LIVE Classes",
    "70 Essay (40 Essay Classroom Discussion + 30 Practice Sets)",
    "Practice Set with Model Answers",
    "Evaluation of Essay with detailed feedback & Suggestion",
    "Personal Mentorship"
    ],
    price: "₹8,000",
    validity: "6 Months",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 7,
    title: "Translation Course",
    features: [
      "15+ classes (English ↔ Hindi)",
      "40+ practice sets",
"English to Hindi Translation:- 20+ Sets",
"Hindi to English Translation :- 20+ Sets",
// "Validity:- 6 Months",
"Mode:- Online / Offline",
    ],
    price: "₹5,000",
    validity: "6 Months",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 8,
    title: "Judgement Writing",
    features: [
 "Judgement Writing for State Judiciary Examination"  ,
      "MPCJ",
    "CGCJ",
    "UPPCS J",
    "UKPCS J",
    "Rajasthan Judiciary",
    "Delhi Judiciary"
    ],
    price: "₹5,000",
    validity: "6 Months",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 9,
    title: "Bharatiya Sakshya Adhiniyam (BSA)",
    features: [
       "LIVE Classes",
    "Recordings of LIVE Classes",
     "Test over app",
        "2 Attempt Each",
        "Answers with Explanation",
    ],
    price: "₹5,000",
    validity: "6 Months",
    faculty: "Nitesh Sir",
    type: "Live Course",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww"

  },
  {
    id: 10,
    title: "Essay & Precise Writing",
    features: [
      "Total Classes: 13+ classes",
         "Article writing: 20+ Sets",
        "Precise: 10+ Sets",
         "Validity: 6 Months",
    "Mode: Online / Offline",
    "Evaluation",

    ],
    price: "₹4,000",
    validity: "6 Months",
    type: "Recorded Course"
  }
  // ... more courses
];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
    <div className='mt-5 mb-5'>


      <h3 className="mb-4">Other Courses</h3>
      <Slider {...sliderSettings}>
        {coursesData
          .filter(c => c.id.toString() !== id) // Exclude current course
          .map(course => (
            <div key={course.id} className="px-2">
              <Card
                style={{ display: 'flex', flexDirection: 'row' }}
                className="h-100 cursor-pointer"
                onClick={() => navigate(`/courses/${course.id}`)}
              >
                <Card.Body style={{ flex: '1' }}>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>
                    <small className="text-muted">{course.type}</small><br />
                    <strong>Price:</strong> {course.price}
                  </Card.Text>
                </Card.Body>

                <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                  <Card.Img
                    src={course.imageUrl}
                    alt={course.title}
                    style={{
                      width: '200px',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </Card>
            </div>
          ))}
      </Slider>
        </div>
    </>
  );
};

export default OtherCoursesSlider;
