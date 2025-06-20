// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
// import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
// import callIcon from "../../assets/img/icons/call.svg";
// import envelopeIcon from "../../assets/img/icons/envlop.svg";
// import Logo from "../../assets/alec-img/courses/alec-for-judiciary-removebg-preview.png";
// import { toast } from "react-toastify";
// import { fetchcategory } from "../../api";

// export const HeaderNine = () => {
//   const [categories, setCategories] = useState([]);
//   const [courses, setCourses] = useState([]); // if you want to use course count
//   const [loading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   const fetchCategories = async () => {
//   //     setLoading(true);
//   //     try {
//   //       const response = await fetch("https://backend-alic-5.onrender.com/category");
//   //       const data = await response.json();
//   //       if (data) {
//   //         setCategories(data);
//   //       }
//   //     } catch (error) {
//   //       console.error("Error fetching categories:", error);
//   //       toast.error("Failed to load categories. Please try again.");
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchCategories();
//   // }, []);


//   useEffect(() => {
//     const fetchCategories = async () => {
//       setLoading(true);
//       try {
//         const response = await fetchcategory();
//         if (response.data) {
//           setCategories(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         toast.error("Failed to load categories. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCategories();
//   }, []);


//   useMobilemenu();
//   useStickyHeader();

//   return (
//     <header className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
//       <div className="td_top_header td_heading_bg td_white_color">
//         <div className="td_top_header_in">
//           <div className="td_top_header_left">
//             <ul className="td_header_contact_list td_mp_0 td_normal">
//               <li style={{ listStyle: "none" }}>
//                 <img src={envelopeIcon} alt="envelope icon" />
//                 <span>
//                   Address:{" "}
//                   <a href="mailto:management@alec.co.in">
//                     3rd Floor, Radhika Heights, 284, in front of APT House,
//                     Zone-II, Maharana Pratap Nagar, Bhopal, Madhya Pradesh
//                     462011
//                   </a>
//                 </span>
//               </li>
//               <li>
//                 <img src={envelopeIcon} alt="envelope icon" />
//                 <span>
//                   Email:{" "}
//                   <a href="mailto:management@alec.co.in">management@alec.co.in</a>
//                 </span>
//               </li>
//               <li>
//                 <img src={callIcon} alt="call icon" />
//                 <span>
//                   Call: <a href="tel:+919691073595">+91 9691073595</a>
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="td_main_header">
//         <div className="px-3 px-md-5">
//           <div className="td_main_header_in">
//             <div className="td_main_header_left">
//               <Link className="td_site_branding td_accent_color" to="/">
//                 <img
//                   id="logo"
//                   className="logos"
//                   src={Logo}
//                   alt="Logo"
//                   style={{ width: "200px" }}
//                 />
//               </Link>
//             </div>

//             <div className="td_main_header_right">
//               <nav className="td_nav">
//                 <div className="td_nav_list_wrap">
//                   <div className="td_nav_list_wrap_in">
//                     <ul className="td_nav_list">
//                       <li><Link to="/">Home</Link></li>
//                       <li className="menu-item-has-children">
//                         <Link to="">About</Link>
//                         <ul>
//                           <li><Link to="/about">About the institute</Link></li>
//                           <li><Link to="/about-institue">About the Director</Link></li>
//                           <li><Link to="/about-why">Why AASHAYEIN JUDICIARY (ALEC)?</Link></li>
//                           <li><Link to="/about-Director">Director's Message</Link></li>
//                           <li><Link to="/success-stories">Our Success Stories</Link></li>
//                         </ul>
//                       </li>

//                       <li className="menu-item-has-children">
//                         <Link to="/courses-grid-view">Courses</Link>
//                         <ul>
//                           <li><Link to="/coursesone"> { <select
//         name="category"
//         value={formData.category}
//         onChange={handleInputChange}
//         className={`w-full p-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//       >
//         <option value="">Select a category</option>
//         {categories.map((category) => (
//           <option key={category._id} value={category._id}>
//             {category.name}
//           </option>
//         ))}
//       </select>}</Link></li>
//                           {/* <li><Link to="/coursesone">Recorded Courses</Link></li>
//                           <li><Link to="/coursesone">Test Series </Link></li> */}
//                           {/* <li><Link to="/about-Director">Director's Message</Link></li>
//                           <li><Link to="/success-stories">Our Success Stories</Link></li> */}
//                         </ul>
//                       </li>
//                       {/* <li><Link to="/courses-grid-view">Courses</Link></li> */}
//                       <li><Link to="/blog">Blogs</Link></li>
//                       <li><Link to="/judgements">Judgements</Link></li>
//                       <li><Link to="/enquiry">Enquiry</Link></li>

//                       <li className="menu-item-has-children">
//                         <Link to="">Syllabus</Link>
//                         <ul>
//                           {categories.map((category) => (
//                             // {id: console.log(category, "JJJ")},
//                             <li key={category._id}>
//                               <Link to={`/syllabus/${category._id}`}>
//                                 {category.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </li>

//                       {/* <li><Link to="/enroll">Enroll</Link></li> */}
//                       <li><Link to="/contact">Contact</Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </nav>

//               <div id="social" className="td_hero_icon_btns position-relative">
//                 <div className="td_footer_social_btns td_fs_20">
//                   <a href="https://www.facebook.com/ALEC.AashayeinLawEducationCenter/?ref=aymt_homepage_panel" className="td_center" style={{ color: "#1877F2" }}>
//                     <i className="fa-brands fa-facebook-f"></i>
//                   </a>
//                   <a href="https://www.instagram.com/aashayein_judiciary" className="td_center" style={{ color: "#E4405F" }}>
//                     <i className="fa-brands fa-instagram"></i>
//                   </a>
//                   <a href="#" className="td_center" style={{ color: "#25D366" }}>
//                     <i className="fa-brands fa-whatsapp"></i>
//                   </a>
//                   <a href="https://www.youtube.com/@aashayeinJ" className="td_center" style={{ color: "#FF0000" }}>
//                     <i className="fa-brands fa-youtube"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };





// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
// import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
// // import callIcon from "../../assets/img/icons/call.svg";
// // import envelopeIcon from "../../assets/img/icons/envlop.svg";
// import Logo from "../../assets/alec-img/courses/alec-for-judiciary-removebg-preview.png";
// import { toast } from "react-toastify";
// import { fetchcategory } from "../../api";

// import axios from 'axios'



// export const HeaderNine = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");

// const [test, settest] = useState(null)

//   const navigate = useNavigate();

//   const handleCategoryChange = (e) => {
//     const categoryId = e.target.value;
//     setSelectedCategory(categoryId);

//     // Navigate to courses page with the selected category ID
//     if (categoryId) {
//       navigate(`/coursesone?category=${categoryId}`);
//     }
//   };
//   const Syllabus = async () => {
//     const api = "https://backend-alic-5.onrender.com/syllabuscategory"; // syllabuscategory API

//     try {
//       const response = await axios.get(api);
//       console.log(response, 'sdsdsdsdssdsdsdsdsdsdbvsdsvdsvdsbvdsdvbnsdvnbsdvnb')
//       settest(response.data)
//       // Check if the response is ok (status 200-299)
//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }


//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };


//   useEffect(() => {
//     Syllabus();
//   }, [])



//   useEffect(() => {
//     const fetchCategories = async () => {
//       setLoading(true);
//       try {
//         const response = await fetchcategory();
//         if (response.data) {
//           setCategories(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         toast.error("Failed to load categories. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCategories();


//   }, []);

//   useMobilemenu();
//   useStickyHeader();

//   return (
//     <header className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
//       {/* Top header section remains the same */}
//       <div className="td_top_header td_heading_bg td_white_color">
//         {/* ... existing top header code ... */}
//       </div>

//       <div className="td_main_header">
//         <div className="px-3 px-md-5">
//           <div className="td_main_header_in">
//             <div className="td_main_header_left">
//               <Link className="td_site_branding td_accent_color" to="/">
//                 <img
//                   id="logo"
//                   className="logos"
//                   src={Logo}
//                   alt="Logo"
//                   style={{ width: "200px" }}
//                 />
//               </Link>
//             </div>

//             <div className="td_main_header_right">
//               <nav className="td_nav">
//                 <div className="td_nav_list_wrap">
//                   <div className="td_nav_list_wrap_in">
//                     <ul className="td_nav_list">
//                       <li><Link to="/">Home</Link></li>
//                       <li className="menu-item-has-children">
//                         <Link to="">About</Link>
//                         <ul>
//                           <li><Link to="/about">About the institute</Link></li>
//                           <li><Link to="/about-institue">About the Director</Link></li>
//                           <li><Link to="/about-why">Why AASHAYEIN JUDICIARY (ALEC)?</Link></li>
//                           <li><Link to="/about-Director">Director's Message</Link></li>
//                           <li><Link to="/success-stories">Our Success Stories</Link></li>
//                         </ul>
//                       </li>
//                       <li className="menu-item-has-children">
//                         <Link to="/courses-grid-view">Courses</Link>
//                         <ul className="custom-dropdown">
//                           <li>
//                             <div className="dropdown-header">Select a category</div>
//                             {categories.map((category) => (
//                               <li key={category._id}>
//                                 <Link
//                                   to={`/coursesone/${category?._id}`}
//                                   className="dropdown-item"
//                                   onClick={() => setSelectedCategory(category._id)}
//                                 >
//                                   {category.name}
//                                 </Link>
//                               </li>
//                             ))}
//                           </li>
//                         </ul>
//                       </li>
//                       <li><Link to="/blog">Blogs</Link></li>
//                       <li><Link to="/judgements">Judgements</Link></li>
//                       <li><Link to="/enquiry">Enquiry</Link></li>

//                       <li className="menu-item-has-children">
//                         <Link to="">Syllabus</Link>
//                         <ul>
//                           {test.map((category) => (
//                             console.log(category, "PO"),
//                             <li key={category._id}>
//                               <Link to={`/syllabus/${category._id}`}>
//                                 {/* syllbus  */}
//                                 {category.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </li>

//                       <li><Link to="/contact">Contact</Link></li>
//                     </ul>
//                   </div>
//                 </div>
//               </nav>

//               <div id="social" className="td_hero_icon_btns position-relative">
//                 <div className="td_footer_social_btns td_fs_20">
//                   <a href="https://www.facebook.com/ALEC.AashayeinLawEducationCenter/?ref=aymt_homepage_panel" className="td_center" style={{ color: "#1877F2" }}>
//                     <i className="fa-brands fa-facebook-f"></i>
//                   </a>
//                   <a href="https://www.instagram.com/aashayein_judiciary" className="td_center" style={{ color: "#E4405F" }}>
//                     <i className="fa-brands fa-instagram"></i>
//                   </a>
//                   <a href="#" className="td_center" style={{ color: "#25D366" }}>
//                     <i className="fa-brands fa-whatsapp"></i>
//                   </a>
//                   <a href="https://www.youtube.com/@aashayeinJ" className="td_center" style={{ color: "#FF0000" }}>
//                     <i className="fa-brands fa-youtube"></i>
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
import Logo from "../../assets/alec-img/courses/alec-for-judiciary-removebg-preview.png";
import { toast } from "react-toastify";
import { fetchcategory } from "../../api";
import axios from 'axios';

export const HeaderNine = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [syllabusCategories, setSyllabusCategories] = useState([]);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);

    // Navigate to courses page with the selected category ID
    if (categoryId) {
      navigate(`/coursesone?category=${categoryId}`);
    }
  };

  const fetchSyllabusCategories = async () => {
    const api = "https://backend-alic-5.onrender.com/syllabuscategory"; // syllabuscategory API

    try {
      const response = await axios.get(api);
      if (response && response.data) {
        setSyllabusCategories(response.data); // Save syllabus categories
      } else {
        toast.error("Failed to fetch syllabus categories");
      }
    } catch (error) {
      console.error("Error fetching syllabus:", error);
      toast.error("Failed to load syllabus categories. Please try again.");
    }
  };

  useEffect(() => {
    fetchSyllabusCategories();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetchcategory();
        if (response.data) {
          setCategories(response.data);
        } else {
          toast.error("No categories found.");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useMobilemenu();
  useStickyHeader();

  return (
    <header className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
      <div className="td_top_header td_heading_bg td_white_color">
        {/* ... existing top header code ... */}
      </div>

      <div className="td_main_header">
        <div className="px-3 px-md-5">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <Link className="td_site_branding td_accent_color" to="/">
                <img
                  id="logo"
                  className="logos"
                  src={Logo}
                  alt="Logo"
                  style={{ width: "200px" }}
                />
              </Link>
            </div>

            <div className="td_main_header_right">
              <nav className="td_nav">
                <div className="td_nav_list_wrap">
                  <div className="td_nav_list_wrap_in">
                    <ul className="td_nav_list">
                      <li><Link to="/">Home</Link></li>
                      <li className="menu-item-has-children">
                        <Link to="#">About</Link>
                        <ul>
                          <li><Link to="/about">About the institute</Link></li>
                          <li><Link to="/about-institue">About the Director</Link></li>
                          <li><Link to="/about-why">Why AASHAYEIN JUDICIARY (ALEC)?</Link></li>
                          <li><Link to="/about-Director">Director's Message</Link></li>
                          <li><Link to="/success-stories">Our Success Stories</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/courses-grid-view">Courses</Link>
                        <ul className="custom-dropdown">
                          <li>
                            <div className="dropdown-header">Select a category</div>
                            {categories.map((category) => (
                              <li key={category._id}>
                                <Link
                                  to={`/coursesone/${category?._id}`}
                                  className="dropdown-item"
                                  onClick={() => setSelectedCategory(category._id)}
                                >
                                  {category.name}
                                </Link>
                              </li>
                            ))}
                          </li>
                        </ul>
                      </li>
                      <li><Link to="/blog">Blogs</Link></li>
                      <li><Link to="/judgements">Judgements</Link></li>
                      <li><Link to="/enquiry">Enquiry</Link></li>

                      <li className="menu-item-has-children">
                        <Link to="#">Syllabus</Link>
                        <ul>
                          {syllabusCategories && syllabusCategories.length > 0 ? (
                            syllabusCategories.map((category) => (
                              <li key={category._id}>
                                <Link to={`/syllabus/${category._id}`}>
                                  {category.name}
                                </Link>
                              </li>
                            ))
                          ) : (
                            <li>No syllabus categories available</li>
                          )}
                        </ul>
                      </li>

                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div id="social" className="td_hero_icon_btns position-relative">
                <div className="td_footer_social_btns td_fs_20">
                  <a href="https://www.facebook.com/ALEC.AashayeinLawEducationCenter/?ref=aymt_homepage_panel" className="td_center" style={{ color: "#1877F2" }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/aashayein_judiciary" className="td_center" style={{ color: "#E4405F" }}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="td_center" style={{ color: "#25D366" }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="https://www.youtube.com/@aashayeinJ" className="td_center" style={{ color: "#FF0000" }}>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
