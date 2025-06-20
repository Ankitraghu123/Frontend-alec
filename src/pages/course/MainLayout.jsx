import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MpSidebar from './MpSidebar';
import FoundationCourses from './FoundationCourse';
import TargetJudiciaryCourse from './TargetJudiciary';
import PrelimsTestSeries from './PrelimsTestSeries';
import MainsTestSeries from './MainsTestSeries';
import { Layout } from '../../layouts/Layout';
import { CoursesAllGrid } from '../../components/courses/CoursesAllGrid';
import { fetchSubcategory, fetchcategory } from '../../api';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../../utils/base_url';

const CourseLayout = () => {
  const [activeTab, setActiveTab] = useState('foundation');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState([]);  // DATA


  console.log(selectedSubCategoryId, "kio");


  const [subCategoryShow, setSubCategoryShow] = useState([])
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchInitialData = async () => {
  //     if (id) {
  //       try {
  //         // Fetch subcategory by ID
  //         const subCategoryResponse = await axios.get(`${base_url}subsubcategory`);
  //         console.log(subCategoryResponse.data)
  //         const subCategory = subCategoryResponse.data.find(subCat => subCat._id === id);
  //         if (subCategory) {
  //           setSubCategoryShow(subCategory)
  //           setSelectedSubCategoryId(id);
  //           setSelectedCategoryId(subCategory.category); // Assuming subcategory has a category field with category ID
  //         } else {
  //           toast.error("Subcategory not found.");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching subcategory:", error);
  //         toast.error("Failed to load subcategory data. Please try again.");
  //       }
  //     }
  //   };
  //   fetchInitialData();
  // }, [id]);


const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}subsubcategory/${id}`);
      console.log(res, ":RES DATA")
      setSubCategoryShow(res.data);
      setSelectedCategoryId(res.data.category);
      setSelectedSubCategoryId(res.data._id);
    } catch (error) {
      toast.error("Failed to load subcategory.");
    } finally {
      setLoading(false);
    }
  };

  if (id) fetchInitialData();
}, [id]);


  const renderContent = () => {
    switch (activeTab) {
      case 'target':
        return <TargetJudiciaryCourse selectedCategoryId={selectedCategoryId} selectedSubCategoryId={selectedSubCategoryId} />;
      case 'prelims':
        return <PrelimsTestSeries selectedCategoryId={subCategoryShow} selectedSubCategoryId={selectedSubCategoryId} />;
      case 'mains':
        return <MainsTestSeries selectedCategoryId={subCategoryShow} selectedSubCategoryId={selectedSubCategoryId} />;
      case 'foundation':
      default:
        return <FoundationCourses selectedCategoryId={selectedCategoryId} selectedSubCategoryId={selectedSubCategoryId} />;
    }
  };

  {loading ? <div>Loading...</div> : renderContent()}


  return (
    <Layout header={9} footer={1}>
      <Container fluid>
        <Row>
          <CoursesAllGrid selectedSubCategoryId={selectedSubCategoryId} />
          <Col md={3} lg={2} className="p-0">
            <MpSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setSelectedCategoryId={setSelectedCategoryId}
              setSelectedSubCategoryId={setSelectedSubCategoryId}
            />
          </Col>
          <Col md={9} lg={10} className="">
            <h3 className="td_fs_10  ms-3">{subCategoryShow.name}</h3>
            {renderContent()}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CourseLayout;