import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Modal } from "bootstrap";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";

const CartFighter = () => {
  return (
    <main className="main-content">
      <section className="search-fighter-sec page-head">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            <div className="back-page">
              <Link to="/accountfighter" className="back-to-page-btn link-text">
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
                <h5>Cart</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section for fighter cart  */}
      <section className="fighter-cart-item">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-xs-12 col-lg-11">
            <div className="cart-detail">
              <div className="fighter-name">
                <h6 className="user-call">
                  Rolland Richard <span className="Goal">goal</span>
                </h6>
                <p className="user-recall">
                  You are about to contribute to Rolland Goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cart product table */}
      <section className="cart-product">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-12 col-lg-11 col-xs-12">
            <div className="cart-table">
              <Table responsive className="cart-product-table">
                <thead className="cart-product-head">
                  <tr>
                    <th className="text-left">Goal</th>
                    <th>Type/Qty</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="cart-product-body">
                  {/* table row 01 */}
                  <tr>
                    <td>
                      <div className="product-image text-left">
                        <img
                          // loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5adabbe-1b4b-4813-be62-fe95030c855b?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                          className="product-thumbnail"
                          alt="profile"
                        />
                        <div className="image-tittle">Gloves</div>
                      </div>
                    </td>
                    <td className="own-category t-data"> Crowdfunded</td>
                    <td className="product-prics t-data">
                      <small className="est">Est.</small> <span>CA$50.00</span>{" "}
                      <span className="model mx-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.667 2.5C11.6519 2.5 12.6272 2.69399 13.5371 3.0709C14.4471 3.44781 15.2739 4.00026 15.9703 4.6967C16.6667 5.39314 17.2192 6.21993 17.5961 7.12987C17.973 8.03982 18.167 9.01509 18.167 10C18.167 10.9849 17.973 11.9602 17.5961 12.8701C17.2192 13.7801 16.6667 14.6069 15.9703 15.3033C15.2739 15.9997 14.4471 16.5522 13.5371 16.9291C12.6272 17.306 11.6519 17.5 10.667 17.5C8.67787 17.5 6.77021 16.7098 5.36369 15.3033C3.95717 13.8968 3.16699 11.9891 3.16699 10C3.16699 8.01088 3.95717 6.10322 5.36369 4.6967C6.77021 3.29018 8.67787 2.5 10.667 2.5ZM10.667 13.125C10.4184 13.125 10.1799 13.2238 10.0041 13.3996C9.82826 13.5754 9.72949 13.8139 9.72949 14.0625C9.72949 14.3111 9.82826 14.5496 10.0041 14.7254C10.1799 14.9012 10.4184 15 10.667 15C10.9156 15 11.1541 14.9012 11.3299 14.7254C11.5057 14.5496 11.6045 14.3111 11.6045 14.0625C11.6045 13.8139 11.5057 13.5754 11.3299 13.3996C11.1541 13.2238 10.9156 13.125 10.667 13.125ZM10.667 5.625C10.004 5.625 9.36807 5.88839 8.89923 6.35723C8.43038 6.82607 8.16699 7.46196 8.16699 8.125C8.16699 8.29076 8.23284 8.44973 8.35005 8.56694C8.46726 8.68415 8.62623 8.75 8.79199 8.75C8.95775 8.75 9.11672 8.68415 9.23393 8.56694C9.35114 8.44973 9.41699 8.29076 9.41699 8.125C9.41699 7.79348 9.54869 7.47554 9.78311 7.24112C10.0175 7.0067 10.3355 6.875 10.667 6.875C10.9985 6.875 11.3165 7.0067 11.5509 7.24112C11.7853 7.47554 11.917 7.79348 11.917 8.125C11.917 8.5875 11.8132 8.85 11.4595 9.2475L11.3145 9.40375L10.9845 9.74125C10.307 10.45 10.042 10.96 10.042 11.875C10.042 12.0408 10.1078 12.1997 10.2251 12.3169C10.3423 12.4342 10.5012 12.5 10.667 12.5C10.8328 12.5 10.9917 12.4342 11.1089 12.3169C11.2261 12.1997 11.292 12.0408 11.292 11.875C11.292 11.4125 11.3957 11.15 11.7495 10.7525L11.8945 10.5963L12.2245 10.2587C12.902 9.55 13.167 9.04 13.167 8.125C13.167 7.46196 12.9036 6.82607 12.4348 6.35723C11.9659 5.88839 11.33 5.625 10.667 5.625Z"
                            fill="#757575"
                          />
                        </svg>
                      </span>
                    </td>
                    <td className="remove-product">
                      <Link to="#" className="remove-prdct">
                        Remove
                      </Link>
                    </td>
                  </tr>
                  {/* table row 01 end here */}
                  {/* table row 02 */}
                  <tr>
                    <td>
                      <div className="product-image text-left">
                        <img
                          // loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bcf31b9-b219-4261-922d-1a417c00bdee?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bcf31b9-b219-4261-922d-1a417c00bdee?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bcf31b9-b219-4261-922d-1a417c00bdee?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bcf31b9-b219-4261-922d-1a417c00bdee?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bcf31b9-b219-4261-922d-1a417c00bdee?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bcf31b9-b219-4261-922d-1a417c00bdee?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bcf31b9-b219-4261-922d-1a417c00bdee?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bcf31b9-b219-4261-922d-1a417c00bdee?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                          className="product-thumbnail"
                          alt="profile"
                        />
                        <div className="image-tittle">Daily Coffee</div>
                      </div>
                    </td>
                    <td className="own-category t-data">
                      {" "}
                      Subscription{" "}
                      <span>
                        <Badge pill bg="light" text="dark">
                          Daily
                        </Badge>
                      </span>
                    </td>
                    <td className="product-prics t-data">
                      <small className="est">Est.</small> <span>CA$50.00</span>{" "}
                      <span className="model mx-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.667 2.5C11.6519 2.5 12.6272 2.69399 13.5371 3.0709C14.4471 3.44781 15.2739 4.00026 15.9703 4.6967C16.6667 5.39314 17.2192 6.21993 17.5961 7.12987C17.973 8.03982 18.167 9.01509 18.167 10C18.167 10.9849 17.973 11.9602 17.5961 12.8701C17.2192 13.7801 16.6667 14.6069 15.9703 15.3033C15.2739 15.9997 14.4471 16.5522 13.5371 16.9291C12.6272 17.306 11.6519 17.5 10.667 17.5C8.67787 17.5 6.77021 16.7098 5.36369 15.3033C3.95717 13.8968 3.16699 11.9891 3.16699 10C3.16699 8.01088 3.95717 6.10322 5.36369 4.6967C6.77021 3.29018 8.67787 2.5 10.667 2.5ZM10.667 13.125C10.4184 13.125 10.1799 13.2238 10.0041 13.3996C9.82826 13.5754 9.72949 13.8139 9.72949 14.0625C9.72949 14.3111 9.82826 14.5496 10.0041 14.7254C10.1799 14.9012 10.4184 15 10.667 15C10.9156 15 11.1541 14.9012 11.3299 14.7254C11.5057 14.5496 11.6045 14.3111 11.6045 14.0625C11.6045 13.8139 11.5057 13.5754 11.3299 13.3996C11.1541 13.2238 10.9156 13.125 10.667 13.125ZM10.667 5.625C10.004 5.625 9.36807 5.88839 8.89923 6.35723C8.43038 6.82607 8.16699 7.46196 8.16699 8.125C8.16699 8.29076 8.23284 8.44973 8.35005 8.56694C8.46726 8.68415 8.62623 8.75 8.79199 8.75C8.95775 8.75 9.11672 8.68415 9.23393 8.56694C9.35114 8.44973 9.41699 8.29076 9.41699 8.125C9.41699 7.79348 9.54869 7.47554 9.78311 7.24112C10.0175 7.0067 10.3355 6.875 10.667 6.875C10.9985 6.875 11.3165 7.0067 11.5509 7.24112C11.7853 7.47554 11.917 7.79348 11.917 8.125C11.917 8.5875 11.8132 8.85 11.4595 9.2475L11.3145 9.40375L10.9845 9.74125C10.307 10.45 10.042 10.96 10.042 11.875C10.042 12.0408 10.1078 12.1997 10.2251 12.3169C10.3423 12.4342 10.5012 12.5 10.667 12.5C10.8328 12.5 10.9917 12.4342 11.1089 12.3169C11.2261 12.1997 11.292 12.0408 11.292 11.875C11.292 11.4125 11.3957 11.15 11.7495 10.7525L11.8945 10.5963L12.2245 10.2587C12.902 9.55 13.167 9.04 13.167 8.125C13.167 7.46196 12.9036 6.82607 12.4348 6.35723C11.9659 5.88839 11.33 5.625 10.667 5.625Z"
                            fill="#757575"
                          />
                        </svg>
                      </span>
                    </td>
                    <td className="remove-product">
                      <Link to="#" className="remove-prdct">
                        Remove
                      </Link>
                    </td>
                  </tr>
                  {/* table row 02 end here */}
                  {/* TABLE ROW 03 */}
                  <tr>
                    <td>
                      <div className="product-image text-left">
                        <img
                          // loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d87abd37-486a-4d16-a214-86ebfbe5b939?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87abd37-486a-4d16-a214-86ebfbe5b939?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87abd37-486a-4d16-a214-86ebfbe5b939?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87abd37-486a-4d16-a214-86ebfbe5b939?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87abd37-486a-4d16-a214-86ebfbe5b939?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87abd37-486a-4d16-a214-86ebfbe5b939?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87abd37-486a-4d16-a214-86ebfbe5b939?apiKey=a05c6109e97c4bde98e757ca99d37c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87abd37-486a-4d16-a214-86ebfbe5b939?apiKey=a05c6109e97c4bde98e757ca99d37c45&"
                          className="product-thumbnail"
                          alt="profile"
                        />
                        <div className="image-tittle">Massage Threapy</div>
                      </div>
                    </td>
                    <td className="own-category t-data">
                      Subscription
                      <span>
                        <Badge pill bg="light" text="dark">
                          Daily
                        </Badge>
                      </span>
                    </td>
                    <td className="product-prics t-data">
                      <small className="est">Est.</small> <span>CA$50.00</span>
                      <span className="model mx-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.667 2.5C11.6519 2.5 12.6272 2.69399 13.5371 3.0709C14.4471 3.44781 15.2739 4.00026 15.9703 4.6967C16.6667 5.39314 17.2192 6.21993 17.5961 7.12987C17.973 8.03982 18.167 9.01509 18.167 10C18.167 10.9849 17.973 11.9602 17.5961 12.8701C17.2192 13.7801 16.6667 14.6069 15.9703 15.3033C15.2739 15.9997 14.4471 16.5522 13.5371 16.9291C12.6272 17.306 11.6519 17.5 10.667 17.5C8.67787 17.5 6.77021 16.7098 5.36369 15.3033C3.95717 13.8968 3.16699 11.9891 3.16699 10C3.16699 8.01088 3.95717 6.10322 5.36369 4.6967C6.77021 3.29018 8.67787 2.5 10.667 2.5ZM10.667 13.125C10.4184 13.125 10.1799 13.2238 10.0041 13.3996C9.82826 13.5754 9.72949 13.8139 9.72949 14.0625C9.72949 14.3111 9.82826 14.5496 10.0041 14.7254C10.1799 14.9012 10.4184 15 10.667 15C10.9156 15 11.1541 14.9012 11.3299 14.7254C11.5057 14.5496 11.6045 14.3111 11.6045 14.0625C11.6045 13.8139 11.5057 13.5754 11.3299 13.3996C11.1541 13.2238 10.9156 13.125 10.667 13.125ZM10.667 5.625C10.004 5.625 9.36807 5.88839 8.89923 6.35723C8.43038 6.82607 8.16699 7.46196 8.16699 8.125C8.16699 8.29076 8.23284 8.44973 8.35005 8.56694C8.46726 8.68415 8.62623 8.75 8.79199 8.75C8.95775 8.75 9.11672 8.68415 9.23393 8.56694C9.35114 8.44973 9.41699 8.29076 9.41699 8.125C9.41699 7.79348 9.54869 7.47554 9.78311 7.24112C10.0175 7.0067 10.3355 6.875 10.667 6.875C10.9985 6.875 11.3165 7.0067 11.5509 7.24112C11.7853 7.47554 11.917 7.79348 11.917 8.125C11.917 8.5875 11.8132 8.85 11.4595 9.2475L11.3145 9.40375L10.9845 9.74125C10.307 10.45 10.042 10.96 10.042 11.875C10.042 12.0408 10.1078 12.1997 10.2251 12.3169C10.3423 12.4342 10.5012 12.5 10.667 12.5C10.8328 12.5 10.9917 12.4342 11.1089 12.3169C11.2261 12.1997 11.292 12.0408 11.292 11.875C11.292 11.4125 11.3957 11.15 11.7495 10.7525L11.8945 10.5963L12.2245 10.2587C12.902 9.55 13.167 9.04 13.167 8.125C13.167 7.46196 12.9036 6.82607 12.4348 6.35723C11.9659 5.88839 11.33 5.625 10.667 5.625Z"
                            fill="#757575"
                          />
                        </svg>
                      </span>
                    </td>
                    <td className="remove-product">
                      <Link to="#" className="remove-prdct">
                        Remove
                      </Link>
                    </td>
                  </tr>
                  {/*other fighter cart data */}
                  {/* TABLE ROW 03 END HERE */}
                </tbody>
              </Table>
              {/* second fighter data */}
            </div>
          </div>
        </div>
      </section>
      {/* section for  a cart terms and condition  */}
      <section className="cart-terms">
        <div className="row justify-content-center">
          <div className="col-md-11 col-lg-11 col-sm-12 col-xs-12">
            <div className="terms-condition-box">
              <div className="terms-check">
                <Form>
                  {["checkbox"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="mb-1 text-left fs-14"
                    >
                      <Form.Check
                        inline
                        label=" &nbsp; I agree to the Terms of Service and Privacy Policy and the following statements:"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
              <div class="read-terms">
                <ul className="terms-list">
                  <li>I am making a non-refundable cash gift donation.</li>
                  <li>
                    I expect no product or service in return from the gift
                    recipient.
                  </li>
                  <li>
                    This payment is a donation intended for the gift recipient.
                  </li>
                  <li>
                    I have taken the necessary steps to confirm the Goals list
                    owner is authentic and I understand that Fight Companion LLC
                    will not be held responsible for any issues arising from a
                    catfishing situation.
                  </li>
                  <li>
                    I understand that by violating these terms I may be subject
                    to legal action or can fall a victim of scams.
                  </li>
                  <li>
                    I understand that by checking the box above and then
                    clicking "CHECKOUT", I will have created a legally binding
                    e-signature to this agreement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* section for submit checklist  */}
          <div className="check-payment  text-center mt-5">
            <Link className="checkout-btn" to="/paymentmethod" type="button">
              Checkout
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartFighter;
