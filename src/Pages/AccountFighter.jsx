import React from "react";
import { Link } from "react-router-dom";

const AccountFighter = () => {
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
              <div class="card-head mb-3 mt-2">
                <h5>Account</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-sm-12 col-xs-12 col-lg-10 text left">
            {/* account form start from here */}
            <form className="acc-form">
              {/* for image wrapper */}
              <div class="file-wrapper">
                <input type="file" id="fileInput" class="hidden-input" />
                <label for="fileInput" class="file-upload">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M20.6032 5.12349C21.3584 5.42409 21.8925 5.96591 22.3712 6.76026L22.5289 7.03441L23.1141 8.15649L23.1333 8.18783L23.1508 8.2151L23.2005 8.28305C23.4671 8.57355 23.9133 8.74905 24.2078 8.74905C26.9055 8.74905 29.1089 10.8677 29.244 13.5311L29.2505 13.7905V21.2892C29.2505 24.7467 26.52 27.5683 23.0983 27.7144L22.8194 27.7203H9.80177C6.34335 27.7203 3.52261 24.9901 3.37655 21.5681L3.37061 21.2892V13.7905C3.37061 11.0065 5.6286 8.74905 8.41331 8.74905C8.70675 8.74905 9.15358 8.5733 9.42061 8.28305L9.42981 8.2722L9.44132 8.25712L9.50787 8.15504L10.0914 7.03476C10.6115 6.08947 11.1773 5.45755 12.0169 5.12337C13.5555 4.51159 19.0659 4.51159 20.6032 5.12349ZM12.7344 6.92689C12.4479 7.04091 12.1886 7.30484 11.9118 7.76238L11.792 7.97046L11.2939 8.93332L11.1714 9.15515C11.0691 9.32534 10.9667 9.46901 10.8498 9.59635C10.2541 10.2439 9.39864 10.618 8.63823 10.6806L8.41331 10.69L8.20097 10.6972C6.65732 10.8016 5.42316 12.0354 5.31876 13.5782L5.3116 13.7905V21.2892C5.3116 23.686 7.19015 25.6448 9.5554 25.7727L9.80177 25.7793H22.8194C25.2157 25.7793 27.1749 23.9 27.3029 21.5354L27.3095 21.2892V13.7905C27.3095 12.1499 26.034 10.8063 24.4202 10.6972L24.2078 10.69L23.9825 10.6806C23.221 10.618 22.3655 10.2438 21.7705 9.59549C21.6552 9.46984 21.5534 9.32719 21.4517 9.15843L21.4272 9.1166L21.3981 9.06464L21.2479 8.78288L20.8287 7.97081C20.5457 7.45696 20.2866 7.14291 20.0067 6.98509L19.8854 6.92689L19.731 6.87556C18.3993 6.49915 13.7671 6.51626 12.7344 6.92689ZM16.3102 12.6863C19.1184 12.6863 21.3943 14.9622 21.3943 17.7704C21.3943 20.5786 19.1184 22.8545 16.3102 22.8545C13.5019 22.8545 11.2261 20.5786 11.2261 17.7704C11.2261 14.9622 13.5019 12.6863 16.3102 12.6863ZM16.3102 14.6273C14.5739 14.6273 13.1671 16.0341 13.1671 17.7704C13.1671 19.5067 14.5739 20.9135 16.3102 20.9135C18.0464 20.9135 19.4533 19.5067 19.4533 17.7704C19.4533 16.0341 18.0464 14.6273 16.3102 14.6273ZM23.4331 11.7818C24.1478 11.7818 24.7271 12.3611 24.7271 13.0758C24.7271 13.7394 24.2276 14.2863 23.584 14.3611L23.4331 14.3698C22.7068 14.3698 22.1275 13.7904 22.1275 13.0758C22.1275 12.4122 22.627 11.8652 23.2706 11.7905L23.4331 11.7818Z"
                      fill="#616161"
                    />
                  </svg>
                </label>
              </div>
              {/* for input 01 for username */}
              <div className="form-group text-left mb-2">
                <label class="form-head mb-2" for="username">
                  Username :
                </label>
                <input
                  type="text"
                  id="user-name"
                  class="form-control"
                  placeholder="Enter your username"
                  required
                />
              </div>
              {/* form input 02 for first name  */}
              <div className="form-group text-left mb-2">
                <label class="form-head mb-2" for="userfirstame">
                  First Name :
                </label>
                <input
                  type="text"
                  id="first-name"
                  class="form-control"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              {/* input 03 for last name*/}
              <div className="form-group text-left mb-2">
                <label class="form-head mb-2" for="userlastname">
                  Last Name :
                </label>
                <input
                  type="text"
                  id="last-name"
                  class="form-control"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              {/* input 04 for email address */}
              <div className="form-group text-left mb-2">
                <label class="form-head mb-2" for="useremail">
                  Email :
                </label>
                <input
                  type="text"
                  id="user-email"
                  class="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              {/* input 05 for select currency */}
              <div className="form-group text-left mb-2">
                <label class="form-head mb-2" for="s-currency">
                  Select Currency (all currencies) :
                </label>
                <div class="select-group h-40 select-currency">
                  <select class="form-control" id="s-currency">
                    <option value="">Select Currency (all currencies) </option>
                    <option value="CAD">CAD</option>
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                    <option value="Pound">Pound</option>
                    <option value="Dirham">Dirham</option>
                  </select>
                </div>
              </div>
              {/* input 06 for fight prootion company */}
              <div className="form-group text-left mb-2 ">
                <label class="form-head mb-2" for="fight-promotion">
                  Select Fight Promotion Company :
                </label>
                <div class="select-group h-40 select-promotion">
                  <select class="form-control" id="s-currency">
                    <option value="">Select Fight Promotion Company </option>
                    <option value="CAD">UFC</option>
                    <option value="USD">Bellator</option>
                    <option value="EURO">One FC</option>
                    <option value="Pound">PFL</option>
                    <option value="Dirham">Asolute Championship Akhmat</option>
                    <option value="Dirham">AMC Fight Night</option>
                    <option value="Dirham">RIZIN Fighting Federation</option>
                    <option value="Dirham">Invicta Fight Championship </option>
                    <option value="Dirham">Pancrase </option>
                    <option value="Dirham">KSW</option>
                    <option value="Dirham">M-1 Global</option>
                    <option value="Dirham">Legacy Fighting Alliance</option>
                    <option value="Dirham">Unified MMA</option>
                    <option value="Dirham">
                      Cage Warriors Fight Championship
                    </option>
                    <option value="Dirham">Rumble In The Cage</option>
                    <option value="Dirham">Other</option>
                  </select>
                </div>
              </div>
              <div className="act-btn mt-5">
                {/* btn for payment */}
                <div className="btn-payment mb-5">
                  <Link to="/paymentinfo" className="btn-pay sub-bt link-text ">
                    Go to Payment Dashboard
                  </Link>
                </div>
                {/* btn for x setup*/}
                <div className="btn-payment mb-5">
                  <Link
                    to="/twitterpost"
                    className="btn-pay sub-bt-x link-text "
                  >
                    Setup Auto{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M7.73681 6.00469L12.5763 0.5H11.4294L7.22739 5.27953L3.8711 0.5H0L5.07532 7.72759L0 13.5H1.14692L5.58454 8.45265L9.1289 13.5H13L7.7365 6.00469H7.73681ZM6.16599 7.79117L5.65169 7.0715L1.56013 1.3448H3.32172L6.62352 5.9665L7.13771 6.68617L11.4299 12.6936H9.66852L6.16599 7.79148V7.79117Z"
                        fill="black"
                      />
                    </svg>{" "}
                    Post
                  </Link>
                </div>
                {/* btn for change password */}
                <div className="btn-payment mb-5">
                  <Link
                    to="/passwodreset"
                    className="btn-pay sub-bt-cp link-text "
                  >
                    Change Password
                  </Link>
                </div>
              </div>
              {/* submit form button */}
              <div className="f-submit">
                <button type="submit" className="acs-form">
                  Submit
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

export default AccountFighter;
