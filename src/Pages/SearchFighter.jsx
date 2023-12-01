import React from "react";
import { Link } from "react-router-dom";

const SearchFighter = () => {
  return (
    <>
      <main className="main-content">
        
        <section className="search-fighter-sec page-head">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="back-page">
                <Link
                  to="/accountfighter"
                  className="back-to-page-btn link-text"
                >
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
            </div>
          </div>
          {/* page tittle */}
          <div className="row ">
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center">
              <div className="page-head">
                <div class="card-head mb-3 mt-2">
                  <h5>Search </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="search-content">
          {/* ROW START FROM HERE */}
          <div className="row justify-content-center">
            <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11">
              <div className="search-wrapper">
                <form onSubmit={"#"}>
                  <div className="searchBar">
                    <input
                      id="searchQueryInput"
                      type="text"
                      name="searchQueryInput"
                      placeholder="Search"
                      // onChange={"#"}
                    />
                    <button
                      id="searchQuerySubmit"
                      type="submit"
                      name="searchQuerySubmit"
                    >
                      <svg
                        style={{ width: "24px", height: "24px" }}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#666666"
                          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </section>
        <section className="search-content mt-3">
          <div className="row justify-content-center">
            <div className="col-md-11 col-lg-11 col-sm-12 col-xs-12">
            <div className="row">
            {/* Fighter content */}
            <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11">
              <div className="fighter-content-area">
                {/* fighter card 01 */}
                <Link to="#" className="select-fighter ">
                <div className="fighter-card mb-3">
                  <img
                    // loading="lazy"
                    src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                    className="fighter-image"
                    alt="profile"
                  />
                  <div className="fighter-details">
                    <div className="fighter-name">Ronald Richards</div>
                    <div className="fighter-info">
                      [Fighter’s Username] - [Fighter Promotion Company]
                    </div>
                  </div>
                </div>
                </Link>
                {/* fighter card 02 */}
                <Link to="#" className="select-fighter ">
                <div className="fighter-card mb-3">
                  <img
                    // loading="lazy"
                    src="https://us.123rf.com/450wm/azovtcev161/azovtcev1611908/azovtcev161190800217/128455016-girl-sits-on-a-stump-in-the-autumn-park-with-a-leaves-in-her-hands-which-fall-from-the-trees.jpg"
                    className="fighter-image"
                    alt="profile"
                  />
                  <div className="fighter-details">
                    <div className="fighter-name">Ronald Richards</div>
                    <div className="fighter-info">
                      [Fighter’s Username] - [Fighter Promotion Company]
                    </div>
                  </div>
                </div>
                </Link>
                {/* fighter card 03 */}
                <Link to="#" className="select-fighter ">
                <div className="fighter-card mb-3">
                  <img
                    // loading="lazy"
                    src="https://us.123rf.com/450wm/shadow7777/shadow77771810/shadow7777181000020/110896254-beautiful-brunette-woman-in-autumn-foliage-smiling.jpg?ver=6"
                    className="fighter-image"
                    alt="profile"
                  />
                  <div className="fighter-details">
                    <div className="fighter-name">Ronald Richards</div>
                    <div className="fighter-info">
                      [Fighter’s Username] - [Fighter Promotion Company]
                    </div>
                  </div>
                </div>
                </Link>
                {/* fighter card 04 */}
                <Link to="#" className="select-fighter ">
                <div className="fighter-card mb-3">
                  <img
                    // loading="lazy"
                    src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
                    className="fighter-image"
                    alt="profile"
                  />
                  <div className="fighter-details">
                    <div className="fighter-name">Ronald Richards</div>
                    <div className="fighter-info">
                      [Fighter’s Username] - [Fighter Promotion Company]
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
             {/* Sidebar for alphabetical search */}
             <div className="col-md-1 col-sm-12 col-xs-12 col-lg-1 f-bar">
              <div className="alphabetical-search">
                <ul className="alphabet-list">
                  {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => (
                    <li key={letter}>
                      <a href={`#${letter}`}>{letter}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchFighter;

