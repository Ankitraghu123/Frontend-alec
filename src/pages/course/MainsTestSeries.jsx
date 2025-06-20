import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const MainsTestSeries = ({selectedCategoryId}) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('https://backend-alic-5.onrender.com/main/display');
            if (response.data && Array.isArray(response.data)) {
                setCourses(response.data);
            } else if (response.data && Array.isArray(response.data.data)) {
                setCourses(response.data.data);
            } else {
                console.error("API response data is not in expected format:", response.data);
                setCourses([]);
                toast.error("Invalid course data format received from server");
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching courses:", error);
            toast.error("Failed to load courses. Please try again.");
            setCourses([]);
            setLoading(false);
        }
    };

    const sanitizeHtml = (html) => {
        return { __html: DOMPurify.sanitize(html || '') };
    };

    if (loading) {
        return <div className="container my-5 text-center">Loading courses...</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                {courses.length > 0 ? (
                    courses.map((test) => (
                        <div className="col-md-6 mb-4" key={test._id}>
                            <Card className="h-100 shadow-sm">
                                {/* Image Carousel Section */}
                                {test.images && test.images.length > 0 ? (
                                    <Carousel 
                                        indicators={test.images.length > 1} 
                                        controls={test.images.length > 1}
                                        interval={null} // Disable auto-rotation
                                    >
                                        {test.images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <div 
                                                    className="d-block w-100"
                                                    style={{
                                                        height: '200px',
                                                        backgroundImage: `url(${image})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center'
                                                    }}
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                ) : (
                                    <div 
                                        className="bg-secondary d-flex justify-content-center align-items-center" 
                                        style={{ height: '200px' }}
                                    >
                                        <span className="text-white">No Image Available</span>
                                    </div>
                                )}

                                <Card.Header className="bg-white d-flex justify-content-between align-items-center">
                                    <Card.Title className="mb-0">
                                        {test.testmodule || 'Test Series'}
                                    </Card.Title>
                                    <span style={{ color: "#C81A1E" }} className="fw-bold">
                                        ₹{test.Price ? test.Price.toLocaleString('en-IN') : 'N/A'}
                                    </span>
                                </Card.Header>
                                <Card.Body>
                                    <h6>Features:</h6>
                                    <div 
                                        className="mb-3"
                                        dangerouslySetInnerHTML={sanitizeHtml(test.CourseDescription)}
                                    />

                                    <div className="card-text">
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="fw-bold">Price:</span>
                                            <span>₹{test.Price ? test.Price.toLocaleString('en-IN') : 'N/A'}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="fw-bold">Duration:</span>
                                            <span>{test.Durations || 'N/A'}</span>
                                        </div>
                                        {test.LastDate && (
                                            <div className="d-flex justify-content-between mb-2 border-bottom">
                                                <span className="fw-bold">Last Date:</span>
                                                <span>{new Date(test.LastDate).toLocaleDateString()}</span>
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>
                                <Card.Footer className="bg-white">
                                    <Link
                                        to={`/testseries/${test._id}`}
                                        className="btn w-100 mb-2"
                                        style={{ background: "#C81A1E", color: "white" }}
                                    >
                                        View Details
                                    </Link>
                                    <div className="d-flex gap-2">
                                        <Button variant="outline-danger" className="w-50">Free Demo</Button>
                                        <Button variant="outline-dark" className="w-50">Explore</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No test series available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainsTestSeries;



