// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import courseThumb1 from '../../assets/alec-img/courses/course-1.jpg'; // Update path if needed

// const FoundationCourses = () => {
//   const foundationCourses = [
//     {
//       id: 1,
//       title: "Foundation Course",
//       image: courseThumb1,
//       features: [
//         "Live classes (10 subjects: Law, GK, English)",
//         "Recordings, notes, study modules (hard copy)",
//         "Prelims+Mains tests + evaluations"
//       ],
//       price: "₹75,000",
//       duration: "18 Months",
//       faculty: "Nitesh Sir, Anamika Mam",
//       type: "Live Course"
//     },
//     {
//       id: 2,
//       title: "Foundation Advanced",
//       image: courseThumb1,
//       features: [
//         "Same as Foundation Course",
//         "Extended duration"
//       ],
//       price: "₹75,000",
//       duration: "36 Months",
//       faculty: "Nitesh Sir, Anamika Mam",
//       type: "Live Course"
//     }
//   ];

//   return (
//     <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
//       <div className="container">
//         <h3 className="text-center mb-4 fw-bold text-dark">Foundation Courses</h3>
//         <div className="row g-4">
//           {foundationCourses.map(course => (
//             <div className="col-md-6" key={course.id}>
//               <Card className="h-100 shadow-sm border-0">
//                 <div className="position-relative">
//                   <Card.Img
//                     variant="top"
//                     src={course.image}
//                     style={{ height: '250px', objectFit: 'cover' }}
//                   />
//                   <span className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small">
//                     {course.price}
//                   </span>
//                 </div>
//                 <Card.Body className="p-3">
//                   <Card.Title className="fs-5 text-primary mb-2">{course.title}</Card.Title>
//                   <ul className="mb-2 ps-3 small text-muted">
//                     {course.features.map((feature, i) => (
//                       <li key={i}>{feature}</li>
//                     ))}
//                   </ul>
//                   <div className="small">
//                     <div className="d-flex justify-content-between">
//                       <span className="fw-semibold">Duration:</span>
//                       <span>{course.duration}</span>
//                     </div>
//                     <div className="d-flex justify-content-between">
//                       <span className="fw-semibold">Faculty:</span>
//                       <span>{course.faculty}</span>
//                     </div>
//                     <div className="d-flex justify-content-between">
//                       <span className="fw-semibold">Type:</span>
//                       <span>{course.type}</span>
//                     </div>
//                   </div>
//                 </Card.Body>
//                 <Card.Footer className="bg-white border-0 p-3 pt-0">
//                   <Link
//                     to={`/courses/${course.id}`}
//                     className="btn w-100 mb-2"
//                     style={{ backgroundColor: "#C81A1E", color: "white" }}
//                   >
//                     View Details
//                   </Link>
//                   <div className="d-flex gap-2">
//                     <Button variant="outline-danger" className="w-50 btn-sm">Free Demo</Button>
//                     <Button variant="outline-dark" className="w-50 btn-sm">Explore</Button>
//                   </div>
//                 </Card.Footer>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoundationCourses;






// import React, { useState, useEffect } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const FoundationCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchCourses = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('https://backend-alic-5.onrender.com/api/alldisplay');
//       if (response.data) {
//         setCourses(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//       toast.error("Failed to load courses. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   if (loading) {
//     return (
//       <div className="py-4 text-center" style={{ backgroundColor: "#f5f7fa" }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
//       <div className="container">
//         <h3 className="text-center mb-4 fw-bold text-dark">Foundation Courses</h3>
//         <div className="row g-4">
//           {courses.map(course => (
//             <div className="col-md-6" key={course._id || course.id}>
//               <Card className="h-100 shadow-sm border-0">
//                 <div className="position-relative">
//                   <Card.Img
//                     variant="top"
//                     src={Array.isArray(course.images) ? course.images[0] : course.images}
//                     alt="Course"
//                     style={{ height: '250px', objectFit: 'cover' }}
//                   />
//                   <span className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small">
//                     {course.Price}
//                   </span>
//                 </div>
//                 <Card.Body className="p-3">
//                   <Card.Title className="fs-5 text-primary mb-2">{course.title}</Card.Title>
//                   <ul className="mb-2 ps-3 small text-muted">
//                     {course.features && course.features.length > 0 ? (
//                       course.features.map((feature, i) => (
//                         <li key={i}>{feature}</li>
//                       ))
//                     ) : (
//                       <li>No features listed</li>
//                     )}
//                   </ul>
//                   <div className="small">
//                     <div className="d-flex justify-content-between">
//                       <span className="fw-semibold">Duration:</span>
//                       <span>{course.Durations || 'N/A'}</span>
//                     </div>
//                     <div className="d-flex justify-content-between">
//                       <span className="fw-semibold">Faculty:</span>
//                       <span>{course.TrainerName || 'N/A'}</span>
//                     </div>
//                     <div className="d-flex justify-content-between">
//                       <span className="fw-semibold">Type:</span>
//                       <span>{course.category?.name || 'N/A'}</span>
//                     </div>
//                   </div>
//                 </Card.Body>
//                 <Card.Footer className="bg-white border-0 p-3 pt-0">
//                   <Link
//                     to={`/courses/${course._id || course.id}`}
//                     className="btn w-100 mb-2"
//                     style={{ backgroundColor: "#C81A1E", color: "white" }}
//                   >
//                     View Details
//                   </Link>
//                   <div className="d-flex gap-2">
//                     <Button variant="outline-danger" className="w-50 btn-sm">Free Demo</Button>
//                     <Button variant="outline-dark" className="w-50 btn-sm">Explore</Button>
//                   </div>
//                 </Card.Footer>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoundationCourses;





// import React, { useState, useEffect } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const FoundationCourses = ({ selectedCourseId }) => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchCourses = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('https://backend-alic-5.onrender.com/api/alldisplay');
//       if (response.data) {
//         setCourses(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//       toast.error("Failed to load courses. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const matchcourse = ()=>{
//     const match = courses._id == selectedCourseId;
//     console.log(matchcourse,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
//   }




//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // Filter courses based on selected category ID if provided
//   const filteredCourses = selectedCourseId
//     ? courses.filter(course => course.category?._id === selectedCourseId)
//     : courses;

//   if (loading) {
//     return (
//       <div className="py-4 text-center" style={{ backgroundColor: "#f5f7fa" }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
//       <div className="container">
//         <h3 className="text-center mb-4 fw-bold text-dark">
//           {selectedCourseId ? "Filtered Courses" : "All Foundation Courses"}
//         </h3>
//         <div className="row g-4">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map(course => (
//               <div className="col-md-6" key={course._id || course.id}>
//                 <Card className="h-100 shadow-sm border-0">
//                   <div className="position-relative">
//                     <Card.Img
//                       variant="top"
//                       src={Array.isArray(course.images) ? course.images[0] : course.images}
//                       alt="Course"
//                       style={{ height: '250px', objectFit: 'cover' }}
//                     />
//                     <span className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small">
//                       {course.Price}
//                     </span>
//                   </div>
//                   <Card.Body className="p-3">
//                     <Card.Title className="fs-5 text-primary mb-2">{course.title}</Card.Title>
//                     <ul className="mb-2 ps-3 small text-muted">
//                       {course.features && course.features.length > 0 ? (
//                         course.features.map((feature, i) => (
//                           <li key={i}>{feature}</li>
//                         ))
//                       ) : (
//                         <li>No features listed</li>
//                       )}
//                     </ul>
//                     <div className="small">
//                       <div className="d-flex justify-content-between">
//                         <span className="fw-semibold">Duration:</span>
//                         <span>{course.Durations || 'N/A'}</span>
//                       </div>
//                       <div className="d-flex justify-content-between">
//                         <span className="fw-semibold">Faculty:</span>
//                         <span>{course.TrainerName || 'N/A'}</span>
//                       </div>
//                       <div className="d-flex justify-content-between">
//                         <span className="fw-semibold">Type:</span>
//                         <span>{course.category?.name || 'N/A'}</span>
//                       </div>
//                     </div>
//                   </Card.Body>
//                   <Card.Footer className="bg-white border-0 p-3 pt-0">
//                     <Link
//                       to={`/courses/${course._id || course.id}`}
//                       className="btn w-100 mb-2"
//                       style={{ backgroundColor: "#C81A1E", color: "white" }}
//                     >
//                       View Details
//                     </Link>
//                     <div className="d-flex gap-2">
//                       <Button variant="outline-danger" className="w-50 btn-sm">Free Demo</Button>
//                       <Button variant="outline-dark" className="w-50 btn-sm">Explore</Button>
//                     </div>
//                   </Card.Footer>
//                 </Card>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center py-5">
//               <h5>No courses found {selectedCourseId ? "for this category" : ""}</h5>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoundationCourses;






// import React, { useState, useEffect } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const FoundationCourses = ({ selectedCourseId }) => {


// console.log(selectedCourseId,'aaaaaaaaaaaaaaaaaaaaaaaaassssssss')

//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filteredCourses, setFilteredCourses] = useState(null || []);

//   const fetchCourses = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('https://backend-alic-5.onrender.com/api/alldisplay');
//       if (response.data) {
//         setCourses(response.data);
//         // Initial filter when data is first loaded
//         filterCourses(response.data, selectedCourseId);

//       }
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//       toast.error("Failed to load courses. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filterCourses = (coursesList, categoryId) => {
//     if (categoryId) {
//       const filtered = coursesList.filter(course =>
//         course.category && course.category._id === categoryId
//       );
//       console.log(setFilteredCourses,'aaaaaaaaaaaaaaaaaaaaaaaaa')
//       setFilteredCourses(filtered);
//     } else {
//       setFilteredCourses(coursesList);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // Update filtered courses when selectedCourseId changes
//   useEffect(() => {
//     // if (courses.length > 0) {
//       filterCourses(courses, selectedCourseId);
//     // }
//   }, [selectedCourseId]);

//   if (loading) {
//     return (
//       <div className="py-4 text-center" style={{ backgroundColor: "#f5f7fa" }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
//       <div className="container">
//         <h3 className="text-center mb-4 fw-bold text-dark">
//           {selectedCourseId ? "Filtered Courses" : "All Foundation Courses"}
//         </h3>
//         <div className="row g-4">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map(course => (
//               <div className="col-md-6" key={course._id || course.id}>
//                 <Card className="h-100 shadow-sm border-0">
//                   <div className="position-relative">
//                     <Card.Img
//                       variant="top"
//                       src={Array.isArray(course.images) ? course.images[0] : course.images}
//                       alt="Course"
//                       style={{ height: '250px', objectFit: 'cover' }}
//                     />
//                     <span className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small">
//                       {course.Price}
//                     </span>
//                   </div>
//                   <Card.Body className="p-3">
//                     <Card.Title className="fs-5 text-primary mb-2">{course.title}</Card.Title>
//                     <ul className="mb-2 ps-3 small text-muted">
//                       {course.features && course.features.length > 0 ? (
//                         course.features.map((feature, i) => (
//                           <li key={i}>{feature}</li>
//                         ))
//                       ) : (
//                         <li>No features listed</li>
//                       )}
//                     </ul>
//                     <div className="small">
//                       <div className="d-flex justify-content-between">
//                         <span className="fw-semibold">Duration:</span>
//                         <span>{course.Durations || 'N/A'}</span>
//                       </div>
//                       <div className="d-flex justify-content-between">
//                         <span className="fw-semibold">Faculty:</span>
//                         <span>{course.TrainerName || 'N/A'}</span>
//                       </div>
//                       <div className="d-flex justify-content-between">
//                         <span className="fw-semibold">Type:</span>
//                         <span>{course.category?.name || 'N/A'}</span>
//                       </div>
//                     </div>
//                   </Card.Body>
//                   <Card.Footer className="bg-white border-0 p-3 pt-0">
//                     <Link
//                       to={`/courses/${course._id || course.id}`}
//                       className="btn w-100 mb-2"
//                       style={{ backgroundColor: "#C81A1E", color: "white" }}
//                     >
//                       View Details
//                     </Link>
//                     <div className="d-flex gap-2">
//                       <Button variant="outline-danger" className="w-50 btn-sm">Free Demo</Button>
//                       <Button variant="outline-dark" className="w-50 btn-sm">Explore</Button>
//                     </div>
//                   </Card.Footer>
//                 </Card>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center py-5">
//               <h5>No courses found {selectedCourseId ? "for this category" : ""}</h5>
//               {!selectedCourseId && (
//                 <Button
//                   variant="primary"
//                   onClick={fetchCourses}
//                   className="mt-3"
//                 >
//                   Retry Loading Courses
//                 </Button>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoundationCourses;
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const FoundationCourses = ({ selectedCategoryId, selectedSubCategoryId }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { id: courseId } = useParams(); // Renamed to avoid confusion with categoryId

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://backend-alic-5.onrender.com/api/alldisplay');
      if (response.data) {
        setCourses(response.data);
        // Prioritize courseId (subcategory ID) from useParams, then fallback to selectedSubCategoryId
        filterCourses(response.data, selectedCategoryId, courseId || selectedSubCategoryId);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Failed to load courses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filterCourses = (coursesList, categoryId, subCategoryId) => {
    let filtered = coursesList;
    console.log(courseId)

    if(courseId){
      console.log(filtered)

      filtered = filtered.filter(course=>
        course?.subsubCategory?._id == courseId
      )
      console.log(filtered)

    }



    if (subCategoryId && subCategoryId !== courseId) {
      console.log(subCategoryId)

      filtered = filtered.filter(course =>
        course.subCategory && course.subCategory._id === subCategoryId
      );
    }

     if (categoryId) {
      console.log(categoryId)

      filtered = filtered.filter(course =>
        course.category && course.category._id === categoryId
      );
    }





    setFilteredCourses(filtered);
  };

  useEffect(() => {
    fetchCourses();
  }, [courseId, selectedCategoryId, selectedSubCategoryId]);

  if (loading) {
    return (
      <div className="py-4 text-center" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
      <div className="container">
        <h3 className="text-center mb-4 fw-bold text-dark">
          {(courseId || selectedCategoryId || selectedSubCategoryId) ? "" : "All Foundation Courses"}
        </h3>
        <div className="row g-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div className="col-md-6" key={course._id || course.id}>
                <Card className="h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={Array.isArray(course.images) ? course.images[0] : course.images}
                      alt="Course"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small">
                     ₹ {course.Price}
                    </span>
                  </div>
                  <Card.Body className="p-3">
                    <Card.Title className="fs-5 text-primary mb-2">{course.title}</Card.Title>
                    {/* <ul className="mb-2 ps-3 small text-muted">
                      {course.features && course.features.length > 0 ? (
                        course.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))
                      ) : (
                        <li>No features listed</li>
                      )}
                    </ul> */}
                    <div className="small">
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">Duration:</span>
                        <span>{course.Durations || 'N/A'}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">Faculty:</span>
                        <span>{course.TrainerName || 'N/A'}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">Type:</span>
                        <span>{course.category?.name || 'N/A'}</span>
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0 p-3 pt-0">
                    <Link
                      to={`/courses/${course._id || course.id}`}
                      className="btn w-100 mb-2"
                      style={{ backgroundColor: "#C81A1E", color: "white" }}
                    >
                      View Details
                    </Link>
                    <div className="d-flex gap-2">
                      <Button variant="outline-danger" className="w-50 btn-sm">Free Demo</Button>
                      <Link className='w-50' to={`/courses/${course._id || course.id}`}>
                      <Button variant="outline-dark" className="w-100 btn-sm">Explore</Button>
                      </Link>

                    </div>
                  </Card.Footer>
                </Card>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h5>No courses found {(courseId || selectedCategoryId || selectedSubCategoryId) ? "for this selection" : ""}</h5>
              {!(courseId || selectedCategoryId || selectedSubCategoryId) && (
                <Button
                  variant="primary"
                  onClick={fetchCourses}
                  className="mt-3"
                >
                  Retry Loading Courses
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoundationCourses;