import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomSelect from "../components/CustomSelect";
import GoalComponent from "../components/GoalComponent";

const AddGoal = () => {
  const options = [
    { label: "Category", value: "" },
    { label: "Gadgets and Electronics", value: "1" },
    { label: "Health and Fitness Goals", value: "2" },
    { label: "Skill Development Courses", value: "3" },
    { label: "Charitable Donations", value: "4" },
    { label: "Home Decor and Furnishing", value: "5" },
    { label: "Other", value: "6" },
  ];

  return (
    <main className="main-content">
      {/* section start from here */}
      <section className="account-settelment">
        <div className="back-page">
          <Link to="/" className="back-to-page-btn link-text">
            <svg
              className="mb-1 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.7273 3.68676C12.8176 3.59129 12.8881 3.47898 12.9349 3.35626C12.9817 3.23353 13.0039 3.10278 13.0002 2.97148C12.9965 2.84017 12.9669 2.71089 12.9133 2.591C12.8596 2.47112 12.7828 2.36298 12.6873 2.27276C12.5919 2.18254 12.4796 2.11201 12.3568 2.0652C12.2341 2.01838 12.1034 1.9962 11.9721 1.99991C11.8408 2.00363 11.7115 2.03317 11.5916 2.08684C11.4717 2.14052 11.3636 2.21729 11.2733 2.31276L2.77334 11.3128C2.59781 11.4984 2.5 11.7442 2.5 11.9998C2.5 12.2553 2.59781 12.5011 2.77334 12.6868L11.2733 21.6878C11.363 21.7853 11.4711 21.8641 11.5914 21.9195C11.7117 21.975 11.8419 22.0059 11.9743 22.0106C12.1067 22.0153 12.2387 21.9937 12.3626 21.9469C12.4866 21.9002 12.6 21.8293 12.6963 21.7383C12.7927 21.6474 12.8699 21.5382 12.9237 21.4171C12.9775 21.296 13.0067 21.1655 13.0095 21.033C13.0124 20.9006 12.989 20.7689 12.9405 20.6456C12.8921 20.5223 12.8196 20.4098 12.7273 20.3148L4.87534 11.9998L12.7273 3.68676Z"
                fill="black"
              />
            </svg>
            Back
          </Link>
        </div>
        <div className="row ">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center">
            <div className="page-head">
              <div className="card-head mb-3 mt-2">
                <h5>Add A Goal</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center">
            <div className="page-head">
              <div className="card-head mb-3 mt-4">
                <h6>Enter your Goal information below.</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-sm-12 col-xs-12 col-lg-10 text left">
            {/* account form start from here */}
            <form className="acc-form">
              {/* for input 01 for username */}
              <div className="form-group text-left mb-2">
                <label className="form-head mb-2" htmlFor="goalname">
                  Goal Name
                </label>
                <input
                  type="text"
                  id="goalname"
                  className="form-control"
                  placeholder="Enter item name"
                  required
                />
              </div>
              {/* form input 02 for first name  */}
              <div className="form-group text-left mb-2">
                <label className="form-head mb-2" htmlFor="goalprice">
                  Price
                </label>
                <input
                  type="text"
                  id="goalprice"
                  className="form-control"
                  placeholder="CAD $"
                  required
                />
              </div>
              {/* input 03 goal-image*/}

              <div className="form-group text-left mb-2">
                <label className="form-head mb-2" htmlFor="goalprice">
                  Upload Your Goal Image
                </label>
                <div className="file-wrapper">
                  <input
                    type="file"
                    id="goalimgupload"
                    className="hidden-input"
                  />
                  <label htmlFor="goalimgupload" className="goal-img-upload">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M23.4375 5C23.971 5 24.4993 5.10508 24.9922 5.30924C25.485 5.5134 25.9329 5.81264 26.3101 6.18988C26.6874 6.56712 26.9866 7.01496 27.1908 7.50785C27.3949 8.00073 27.5 8.52901 27.5 9.0625V23.4375C27.5 23.971 27.3949 24.4993 27.1908 24.9922C26.9866 25.485 26.6874 25.9329 26.3101 26.3101C25.9329 26.6874 25.485 26.9866 24.9922 27.1908C24.4993 27.3949 23.971 27.5 23.4375 27.5H9.0625C8.52901 27.5 8.00073 27.3949 7.50785 27.1908C7.01496 26.9866 6.56712 26.6874 6.18988 26.3101C5.81264 25.9329 5.5134 25.485 5.30924 24.9922C5.10508 24.4993 5 23.971 5 23.4375V15.6275C5.5925 15.875 6.22125 16.0525 6.875 16.155V23.4375C6.875 23.6975 6.92 23.9475 7.00375 24.18L14.2825 17.0537C14.7815 16.5653 15.4443 16.2799 16.142 16.2531C16.8398 16.2263 17.5225 16.46 18.0575 16.9088L18.2175 17.0537L25.495 24.1812C25.5788 23.9487 25.625 23.6987 25.625 23.4375V9.0625C25.625 8.48234 25.3945 7.92594 24.9843 7.5157C24.5741 7.10547 24.0177 6.875 23.4375 6.875H16.155C16.0555 6.231 15.8784 5.60141 15.6275 5H23.4375ZM15.6987 18.305L15.5938 18.3925L8.335 25.5012C8.5625 25.5812 8.8075 25.625 9.0625 25.625H23.4375C23.6912 25.625 23.9363 25.5812 24.1625 25.5012L16.9062 18.3937C16.748 18.2386 16.5398 18.1446 16.3187 18.1283C16.0977 18.1121 15.878 18.1747 15.6987 18.305ZM20.315 9.375C21.0616 9.375 21.7776 9.67158 22.3055 10.1995C22.8334 10.7274 23.13 11.4434 23.13 12.19C23.13 12.9366 22.8334 13.6526 22.3055 14.1805C21.7776 14.7084 21.0616 15.005 20.315 15.005C19.5684 15.005 18.8524 14.7084 18.3245 14.1805C17.7966 13.6526 17.5 12.9366 17.5 12.19C17.5 11.4434 17.7966 10.7274 18.3245 10.1995C18.8524 9.67158 19.5684 9.375 20.315 9.375ZM8.125 1.25C9.02784 1.25 9.92184 1.42783 10.7559 1.77333C11.5901 2.11883 12.348 2.62524 12.9864 3.26364C13.6248 3.90204 14.1312 4.65994 14.4767 5.49405C14.8222 6.32817 15 7.22216 15 8.125C15 9.02784 14.8222 9.92184 14.4767 10.7559C14.1312 11.5901 13.6248 12.348 12.9864 12.9864C12.348 13.6248 11.5901 14.1312 10.7559 14.4767C9.92184 14.8222 9.02784 15 8.125 15C6.30164 15 4.55295 14.2757 3.26364 12.9864C1.97433 11.697 1.25 9.94836 1.25 8.125C1.25 6.30164 1.97433 4.55295 3.26364 3.26364C4.55295 1.97433 6.30164 1.25 8.125 1.25ZM20.315 11.25C20.1916 11.25 20.0693 11.2743 19.9553 11.3216C19.8412 11.3688 19.7376 11.438 19.6503 11.5253C19.563 11.6126 19.4938 11.7162 19.4466 11.8303C19.3993 11.9443 19.375 12.0666 19.375 12.19C19.375 12.3134 19.3993 12.4357 19.4466 12.5497C19.4938 12.6638 19.563 12.7674 19.6503 12.8547C19.7376 12.942 19.8412 13.0112 19.9553 13.0584C20.0693 13.1057 20.1916 13.13 20.315 13.13C20.5643 13.13 20.8034 13.031 20.9797 12.8547C21.156 12.6784 21.255 12.4393 21.255 12.19C21.255 11.9407 21.156 11.7016 20.9797 11.5253C20.8034 11.349 20.5643 11.25 20.315 11.25ZM8.125 3.75L8.0125 3.75875C7.88762 3.78156 7.77265 3.84187 7.68288 3.93163C7.59312 4.0214 7.53281 4.13637 7.51 4.26125L7.5 4.375V7.5H4.3725L4.26 7.51C4.13512 7.53281 4.02015 7.59312 3.93038 7.68288C3.84062 7.77265 3.78031 7.88762 3.7575 8.0125L3.7475 8.125L3.7575 8.2375C3.78031 8.36238 3.84062 8.47735 3.93038 8.56712C4.02015 8.65688 4.13512 8.71719 4.26 8.74L4.3725 8.75H7.5V11.8787L7.51 11.9913C7.53281 12.1161 7.59312 12.2311 7.68288 12.3209C7.77265 12.4106 7.88762 12.4709 8.0125 12.4937L8.125 12.505L8.2375 12.4937C8.36238 12.4709 8.47735 12.4106 8.56712 12.3209C8.65688 12.2311 8.71719 12.1161 8.74 11.9913L8.75 11.8787V8.75H11.8813L11.9938 8.74C12.1186 8.71719 12.2336 8.65688 12.3234 8.56712C12.4131 8.47735 12.4734 8.36238 12.4963 8.2375L12.5063 8.125L12.4963 8.0125C12.4734 7.88745 12.4129 7.77235 12.3229 7.68257C12.2329 7.59279 12.1176 7.53258 11.9925 7.51L11.88 7.5H8.75V4.375L8.74 4.2625C8.71742 4.13739 8.65721 4.02215 8.56743 3.93214C8.47765 3.84213 8.36255 3.78165 8.2375 3.75875L8.125 3.75Z"
                        fill="#616161"
                      />
                    </svg>
                    <span>Upload Image Here</span>
                  </label>
                </div>
              </div>

              {/* this is goal compoents */}
              <GoalComponent />

              {/* input 05 for goal category */}
              <div className="form-group text-left my-2">
                <label className="form-head mb-2" htmlFor="">
                  Select Category
                </label>

                <CustomSelect options={options} />
              </div>

              {/* submit form button */}
              <div className="f-submit mt-5">
                <button type="submit" className="acs-form">
                  Add Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* section end from here */}
    </main>
  );
};

export default AddGoal;
