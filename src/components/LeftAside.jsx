import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const LeftAside = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	const closeNav = () => {
		setIsOpen(false);
	};

	return (
		<div className={`conta ${isOpen ? "open" : ""}`}>
			<button className="mobile-toggle" onClick={toggleNav}>
				<i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
			</button>
			<nav className="side-nav">
				<div className="divison-left-aside">
					<div className="left-head">
						<h6 className="head-pills">Fight Companion</h6>
					</div>
					<div className="div-4">
						{/* link 01 home fighter */}
						<Link to="/fighterhome" className="my-link mb-3">
							<div className="div-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
								>
									<mask
										id="mask0_39_1487"
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="25"
										height="25"
									>
										<rect width="25" height="25" fill="#C4C4C4" />
									</mask>
									<g mask="url(#mask0_39_1487)">
										<path
											d="M23.2399 7.85954L12.716 2.17725C12.4837 2.05225 12.2056 2.05225 11.9733 2.17725L1.45139 7.85954C1.07223 8.06475 0.930563 8.5387 1.13577 8.91891C1.2764 9.17933 1.54619 9.32828 1.82327 9.32828C1.94827 9.32828 2.0764 9.29703 2.1941 9.23453L3.04306 8.7762L4.73994 20.7689C4.96285 22.0345 6.10244 22.9168 7.50869 22.9168H17.1774C18.5858 22.9168 19.7243 22.0335 19.9514 20.7429L21.6451 8.77411L22.4972 9.23453C22.8764 9.43557 23.3514 9.29703 23.5566 8.91786C23.7608 8.53974 23.6191 8.06579 23.2399 7.85954ZM18.4087 20.4981C18.2972 21.1293 17.6764 21.3543 17.1795 21.3543H7.51077C7.01077 21.3543 6.39098 21.1293 6.28369 20.5231L4.51077 7.98453L12.3441 3.75329L20.1795 7.98245L18.4087 20.4981Z"
											fill="#616161"
										/>
										<path
											d="M8.40658 12.6658C8.40658 14.8366 10.1722 16.6033 12.3441 16.6033C14.516 16.6033 16.2816 14.8366 16.2816 12.6658C16.2816 10.4949 14.516 8.72825 12.3441 8.72825C10.1722 8.72825 8.40658 10.4949 8.40658 12.6658ZM14.7191 12.6658C14.7191 13.9762 13.6545 15.0408 12.3441 15.0408C11.0337 15.0408 9.96908 13.9762 9.96908 12.6658C9.96908 11.3553 11.0337 10.2908 12.3441 10.2908C13.6545 10.2908 14.7191 11.3553 14.7191 12.6658Z"
											fill="#616161"
										/>
									</g>
								</svg>
								<span>Home</span>
							</div>
						</Link>
						{/* link 02 search page */}
						<Link to="/searchfighter" className="my-link mb-3">
							<div className="div-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
								>
									<mask
										id="mask0_39_1490"
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="25"
										height="25"
									>
										<rect width="25" height="25" fill="#C4C4C4" />
									</mask>
									<g mask="url(#mask0_39_1490)">
										<path
											d="M22.4271 21.3231L18.6146 17.5106C19.9948 15.8752 20.8333 13.7647 20.8333 11.4585C20.8333 6.28141 16.6354 2.0835 11.4583 2.0835C6.28124 2.0835 2.08333 6.28141 2.08333 11.4585C2.08333 16.6356 6.28124 20.8335 11.4583 20.8335C13.7656 20.8335 15.875 19.996 17.5083 18.6147L21.3208 22.4272C21.474 22.5793 21.675 22.6564 21.8729 22.6564C22.0708 22.6564 22.274 22.5804 22.425 22.4272C22.7323 22.122 22.7323 21.6283 22.4271 21.3231ZM3.64583 11.4585C3.64583 7.1512 7.15104 3.646 11.4583 3.646C15.7656 3.646 19.2708 7.1512 19.2708 11.4585C19.2708 15.7658 15.7656 19.271 11.4583 19.271C7.15104 19.271 3.64583 15.7658 3.64583 11.4585Z"
											fill="#616161"
										/>
									</g>
								</svg>

								<span>Search</span>
							</div>
						</Link>
						{/* link 03 Activities */}
						<Link to="/activitiesfighter" className="my-link mb-3">
							<div className="div-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
								>
									<mask
										id="mask0_39_1493"
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="25"
										height="25"
									>
										<rect width="25" height="25" fill="#C4C4C4" />
									</mask>
									<g mask="url(#mask0_39_1493)">
										<path
											d="M22.6018 17.2273C22.581 17.2106 20.3727 15.5189 20.4112 10.946C20.432 8.30851 19.5654 5.96475 17.9664 4.34704C16.5341 2.896 14.5945 2.09391 12.506 2.0835H12.4925C10.405 2.09391 8.46538 2.89601 7.03204 4.34809C5.43413 5.9658 4.56538 8.30851 4.5883 10.946C4.62684 15.4564 2.48413 17.1616 2.39871 17.2273C2.12788 17.4283 2.01746 17.7793 2.12267 18.1002C2.22892 18.421 2.52891 18.6366 2.86433 18.6366H7.98934C8.09559 21.0429 10.0695 22.97 12.4997 22.97C14.93 22.97 16.9018 21.0429 17.007 18.6366H22.1341C22.4695 18.6366 22.7695 18.4221 22.8737 18.1012C22.981 17.7814 22.8706 17.4293 22.5998 17.2283L22.6018 17.2273ZM12.5008 21.4043C10.9331 21.4043 9.65704 20.1783 9.55496 18.6356H15.4466C15.3425 20.1773 14.0685 21.4064 12.5008 21.4064V21.4043ZM4.5633 17.0731C5.33413 15.8939 6.1758 13.9189 6.1508 10.9314C6.13205 8.68142 6.82163 6.7835 8.1435 5.44496C9.28204 4.29183 10.831 3.65329 12.5008 3.646C14.1706 3.65433 15.7164 4.29184 16.855 5.44601C18.1779 6.78455 18.8685 8.68142 18.8498 10.9325C18.8248 13.92 19.6675 15.896 20.4383 17.0741H4.5633V17.0731Z"
											fill="#616161"
										/>
									</g>
								</svg>
								<span>Activities</span>
							</div>
						</Link>
						{/* link 04 Ranking */}
						<Link to="/rankingfighter" className="my-link mb-3">
							<div className="div-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.51698 14.6695C5.35031 14.6695 5.18261 14.6164 5.04094 14.508C4.69927 14.2445 4.63469 13.7539 4.89823 13.4122L8.01594 9.36013C8.14302 9.1945 8.33156 9.08721 8.53781 9.06117C8.74823 9.03409 8.95448 9.09242 9.11802 9.22263L12.0555 11.5299L14.6253 8.21429C14.8899 7.87159 15.3795 7.80804 15.7211 8.07471C16.0628 8.33929 16.1253 8.82992 15.8607 9.17054L12.8086 13.108C12.6816 13.2726 12.4941 13.3799 12.2878 13.4049C12.0795 13.433 11.8732 13.3726 11.7086 13.2445L8.77323 10.9383L6.13677 14.3643C5.98261 14.5643 5.75136 14.6695 5.51698 14.6695"
										fill="#616161"
									/>
									<mask
										id="mask0_579_388"
										maskUnits="userSpaceOnUse"
										x="16"
										y="0"
										width="6"
										height="6"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M16.0159 0.0834961H21.5826V5.6511H16.0159V0.0834961Z"
											fill="white"
										/>
									</mask>
									<g mask="url(#mask0_579_388)">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M18.7993 1.646C18.1263 1.646 17.5784 2.19287 17.5784 2.86683C17.5784 3.53975 18.1263 4.0887 18.7993 4.0887C19.4722 4.0887 20.0201 3.53975 20.0201 2.86683C20.0201 2.19287 19.4722 1.646 18.7993 1.646M18.7993 5.6512C17.2649 5.6512 16.0159 4.40225 16.0159 2.86683C16.0159 1.33141 17.2649 0.0834961 18.7993 0.0834961C20.3347 0.0834961 21.5826 1.33141 21.5826 2.86683C21.5826 4.40225 20.3347 5.6512 18.7993 5.6512"
											fill="#616161"
										/>
									</g>
									<mask
										id="mask1_579_388"
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="21"
										height="22"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0.0833282 0.960449H20.7728V21.649H0.0833282V0.960449Z"
											fill="white"
										/>
									</mask>
									<g mask="url(#mask1_579_388)">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M14.9093 21.649H5.94676C2.43947 21.649 0.0832214 19.1854 0.0832214 15.5188V7.10003C0.0832214 3.42816 2.43947 0.960449 5.94676 0.960449H13.5176C13.9488 0.960449 14.2988 1.31045 14.2988 1.7417C14.2988 2.17295 13.9488 2.52295 13.5176 2.52295H5.94676C3.33426 2.52295 1.64572 4.31878 1.64572 7.10003V15.5188C1.64572 18.3365 3.29364 20.0865 5.94676 20.0865H14.9093C17.5218 20.0865 19.2103 18.2938 19.2103 15.5188V8.18649C19.2103 7.75524 19.5603 7.40524 19.9916 7.40524C20.4228 7.40524 20.7728 7.75524 20.7728 8.18649V15.5188C20.7728 19.1854 18.4166 21.649 14.9093 21.649"
											fill="#616161"
										/>
									</g>
								</svg>
								<span>Rankings</span>
							</div>
						</Link>
						{/* link 05 cart fighter */}
						<Link to="/cartfighter" className="my-link mb-3">
							<div className="div-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M7.85782 20.7832C8.60157 20.7832 9.20678 21.3874 9.20678 22.1311C9.20678 22.8749 8.60157 23.4801 7.85782 23.4801C7.11407 23.4801 6.5099 22.8749 6.5099 22.1311C6.5099 21.3874 7.11407 20.7832 7.85782 20.7832ZM19.6081 20.7832C20.3529 20.7832 20.9581 21.3874 20.9581 22.1311C20.9581 22.8749 20.3529 23.4801 19.6081 23.4801C18.8644 23.4801 18.2602 22.8749 18.2602 22.1311C18.2602 21.3874 18.8644 20.7832 19.6081 20.7832ZM3.40386 3.13488L5.57053 3.50988C5.91949 3.57134 6.18511 3.86092 6.21532 4.21509L6.46011 7.1328L7.37037 7.13319C7.51891 7.13326 7.66587 7.13332 7.81128 7.13339L9.48243 7.13418C9.61564 7.13425 9.74736 7.13432 9.8776 7.13438L11.7228 7.1354C11.8387 7.13546 11.9533 7.13553 12.0664 7.1356L13.3595 7.13642C13.4619 7.13649 13.563 7.13656 13.6629 7.13663L14.8002 7.13747C14.89 7.13754 14.9786 7.13761 15.0659 7.13768L16.0575 7.13853C16.1355 7.13861 16.2124 7.13868 16.2881 7.13875L16.9399 7.1394C17.009 7.13947 17.0771 7.13954 17.1441 7.13961L17.8989 7.14049C17.9577 7.14056 18.0156 7.14064 18.0725 7.14071L18.7098 7.1416C18.7592 7.14167 18.8077 7.14175 18.8553 7.14182L19.2603 7.1425C19.3027 7.14258 19.3443 7.14265 19.3851 7.14273L19.8363 7.14364C19.8708 7.14372 19.9045 7.1438 19.9375 7.14387L20.2152 7.14457C20.2439 7.14464 20.272 7.14472 20.2994 7.1448L20.597 7.14574C20.6194 7.14582 20.6411 7.1459 20.6622 7.14597L20.837 7.14669C20.8547 7.14677 20.872 7.14685 20.8887 7.14693L21.0655 7.14789C21.0783 7.14797 21.0907 7.14805 21.1027 7.14813L21.199 7.14886C21.2085 7.14895 21.2177 7.14903 21.2264 7.14911L21.2958 7.14985C21.3025 7.14993 21.3089 7.15001 21.315 7.1501L21.3622 7.15084C21.3666 7.15093 21.3708 7.15101 21.3748 7.15109L21.4046 7.15185C21.4074 7.15193 21.4099 7.15202 21.4123 7.1521L21.4339 7.15312L21.4376 7.15338C21.4477 7.15433 21.4507 7.15467 21.4507 7.15467C22.0309 7.23905 22.5414 7.54217 22.8893 8.00884C23.2372 8.47447 23.383 9.04842 23.2997 9.62342L22.3111 16.4547C22.1247 17.7547 20.9955 18.7349 19.683 18.7349H8.30698C6.93511 18.7349 5.77365 17.664 5.66219 16.2943L4.70803 4.94634L3.13824 4.67551C2.71219 4.60051 2.42782 4.19738 2.50074 3.77134C2.57574 3.3453 2.98719 3.06822 3.40386 3.13488ZM7.16139 8.69565L6.59136 8.6953L7.21948 16.1661C7.26532 16.7411 7.73511 17.1724 8.30907 17.1724H19.6809C20.2236 17.1724 20.6872 16.7682 20.7643 16.2318L21.7539 9.39947C21.7768 9.23697 21.7362 9.07447 21.6372 8.94322C21.5393 8.81092 21.3955 8.72551 21.233 8.70259C21.2255 8.70288 21.2075 8.70314 21.1796 8.70338L21.0663 8.70403C21.0426 8.70412 21.0165 8.70422 20.9881 8.7043L20.398 8.7052C20.3482 8.70523 20.2965 8.70526 20.2428 8.70529L18.8553 8.70523C18.7779 8.7052 18.699 8.70517 18.6187 8.70514L17.0353 8.70417C16.9404 8.7041 16.8445 8.70403 16.7476 8.70396L15.8516 8.70324C15.7496 8.70316 15.6468 8.70307 15.5432 8.70298L14.5942 8.70215C14.487 8.70205 14.3793 8.70195 14.2712 8.70185L13.6175 8.70125C13.5078 8.70115 13.3978 8.70105 13.2875 8.70095L12.2899 8.70001C12.1787 8.69991 12.0674 8.69981 11.9561 8.6997L11.2887 8.69908C11.1777 8.69898 11.0667 8.69888 10.956 8.69878L10.2943 8.69817C10.1846 8.69808 10.0752 8.69798 9.96614 8.69788L8.99686 8.69705C8.89069 8.69696 8.78509 8.69687 8.68012 8.69679L7.4552 8.69586C7.35635 8.69579 7.2584 8.69572 7.16139 8.69565ZM18.0079 10.9831C18.4392 10.9831 18.7892 11.3331 18.7892 11.7644C18.7892 12.1956 18.4392 12.5456 18.0079 12.5456H15.1204C14.6881 12.5456 14.3392 12.1956 14.3392 11.7644C14.3392 11.3331 14.6881 10.9831 15.1204 10.9831H18.0079Z"
										fill="#616161"
									/>
								</svg>
								<span>Cart</span>
							</div>
						</Link>
						{/* link 06 account fighter*/}
						<Link to="/accountfighter" className="my-link mb-3">
							<div className="div-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.4841 15.9854C8.45535 15.9854 5.01488 16.5945 5.01488 19.034C5.01488 21.4734 8.43353 22.1044 12.4841 22.1044C16.5129 22.1044 19.9524 21.4943 19.9524 19.0558C19.9524 16.6173 16.5347 15.9854 12.4841 15.9854Z"
										stroke="#616161"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.4841 12.506C15.128 12.506 17.2708 10.3622 17.2708 7.71835C17.2708 5.0745 15.128 2.93164 12.4841 2.93164C9.84027 2.93164 7.69639 5.0745 7.69639 7.71835C7.68749 10.3533 9.81646 12.4971 12.4504 12.506H12.4841Z"
										stroke="#616161"
										stroke-width="1.42857"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span>Account</span>
							</div>
						</Link>
						{/* link 07 */}
						<Link to="/home" className="my-link mb-2">
							<div className="div-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
								>
									<path
										d="M15.6417 7.69762V6.72575C15.6417 4.60596 13.9229 2.88721 11.8031 2.88721H6.725C4.60625 2.88721 2.8875 4.60596 2.8875 6.72575V18.3195C2.8875 20.4393 4.60625 22.158 6.725 22.158H11.8135C13.9271 22.158 15.6417 20.4445 15.6417 18.331V17.3487"
										stroke="#616161"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M22.7182 12.5225H10.1755"
										stroke="#616161"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M19.6679 9.48584L22.7179 12.5223L19.6679 15.5598"
										stroke="#616161"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span>Logout</span>
							</div>
						</Link>
					</div>
					<div className="left-nav-ft mt-2">
						<h6 className="head-pills">Stripe Balance: $XXX.XX</h6>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default LeftAside;
