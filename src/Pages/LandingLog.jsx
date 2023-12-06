import React, { useState } from "react";
import BrandImg from "../img/brand-logo.png";
import { Link } from "react-router-dom";

const LandingLog = () => {
  const [showComment, setShowComment] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignUpClick = () => {
    setShowComment(false);
    setShowSignUp(true);
  };

  const handleSignInClick = () => {
    setShowComment(false);
    setShowSignIn(true);
  };

  const handleBackButtonClick = () => {
    setShowSignUp(false);
    setShowSignIn(false);
    setShowComment(true);
  };

  return (
    <>
      <section className="user-welcome">
        <div className="image-form-container">
          <div className="image-container"></div>
          <div className="form-container">
            {showComment && (
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                  <form className="user-enter-form">
                    <div className="form-start">
                      <div className="form-brand">
                        <img
                          className="l-form-brand w-124 w-94"
                          src={BrandImg}
                          alt="logo"
                        />
                        <div className="landing-head mt-5">
                          <h1>Fight The Good Fight</h1>
                          <p className="para">
                            {" "}
                            Embrace the Future of Fanhood! <br /> With Fight
                            Companion, supporting your beloved fighters has
                            never been simpler.{" "}
                          </p>
                        </div>
                        <div className="tab-btn d-flex text-center mt-5">
                          <button
                            type="button"
                            className="tab-btn-signin"
                            onClick={handleSignUpClick}
                          >
                            {" "}
                            Sign up{" "}
                          </button>
                          <button
                            type="button"
                            className="tab-btn-signup"
                            onClick={handleSignInClick}
                          >
                            {" "}
                            Sign in{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {showSignUp && (
              <form className="user-signup-form">
                <div className="form-start-signup">
                  <div className="form-brand">
                    <span className="back-i-btn">
                      <button
                        className="backbtn"
                        type="button"
                        onClick={handleBackButtonClick}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12.7271 3.687C12.8173 3.59153 12.8878 3.47923 12.9347 3.3565C12.9815 3.23377 13.0037 3.10302 12.9999 2.97172C12.9962 2.84042 12.9667 2.71113 12.913 2.59125C12.8593 2.47136 12.7826 2.36322 12.6871 2.273C12.5916 2.18279 12.4793 2.11226 12.3566 2.06544C12.2339 2.01863 12.1031 1.99644 11.9718 2.00016C11.8405 2.00387 11.7112 2.03341 11.5913 2.08709C11.4715 2.14077 11.3633 2.21753 11.2731 2.313L2.7731 11.313C2.59756 11.4987 2.49976 11.7445 2.49976 12C2.49976 12.2555 2.59756 12.5013 2.7731 12.687L11.2731 21.688C11.3627 21.7856 11.4708 21.8643 11.5912 21.9198C11.7115 21.9752 11.8416 22.0062 11.974 22.0109C12.1064 22.0156 12.2384 21.9939 12.3624 21.9472C12.4863 21.9004 12.5998 21.8295 12.6961 21.7386C12.7924 21.6476 12.8697 21.5384 12.9235 21.4173C12.9772 21.2963 13.0064 21.1657 13.0093 21.0333C13.0122 20.9008 12.9887 20.7691 12.9403 20.6458C12.8918 20.5225 12.8194 20.4101 12.7271 20.315L4.8751 12L12.7271 3.687Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </span>
                    <div className="signup-view mt-4 text-left">
                      <h2 className="sub-head">Sign Up</h2>
                      <p className="para mt-2 text-left">
                        Create a new account to get started.
                      </p>
                    </div>
                    {/* ... Sign-up content ... */}
                    <section className="main-container">
                      <div className="image-wrapper">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/12dfc2fd-c573-41d5-a413-bfb88f27f484?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                          className="img"
                          alt="Companion Account"
                        />
                      </div>
                      <div className="description-container">
                        <h2 className="title-log-card">Companion Account</h2>
                        <p className="description-log-card">
                          Support your favorite fighters around the world.
                        </p>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ac0644-f189-4d94-9b00-c8ab1ba1b07b?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                        className="img-2"
                        alt="Companion Account"
                      />
                    </section>
                    <section className="main-container">
                      <div className="image-wrapper">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/97cff922-fc29-4bbc-adc1-8ceb61d7b464?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                          className="img"
                          alt="Fighter Account"
                        />
                      </div>
                      <div className="description-container">
                        <h2 className="title-log-card">Fighter Account</h2>
                        <p className="description-log-card">
                          Fulfill your dreams with support from your biggest
                          fans.
                        </p>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/17558839-d98b-41b4-9543-dafe5d09c4e9?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                        className="img-3"
                        alt="Fighter Account"
                      />
                    </section>
                  </div>
                </div>
              </form>
            )}
            {/* sign in content tab */}
            {showSignIn && (
              <div className="form-start-tab">
                <div className="form-brand-ct">
                  <span className="back-i-btn">
                    <button
                      className="backbtn"
                      type="button"
                      onClick={handleBackButtonClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.7271 3.687C12.8173 3.59153 12.8878 3.47923 12.9347 3.3565C12.9815 3.23377 13.0037 3.10302 12.9999 2.97172C12.9962 2.84042 12.9667 2.71113 12.913 2.59125C12.8593 2.47136 12.7826 2.36322 12.6871 2.273C12.5916 2.18279 12.4793 2.11226 12.3566 2.06544C12.2339 2.01863 12.1031 1.99644 11.9718 2.00016C11.8405 2.00387 11.7112 2.03341 11.5913 2.08709C11.4715 2.14077 11.3633 2.21753 11.2731 2.313L2.7731 11.313C2.59756 11.4987 2.49976 11.7445 2.49976 12C2.49976 12.2555 2.59756 12.5013 2.7731 12.687L11.2731 21.688C11.3627 21.7856 11.4708 21.8643 11.5912 21.9198C11.7115 21.9752 11.8416 22.0062 11.974 22.0109C12.1064 22.0156 12.2384 21.9939 12.3624 21.9472C12.4863 21.9004 12.5998 21.8295 12.6961 21.7386C12.7924 21.6476 12.8697 21.5384 12.9235 21.4173C12.9772 21.2963 13.0064 21.1657 13.0093 21.0333C13.0122 20.9008 12.9887 20.7691 12.9403 20.6458C12.8918 20.5225 12.8194 20.4101 12.7271 20.315L4.8751 12L12.7271 3.687Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </span>
                  {/* sign in content start from here  */}
                  <div className="login-view mt-4 text-left">
                    <h2 className="sub-head">Welcome back</h2>
                    <p className="para mt-2 text-left">
                      Please enter your email & password to sign in.
                    </p>
                  </div>
                  {/* ... signin content form */}
                  <form className="user-login-form">
                    <div className="form-start-login">
                      <div className="form-brand">
                        {/* form start from here */}
                        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                          {/* form input one for log email */}
                          <div className="form-group text-left">
                            <label className="form-head mb-2" for="log-mail">
                              Email :
                            </label>
                            <div class="inputWithIcon">
                              <input
                                type="text"
                                id="login-email"
                                className="form-control"
                                placeholder="Enter your email id "
                                required
                              />
                              <svg
                                className="i"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.1162 0.5C14.2337 0.5 15.3087 0.941667 16.0995 1.73417C16.8912 2.525 17.3337 3.59167 17.3337 4.70833V11.2917C17.3337 13.6167 15.442 15.5 13.1162 15.5H4.88366C2.55783 15.5 0.666992 13.6167 0.666992 11.2917V4.70833C0.666992 2.38333 2.54949 0.5 4.88366 0.5H13.1162ZM14.442 5.95L14.5087 5.88333C14.7078 5.64167 14.7078 5.29167 14.4995 5.05C14.3837 4.92583 14.2245 4.85 14.0587 4.83333C13.8837 4.82417 13.717 4.88333 13.5912 5L9.83366 8C9.35033 8.40083 8.65783 8.40083 8.16699 8L4.41699 5C4.15783 4.80833 3.79949 4.83333 3.58366 5.05833C3.35866 5.28333 3.33366 5.64167 3.52449 5.89167L3.63366 6L7.42533 8.95833C7.89199 9.325 8.45783 9.525 9.05033 9.525C9.64116 9.525 10.217 9.325 10.6828 8.95833L14.442 5.95Z"
                                  fill="#9E9E9E"
                                />
                              </svg>
                            </div>
                          </div>
                          {/* form input two for log password */}
                          <div className="form-group text-left mt-2">
                            <label className="form-head mb-2" for="log-mail">
                              password :
                            </label>
                            <div class="inputWithIcon">
                              <input
                                type="password"
                                id="login-password"
                                className="form-control"
                                placeholder="Enter your password "
                                required
                              />
                              <svg
                                className="i"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="18"
                                viewBox="0 0 16 18"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.6023 5.16334V6.44112C14.0376 6.88913 15.0834 8.18844 15.0834 9.74033V13.8544C15.0834 15.7756 13.4906 17.3333 11.5269 17.3333H4.47408C2.50955 17.3333 0.916748 15.7756 0.916748 13.8544V9.74033C0.916748 8.18844 1.96337 6.88913 3.39782 6.44112V5.16334C3.40629 2.67899 5.46397 0.666664 7.98738 0.666664C10.5447 0.666664 12.6023 2.67899 12.6023 5.16334ZM8.00431 2.11587C9.72328 2.11587 11.1205 3.48226 11.1205 5.16334V6.26142H4.87969V5.14677C4.88816 3.47398 6.28535 2.11587 8.00431 2.11587ZM8.74102 12.7124C8.74102 13.1182 8.41077 13.4412 7.99585 13.4412C7.58939 13.4412 7.25915 13.1182 7.25915 12.7124V10.874C7.25915 10.4765 7.58939 10.1536 7.99585 10.1536C8.41077 10.1536 8.74102 10.4765 8.74102 10.874V12.7124Z"
                                  fill="#9E9E9E"
                                />
                              </svg>
                            </div>
                          </div>
                          {/* div for remember log info */}
                          <div className="d-flex justify-space-between  mt-2">
                            <div className="form-check mt-2 mb-2">
                              <input
                                className="form-check-input "
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label check-label mx-1-75"
                                for="flexCheckDefault"
                              >
                                {" "}
                                Remember Me{" "}
                              </label>
                            </div>
                            {/* forget password link */}

                            <div className="form-check mt-2 mb-2">
                              <Link to="#" className="forget-password">
                                Forget password?
                              </Link>
                            </div>
                          </div>
                          {/* up div end for remember  */}
                          {/* area for info text */}
                          <div className="log-info mt-2 mb-3">
                            <small className="account-f">
                              Don’t have an account?{" "}
                              <span className="">
                                <Link className="forget-password" to="/signup">
                                  Sign Up
                                </Link>
                              </span>
                            </small>
                          </div>
                          {/* area end for info text */}
                          <div className="account-switch">
                            {/* btn-for -sign-in */}
                            <Link to="fighterhome">
                              <button
                                type="button"
                                className="long-btn-sign-in mt-2 mx-4"
                              >
                                {" "}
                                Sign in{" "}
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingLog;
