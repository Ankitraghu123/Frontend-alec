// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import courseThumb from '../../assets/alec-img/courses/course-1.jpg'; // replace with actual image

// const TargetJudiciaryCourse = () => {
//     // const targetJudiciaryCourse = {
//     //     id: 3,
//     //     title: "Target Judiciary",
//     //     image: courseThumb,
//     //     features: [
//     //         "Recorded classes (10 subjects + GK/Hindi/English/Computer)",
//     //         "Doubt discussion group",
//     //         "Comprehensive coverage of judiciary syllabus",
//     //         "Flexible learning at your own pace",
//     //         "Regular updates with latest legal amendments"
//     //     ],
//     //     price: "₹25,000",
//     //     duration: "13 Months",
//     //     faculty: "Expert Judiciary Faculty",
//     //     type: "Recorded Course"
//     // };


//     const [courses, setCourses] = useState([]);
//       const [loading, setLoading] = useState(false);
//       const [filteredCourses, setFilteredCourses] = useState([]);
//       const { id: courseId } = useParams(); // Renamed to avoid confusion with categoryId
      
//       const fetchCourses = async () => {
//         setLoading(true);
//         try {
//           const response = await axios.get('https://backend-alic-5.onrender.com/api/alldisplay');
//           if (response.data) {
//             setCourses(response.data);
//             // Prioritize courseId (subcategory ID) from useParams, then fallback to selectedSubCategoryId
//             filterCourses(response.data, selectedCategoryId, courseId || selectedSubCategoryId);
//           }
//         } catch (error) {
//           console.error("Error fetching courses:", error);
//           toast.error("Failed to load courses. Please try again.");
//         } finally {
//           setLoading(false);
//         }
//       };
    
//       const filterCourses = (coursesList, categoryId, subCategoryId) => {
//         let filtered = coursesList;
//         console.log(courseId)
    
//         if(courseId){
//           console.log(filtered)
          
//           filtered = filtered.filter(course=>
//             course?.subsubCategory?._id == courseId
//           )
//           console.log(filtered)
    
//         }
    
        
    
//         if (subCategoryId && subCategoryId !== courseId) {
//           console.log(subCategoryId)
    
//           filtered = filtered.filter(course =>
//             course.subCategory && course.subCategory._id === subCategoryId
//           );
//         } 
    
//          if (categoryId) {
//           console.log(categoryId)
          
//           filtered = filtered.filter(course =>
//             course.category && course.category._id === categoryId
//           );
//         }
    
        
        
    
    
//         setFilteredCourses(filtered);
//       };
    
//       useEffect(() => {
//         fetchCourses();
//       }, [courseId, selectedCategoryId, selectedSubCategoryId]);

//     return (
//         <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6 mb-4">
//                         <Card className="h-100 shadow-sm border-0">
//                             <Card.Img
//                                 variant="top"
//                                 src={Array.isArray(course.images) ? course.images[0] : course.images}
//                                 alt={targetJudiciaryCourse.title}
//                                 style={{ height: '200px', objectFit: 'cover' }}
//                             />
//                             <Card.Header className="bg-white d-flex justify-content-between align-items-center">
//                                 <Card.Title className="mb-0">{course.title}</Card.Title>
//                                 <span style={{ color: "#C81A1E" }} className="fw-bold">
//                                        {course.Price}
//                                 </span>
//                             </Card.Header>
//                             <Card.Body>
//                                 <h6>Features:</h6>
//                                 <ul className="mb-3">
//                                     {targetJudiciaryCourse.features.map((feature, i) => (
//                                         <li key={i}>{feature}</li>
//                                     ))}
//                                 </ul>

//                                 <div className="card-text">
//                                     <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Price:</span>
//                                         <span>{course.Price}</span>
//                                     </div>
//                                     <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Duration:</span>
//                                         <span>{course.Durations || 'N/A'}</span>
//                                     </div>
//                                     <div className="d-flex justify-content-between mb-2 border-bottom">
//                                         <span className="fw-bold">Faculty:</span>
//                                         <span>{course.TrainerName || 'N/A'}</span>
//                                     </div>
//                                     <div className="d-flex justify-content-between mb-2">
//                                         <span className="fw-bold">Course Type:</span>
//                                         <span>{course.category?.name || 'N/A'}</span>
//                                     </div>
//                                 </div>
//                             </Card.Body>
//                             <Card.Footer className="bg-white">
//                                 <Link
//                                     to={`/courses/${targetJudiciaryCourse.id}`}
//                                     className="btn w-100 mb-2"
//                                     style={{ background: "#C81A1E", color: "white" }}
//                                 >
//                                     View Details
//                                 </Link>
//                                 <div className="d-flex gap-2">
//                                     <Button variant="outline-danger" className="w-50">Free Demo</Button>
//                                     <Button variant="outline-dark" className="w-50">Explore Courses</Button>
//                                 </div>
//                             </Card.Footer>
//                         </Card>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TargetJudiciaryCourse;



import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

const TargetJudiciaryCourse = ({ selectedCategoryId, selectedSubCategoryId }) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const { id: courseId } = useParams();
    
    // const fetchCourses = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get('https://backend-alic-5.onrender.com/api/alldisplay');
    //         if (response.data) {
    //             setCourses(response.data);
    //             // Prioritize courseId (subcategory ID) from useParams, then fallback to selectedSubCategoryId
    //             filterCourses(response.data, selectedCategoryId, courseId || selectedSubCategoryId);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching courses:", error);
    //         toast.error("Failed to load courses. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const filterCourses = (coursesList, categoryId, subCategoryId) => {
    //     let filtered = coursesList;
    //     console.log(courseId)

    //     if(courseId){
    //         console.log(filtered)
            
    //         filtered = filtered.filter(course=>
    //             course?.subsubCategory?._id == courseId
    //         )
    //         console.log(filtered)
    //     }

    //     if (subCategoryId && subCategoryId !== courseId) {
    //         console.log(subCategoryId)
    //         filtered = filtered.filter(course =>
    //             course.subCategory && course.subCategory._id === subCategoryId
    //         );
    //     } 

    //     if (categoryId) {
    //         console.log(categoryId)
    //         filtered = filtered.filter(course =>
    //             course.category && course.category._id === categoryId
    //         );
    //     }

    //     setFilteredCourses(filtered);
    // };

    // useEffect(() => {
    //     fetchCourses();
    // }, [courseId, selectedCategoryId, selectedSubCategoryId]);

    // if (loading) {
    //     return <div className="text-center py-5">Loading...</div>;
    // }

    // if (filteredCourses.length === 0) {
    //     return <div className="text-center py-5">No courses found</div>;
    // }


    console.log(selectedCategoryId, "TARGET")

    return (
        <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
            <div className="container">
                <div className="row justify-content-center">
                    {filteredCourses.map((course) => (
                        <div key={course._id} className="col-md-6 mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Img
                                    variant="top"
                                    src={Array.isArray(course.images) ? course.images[0] : course.images}
                                    alt={course.title}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Header className="bg-white d-flex justify-content-between align-items-center">
                                    <Card.Title className="mb-0">{course.title}</Card.Title>
                                    <span style={{ color: "#C81A1E" }} className="fw-bold">
                                        {course.Price}
                                    </span>
                                </Card.Header>
                                <Card.Body>
                                    <h6>Features:</h6>
                                    <ul className="mb-3">
                                        {course.features && course.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>

                                    <div className="card-text">
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="fw-bold">Price:</span>
                                            <span>{course.Price}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="fw-bold">Duration:</span>
                                            <span>{course.Durations || 'N/A'}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="fw-bold">Faculty:</span>
                                            <span>{course.TrainerName || 'N/A'}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="fw-bold">Course Type:</span>
                                            <span>{course.category?.name || 'N/A'}</span>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="bg-white">
                                    <Link
                                        to={`/courses/${course._id}`}
                                        className="btn w-100 mb-2"
                                        style={{ background: "#C81A1E", color: "white" }}
                                    >
                                        View Details
                                    </Link>
                                    <div className="d-flex gap-2">
                                        <Button variant="outline-danger" className="w-50">Free Demo</Button>
                                        <Button variant="outline-dark" className="w-50">Explore Courses</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TargetJudiciaryCourse;