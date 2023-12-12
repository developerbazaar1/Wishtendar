import React from "react";
import { Link } from "react-router-dom";

const RightAside = () => {
  return (
    <div className="right-aside">
      <div className="right-card">
        {/* card for you may like */}
        <div className="card-grey">
          <div className="card-content">
            <div className="card-head mb-3 mt-2">
              <h5>You Might Like</h5>
            </div>
            {/* celebrity ul list */}
            <div className="celeb-c">
              <ul className="celeb-list mx-4 m-auto ">
                {/* celebrity list start from here */}
                {/* list 01 */}
                <li className="mb-2">
                  <div className="celebrity-profile">
                    <img
                      loading="lazy"
                      src="https://media.istockphoto.com/id/1268292259/photo/asian-woman-smile-take-selfie.jpg?s=612x612&w=0&k=20&c=9wN1RoksDOiBCgp3OxnK1T1W8Jz9zT83dvtfU0d0Z8E="
                      alt="Celebrity Profile"
                      className="celebrity-avatar"
                    />
                    <div className="celebrity-info">
                      <div className="celebrity-name">Shuhratbek</div>
                      <div className="celebrity-role">ONE FC</div>
                    </div>
                    <button className="follow-button">Follow</button>
                  </div>
                </li>
                {/* list 02 */}
                <li className="mb-2">
                  <div className="celebrity-profile">
                    <img
                      loading="lazy"
                      src="https://media.istockphoto.com/id/1268292259/photo/asian-woman-smile-take-selfie.jpg?s=612x612&w=0&k=20&c=9wN1RoksDOiBCgp3OxnK1T1W8Jz9zT83dvtfU0d0Z8E="
                      alt="Celebrity Profile"
                      className="celebrity-avatar"
                    />
                    <div className="celebrity-info">
                      <div className="celebrity-name">Shuhratbek</div>
                      <div className="celebrity-role">ONE FC</div>
                    </div>
                    <button className="follow-button">Follow</button>
                  </div>
                </li>
                <div className="see-more-btn">
                  <Link to="/likeprofile" className="see link-text">
                    Show More
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* card 02 */}
        <div className="card-area-02 mt-3">
          <div className="card-grey">
            <div className="card-content">
              <div className="card-head mb-3 mt-2">
                <h5>Rankings</h5>
              </div>
              {/* celebrity ul list */}
              <div className="celeb-c">
                <ul className="celeb-list mx-4 m-auto ">
                  {/* celebrity list start from here */}
                  {/* list 01 */}
                  <li className="mb-2">
                    <div className="celebrity-profile">
                      <img
                        loading="lazy"
                        src="https://media.istockphoto.com/id/1268292259/photo/asian-woman-smile-take-selfie.jpg?s=612x612&w=0&k=20&c=9wN1RoksDOiBCgp3OxnK1T1W8Jz9zT83dvtfU0d0Z8E="
                        alt="Celebrity Profile"
                        className="celebrity-avatar"
                      />
                      <div className="celebrity-rank-info">
                        <div className="celebrity-name">Shuhratbek</div>
                        <div className="celebrity-role">ONE FC</div>
                      </div>
                      <div className="ranking">#1</div>
                    </div>
                  </li>
                  {/* list 02 */}
                  <li className="mb-2">
                    <div className="celebrity-profile">
                      <img
                        loading="lazy"
                        src="https://media.istockphoto.com/id/1268292259/photo/asian-woman-smile-take-selfie.jpg?s=612x612&w=0&k=20&c=9wN1RoksDOiBCgp3OxnK1T1W8Jz9zT83dvtfU0d0Z8E="
                        alt="Celebrity Profile"
                        className="celebrity-avatar"
                      />
                      <div className="celebrity-rank-info">
                        <div className="celebrity-name">Shuhratbek</div>
                        <div className="celebrity-role">ONE FC</div>
                      </div>
                      <div className="ranking">#2</div>
                    </div>
                  </li>

                  <div className="see-more-btn">
                    <Link to="/rankingfighter" className="see link-text">
                      Show More
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAside;
