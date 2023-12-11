import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { BiSolidPencil } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import profilePic from "../img/userProfile.png";
import { Link } from "react-router-dom";
import SocialLinkModal1 from "../components/SocialLinkModal1";
import Goals from "../components/Goals";
import { DragDropContext } from "react-beautiful-dnd";
import ProductGoal from "../img/product-gloves.png";
import Massage from "../img/massage.png";
import dubmbels from "../img/dumbels.png";
import CustomSelect from "../components/CustomSelect";
// import SocialLinkModal2 from "../components/SocialLinkModal2";
const MainContent = () => {
  const [showSocilMdl1, setShowSocilMdl1] = useState(false);

  const options = [
    { label: "Category", value: "" },
    { label: "Gadgets and Electronics", value: "1" },
    { label: "Health and Fitness Goals", value: "2" },
    { label: "Skill Development Courses", value: "3" },
    { label: "Charitable Donations", value: "4" },
    { label: "Home Decor and Furnishing", value: "5" },
    { label: "Other", value: "6" },
  ];

  const [goals, setGoals] = useState([
    {
      name: "Gloves",
      price: "CA$200.00",
      goalImg: ProductGoal,
      ProgessBar: true,
      frequency: "Daily",
      id: 136,
    },
    {
      name: "Everyday Coffee",
      price: "CA$200.00",
      goalImg: Massage,
      ProgessBar: false,
      id: 225,
    },
    {
      name: "dubmbels",
      price: "CA$200.00",
      goalImg: dubmbels,
      ProgessBar: true,
      frequency: "Monthly",
      id: 433,
    },
  ]);
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let active = goals;
    let add;
    add = active[source.index];
    active.splice(source.index, 1);
    active.splice(destination.index, 0, add);

    setGoals(active);
    console.log("This is Drang and Drop result", result);
  };

  return (
    <>
      <main className="main-content mt-2">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
            <div className="tile">
              <div className="tile-content">
                <div className="user-banner-image">
                  <img
                    loading="lazy"
                    alt="banner"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce2fa3ea-01f4-4d9e-abfc-255dccdd8f17?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                    className="img u-banner"
                  />

                  <div className="banner-img-picker-background">
                    <div className="banner-img-picker">
                      <input type="file" multiple={false} />
                      <span className="picker-icon typo-grey-16">
                        Edit
                        <BiSolidPencil size={21} color="white" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="user-profile-container">
                  <img src={profilePic} alt="profil-pic" />
                  <div className="img-picker-container">
                    <input type="file" />

                    <span className="picker-icon">
                      Edit
                      <BiSolidPencil color="white" />
                    </span>
                  </div>
                </div>
                <div className="user-info">
                  <div className="user-content">
                    <div className="user-details">
                      <div className="user-name sec-head">Andrew Ainsley</div>
                      <div className="user-handle">@AAinsley</div>
                      <div className="user-link profile-details">
                        https://www.fightcompanion.io/aainsley
                      </div>
                      <div className="promotion-company profile-details">
                        Fight Promotion Company: UFC
                      </div>
                    </div>
                    <div className="profilelink-copy-btn">
                      <IoCopyOutline
                        className="img-2"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "https://www.fightcompanion.io/aainsley"
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="log-user-info-right">
                    <div className="fighter-top text-end">
                      <Link to="/favorite" className="follow-button fav-btn">
                        Favorites
                      </Link>
                    </div>
                    <div className="fighter-bottom d-flex gap-2 flex-column">
                      <div className="d-flex align-items-center gap-1">
                        <svg className="mt-1px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292V19.708C2 20.972 3.028 22 4.292 22H19.708C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2ZM20.5 19.708C20.5 20.145 20.145 20.5 19.708 20.5H4.292C3.855 20.5 3.5 20.145 3.5 19.708V6.418C3.5 5.981 3.854 5.628 4.29 5.626H19.71C20.146 5.626 20.5 5.981 20.5 6.416V19.71V19.708Z" fill="black" />
                          <path d="M7.03207 10.0348C7.74176 10.0348 8.31707 9.45953 8.31707 8.74984C8.31707 8.04016 7.74176 7.46484 7.03207 7.46484C6.32238 7.46484 5.74707 8.04016 5.74707 8.74984C5.74707 9.45953 6.32238 10.0348 7.03207 10.0348Z" fill="black" />
                          <path d="M7.03207 14.4411C7.74176 14.4411 8.31707 13.8658 8.31707 13.1561C8.31707 12.4464 7.74176 11.8711 7.03207 11.8711C6.32238 11.8711 5.74707 12.4464 5.74707 13.1561C5.74707 13.8658 6.32238 14.4411 7.03207 14.4411Z" fill="black" />
                          <path d="M16.9681 10.0348C17.6778 10.0348 18.2531 9.45953 18.2531 8.74984C18.2531 8.04016 17.6778 7.46484 16.9681 7.46484C16.2584 7.46484 15.6831 8.04016 15.6831 8.74984C15.6831 9.45953 16.2584 10.0348 16.9681 10.0348Z" fill="black" />
                          <path d="M16.9681 14.4411C17.6778 14.4411 18.2531 13.8658 18.2531 13.1561C18.2531 12.4464 17.6778 11.8711 16.9681 11.8711C16.2584 11.8711 15.6831 12.4464 15.6831 13.1561C15.6831 13.8658 16.2584 14.4411 16.9681 14.4411Z" fill="black" />
                          <path d="M12.0001 10.0348C12.7098 10.0348 13.2851 9.45953 13.2851 8.74984C13.2851 8.04016 12.7098 7.46484 12.0001 7.46484C11.2904 7.46484 10.7151 8.04016 10.7151 8.74984C10.7151 9.45953 11.2904 10.0348 12.0001 10.0348Z" fill="black" />
                          <path d="M12.0001 14.4411C12.7098 14.4411 13.2851 13.8658 13.2851 13.1561C13.2851 12.4464 12.7098 11.8711 12.0001 11.8711C11.2904 11.8711 10.7151 12.4464 10.7151 13.1561C10.7151 13.8658 11.2904 14.4411 12.0001 14.4411Z" fill="black" />
                          <path d="M7.03207 18.7712C7.74176 18.7712 8.31707 18.1959 8.31707 17.4862C8.31707 16.7765 7.74176 16.2012 7.03207 16.2012C6.32238 16.2012 5.74707 16.7765 5.74707 17.4862C5.74707 18.1959 6.32238 18.7712 7.03207 18.7712Z" fill="black" />
                          <path d="M12.0001 18.7712C12.7098 18.7712 13.2851 18.1959 13.2851 17.4862C13.2851 16.7765 12.7098 16.2012 12.0001 16.2012C11.2904 16.2012 10.7151 16.7765 10.7151 17.4862C10.7151 18.1959 11.2904 18.7712 12.0001 18.7712Z" fill="black" />
                        </svg> <span className="cal-info">Joined May 2020</span>
                      </div>
                      <div className="d-flex gap-1 align-items-center justify-content-end">
                        <Link>
                          <FaXTwitter className="social-icon-style" size={20} />
                        </Link>
                        <Link>
                          <FaInstagram
                            className="social-icon-style"
                            size={20}
                          />
                        </Link>
                        <Link>
                          <FaFacebookF
                            className="social-icon-style"
                            size={20}
                          />
                        </Link>

                        <GoPencil
                          size={20}
                          className="social-picker"
                          onClick={() => setShowSocilMdl1(true)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-goal">
                <div className="filterLeft ">
                  <button className="category-btn sub-btn-fonts">
                    Category
                  </button>

                  {/* <div className="filter-btn sub-btn-fonts">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M13.125 7.29182C12.7383 7.29182 12.3673 7.44547 12.0938 7.71896C11.8204 7.99245 11.6667 8.36338 11.6667 8.75016C11.6667 9.13693 11.8204 9.50786 12.0938 9.78135C12.3673 10.0548 12.7383 10.2085 13.125 10.2085C13.5118 10.2085 13.8827 10.0548 14.1562 9.78135C14.4297 9.50786 14.5834 9.13693 14.5834 8.75016C14.5834 8.36338 14.4297 7.99245 14.1562 7.71896C13.8827 7.44547 13.5118 7.29182 13.125 7.29182ZM8.99796 7.29182C9.29925 6.43792 9.85799 5.6985 10.5972 5.17547C11.3363 4.65245 12.2195 4.37158 13.125 4.37158C14.0305 4.37158 14.9137 4.65245 15.6529 5.17547C16.3921 5.6985 16.9508 6.43792 17.2521 7.29182H27.7084C28.0951 7.29182 28.4661 7.44547 28.7396 7.71896C29.0131 7.99245 29.1667 8.36338 29.1667 8.75016C29.1667 9.13693 29.0131 9.50786 28.7396 9.78135C28.4661 10.0548 28.0951 10.2085 27.7084 10.2085H17.2521C16.9508 11.0624 16.3921 11.8018 15.6529 12.3248C14.9137 12.8479 14.0305 13.1287 13.125 13.1287C12.2195 13.1287 11.3363 12.8479 10.5972 12.3248C9.85799 11.8018 9.29925 11.0624 8.99796 10.2085H7.29171C6.90493 10.2085 6.534 10.0548 6.26051 9.78135C5.98702 9.50786 5.83337 9.13693 5.83337 8.75016C5.83337 8.36338 5.98702 7.99245 6.26051 7.71896C6.534 7.44547 6.90493 7.29182 7.29171 7.29182H8.99796ZM21.875 16.0418C21.4883 16.0418 21.1173 16.1955 20.8438 16.469C20.5704 16.7424 20.4167 17.1134 20.4167 17.5002C20.4167 17.8869 20.5704 18.2579 20.8438 18.5314C21.1173 18.8048 21.4883 18.9585 21.875 18.9585C22.2618 18.9585 22.6327 18.8048 22.9062 18.5314C23.1797 18.2579 23.3334 17.8869 23.3334 17.5002C23.3334 17.1134 23.1797 16.7424 22.9062 16.469C22.6327 16.1955 22.2618 16.0418 21.875 16.0418ZM17.748 16.0418C18.0493 15.1879 18.608 14.4485 19.3472 13.9255C20.0863 13.4025 20.9695 13.1216 21.875 13.1216C22.7805 13.1216 23.6637 13.4025 24.4029 13.9255C25.1421 14.4485 25.7008 15.1879 26.0021 16.0418H27.7084C28.0951 16.0418 28.4661 16.1955 28.7396 16.469C29.0131 16.7424 29.1667 17.1134 29.1667 17.5002C29.1667 17.8869 29.0131 18.2579 28.7396 18.5314C28.4661 18.8048 28.0951 18.9585 27.7084 18.9585H26.0021C25.7008 19.8124 25.1421 20.5518 24.4029 21.0748C23.6637 21.5979 22.7805 21.8787 21.875 21.8787C20.9695 21.8787 20.0863 21.5979 19.3472 21.0748C18.608 20.5518 18.0493 19.8124 17.748 18.9585H7.29171C6.90493 18.9585 6.534 18.8048 6.26051 18.5314C5.98702 18.2579 5.83337 17.8869 5.83337 17.5002C5.83337 17.1134 5.98702 16.7424 6.26051 16.469C6.534 16.1955 6.90493 16.0418 7.29171 16.0418H17.748ZM13.125 24.7918C12.7383 24.7918 12.3673 24.9455 12.0938 25.219C11.8204 25.4924 11.6667 25.8634 11.6667 26.2502C11.6667 26.6369 11.8204 27.0079 12.0938 27.2814C12.3673 27.5548 12.7383 27.7085 13.125 27.7085C13.5118 27.7085 13.8827 27.5548 14.1562 27.2814C14.4297 27.0079 14.5834 26.6369 14.5834 26.2502C14.5834 25.8634 14.4297 25.4924 14.1562 25.219C13.8827 24.9455 13.5118 24.7918 13.125 24.7918ZM8.99796 24.7918C9.29925 23.9379 9.85799 23.1985 10.5972 22.6755C11.3363 22.1525 12.2195 21.8716 13.125 21.8716C14.0305 21.8716 14.9137 22.1525 15.6529 22.6755C16.3921 23.1985 16.9508 23.9379 17.2521 24.7918H27.7084C28.0951 24.7918 28.4661 24.9455 28.7396 25.219C29.0131 25.4924 29.1667 25.8634 29.1667 26.2502C29.1667 26.6369 29.0131 27.0079 28.7396 27.2814C28.4661 27.5548 28.0951 27.7085 27.7084 27.7085H17.2521C16.9508 28.5624 16.3921 29.3018 15.6529 29.8248C14.9137 30.3479 14.0305 30.6287 13.125 30.6287C12.2195 30.6287 11.3363 30.3479 10.5972 29.8248C9.85799 29.3018 9.29925 28.5624 8.99796 27.7085H7.29171C6.90493 27.7085 6.534 27.5548 6.26051 27.2814C5.98702 27.0079 5.83337 26.6369 5.83337 26.2502C5.83337 25.8634 5.98702 25.4924 6.26051 25.219C6.534 24.9455 6.90493 24.7918 7.29171 24.7918H8.99796Z"
                        fill="black"
                      />
                    </svg>
                  </div> */}

                  <div className="dropdown">
                    <div
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 35 35"
                        fill="none"
                      >
                        <path
                          d="M13.125 7.29182C12.7383 7.29182 12.3673 7.44547 12.0938 7.71896C11.8204 7.99245 11.6667 8.36338 11.6667 8.75016C11.6667 9.13693 11.8204 9.50786 12.0938 9.78135C12.3673 10.0548 12.7383 10.2085 13.125 10.2085C13.5118 10.2085 13.8827 10.0548 14.1562 9.78135C14.4297 9.50786 14.5834 9.13693 14.5834 8.75016C14.5834 8.36338 14.4297 7.99245 14.1562 7.71896C13.8827 7.44547 13.5118 7.29182 13.125 7.29182ZM8.99796 7.29182C9.29925 6.43792 9.85799 5.6985 10.5972 5.17547C11.3363 4.65245 12.2195 4.37158 13.125 4.37158C14.0305 4.37158 14.9137 4.65245 15.6529 5.17547C16.3921 5.6985 16.9508 6.43792 17.2521 7.29182H27.7084C28.0951 7.29182 28.4661 7.44547 28.7396 7.71896C29.0131 7.99245 29.1667 8.36338 29.1667 8.75016C29.1667 9.13693 29.0131 9.50786 28.7396 9.78135C28.4661 10.0548 28.0951 10.2085 27.7084 10.2085H17.2521C16.9508 11.0624 16.3921 11.8018 15.6529 12.3248C14.9137 12.8479 14.0305 13.1287 13.125 13.1287C12.2195 13.1287 11.3363 12.8479 10.5972 12.3248C9.85799 11.8018 9.29925 11.0624 8.99796 10.2085H7.29171C6.90493 10.2085 6.534 10.0548 6.26051 9.78135C5.98702 9.50786 5.83337 9.13693 5.83337 8.75016C5.83337 8.36338 5.98702 7.99245 6.26051 7.71896C6.534 7.44547 6.90493 7.29182 7.29171 7.29182H8.99796ZM21.875 16.0418C21.4883 16.0418 21.1173 16.1955 20.8438 16.469C20.5704 16.7424 20.4167 17.1134 20.4167 17.5002C20.4167 17.8869 20.5704 18.2579 20.8438 18.5314C21.1173 18.8048 21.4883 18.9585 21.875 18.9585C22.2618 18.9585 22.6327 18.8048 22.9062 18.5314C23.1797 18.2579 23.3334 17.8869 23.3334 17.5002C23.3334 17.1134 23.1797 16.7424 22.9062 16.469C22.6327 16.1955 22.2618 16.0418 21.875 16.0418ZM17.748 16.0418C18.0493 15.1879 18.608 14.4485 19.3472 13.9255C20.0863 13.4025 20.9695 13.1216 21.875 13.1216C22.7805 13.1216 23.6637 13.4025 24.4029 13.9255C25.1421 14.4485 25.7008 15.1879 26.0021 16.0418H27.7084C28.0951 16.0418 28.4661 16.1955 28.7396 16.469C29.0131 16.7424 29.1667 17.1134 29.1667 17.5002C29.1667 17.8869 29.0131 18.2579 28.7396 18.5314C28.4661 18.8048 28.0951 18.9585 27.7084 18.9585H26.0021C25.7008 19.8124 25.1421 20.5518 24.4029 21.0748C23.6637 21.5979 22.7805 21.8787 21.875 21.8787C20.9695 21.8787 20.0863 21.5979 19.3472 21.0748C18.608 20.5518 18.0493 19.8124 17.748 18.9585H7.29171C6.90493 18.9585 6.534 18.8048 6.26051 18.5314C5.98702 18.2579 5.83337 17.8869 5.83337 17.5002C5.83337 17.1134 5.98702 16.7424 6.26051 16.469C6.534 16.1955 6.90493 16.0418 7.29171 16.0418H17.748ZM13.125 24.7918C12.7383 24.7918 12.3673 24.9455 12.0938 25.219C11.8204 25.4924 11.6667 25.8634 11.6667 26.2502C11.6667 26.6369 11.8204 27.0079 12.0938 27.2814C12.3673 27.5548 12.7383 27.7085 13.125 27.7085C13.5118 27.7085 13.8827 27.5548 14.1562 27.2814C14.4297 27.0079 14.5834 26.6369 14.5834 26.2502C14.5834 25.8634 14.4297 25.4924 14.1562 25.219C13.8827 24.9455 13.5118 24.7918 13.125 24.7918ZM8.99796 24.7918C9.29925 23.9379 9.85799 23.1985 10.5972 22.6755C11.3363 22.1525 12.2195 21.8716 13.125 21.8716C14.0305 21.8716 14.9137 22.1525 15.6529 22.6755C16.3921 23.1985 16.9508 23.9379 17.2521 24.7918H27.7084C28.0951 24.7918 28.4661 24.9455 28.7396 25.219C29.0131 25.4924 29.1667 25.8634 29.1667 26.2502C29.1667 26.6369 29.0131 27.0079 28.7396 27.2814C28.4661 27.5548 28.0951 27.7085 27.7084 27.7085H17.2521C16.9508 28.5624 16.3921 29.3018 15.6529 29.8248C14.9137 30.3479 14.0305 30.6287 13.125 30.6287C12.2195 30.6287 11.3363 30.3479 10.5972 29.8248C9.85799 29.3018 9.29925 28.5624 8.99796 27.7085H7.29171C6.90493 27.7085 6.534 27.5548 6.26051 27.2814C5.98702 27.0079 5.83337 26.6369 5.83337 26.2502C5.83337 25.8634 5.98702 25.4924 6.26051 25.219C6.534 24.9455 6.90493 24.7918 7.29171 24.7918H8.99796Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <ul className="dropdown-menu category-dropdown">
                      <li>
                        <a className="dropdown-item" href="#">
                          Default
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Price: High to Low
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Price: Low to High
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Most Recent
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Oldest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rightgoal all-btn">
                  <Link to="/addGoal">Create Goal</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* card section-start */}

          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
            <DragDropContext onDragEnd={onDragEnd}>
              <Goals goals={goals} />
            </DragDropContext>
          </div>

          {/* card section-end-here */}
        </div>
      </main>

      <SocialLinkModal1
        showSocilMdl1={showSocilMdl1}
        setShowSocilMdl1={setShowSocilMdl1}
      />
      {/* <SocialLinkModal2 /> */}
    </>
  );
};

export default MainContent;
