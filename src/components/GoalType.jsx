import React, { useState } from "react";

const GoalType = () => {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [goalTypeClicked, setGoalTypeClicked] = useState(false);

  const handleGoalChange = (goalType) => {
    setSelectedGoal(goalType);
    setGoalTypeClicked(true);
  };

  return (
    <div className="form-group text-left mb-2">
      <label
        className="form-head mb-2 goaldropdownBtn"
        type="button"
        onClick={() => setGoalTypeClicked(!goalTypeClicked)}
      >
        Goal Type
      </label>

      {goalTypeClicked && (
        <div className="goal-container">
          {/* single goal container */}
          <div className="single-goal-cont">
            <div className="goal-select-grp">
              <input
                type="radio"
                name="Goal"
                id="singleGoal"
                onChange={() => handleGoalChange("single")}
              />
              <label htmlFor="singleGoal goal-price-typo">Single Goal</label>
            </div>
            {selectedGoal === "single" && (
              <div className="single-goal-content">
                <input type="checkbox" id="repeatPurchase" />
                <label htmlFor="repeatPurchase">
                  <span className="typo-grey-14">Allow Repeat Purchases</span>
                  <span className="typo-grey-12">
                    Check if you want the item to be bought again. Without
                    checking, it's gone after the first purchase
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* subscription-goal-container */}
          <div className="sub-goal-cont">
            <div className="goal-select-grp">
              <input
                type="radio"
                name="Goal"
                id="subscriptionGoal"
                onChange={() => handleGoalChange("subscription")}
              />
              <label htmlFor="subscriptionGoal goal-price-typo">
                Subscription
              </label>
            </div>
            {selectedGoal === "subscription" && (
              <div className="sub-goal-content row">
                <div className="sub-left col-5">
                  <input type="radio" name="sub" id="oneTime" />
                  <label htmlFor="oneTime" className="typo-grey-14">
                    Allow One time Purchase
                  </label>
                </div>
                <div className="sub-right col-6">
                  <div className="sub-right-inputpgrp">
                    <input type="radio" name="sub" id="Daily" />
                    <label htmlFor="Daily" className="typo-grey-14">
                      Daily
                    </label>
                  </div>
                  <div className="sub-right-inputpgrp">
                    <input type="radio" name="sub" id="Weekly" />
                    <label htmlFor="Weekly" className="typo-grey-14">
                      Weekly
                    </label>
                  </div>
                  <div className="sub-right-inputpgrp">
                    <input type="radio" name="sub" id="BiWeekly" />
                    <label htmlFor="BiWeekly" className="typo-grey-14">
                      Bi-Weekly
                    </label>
                  </div>
                  <div className="sub-right-inputpgrp">
                    <input type="radio" name="sub" id="Monthly" />
                    <label htmlFor="Monthly" className="typo-grey-14">
                      Monthly
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* crowd-goal */}
          <div className="crowd-fund">
            <div className="goal-select-grp">
              <input
                type="radio"
                name="Goal"
                id="crowdFundGoal"
                onChange={() => handleGoalChange("crowdFund")}
              />
              <label htmlFor="crowdFundGoal goal-price-typo">Crowd Fund</label>
            </div>
            {selectedGoal === "crowdFund" && (
              <label htmlFor="crowdFundGoal" className="typo-grey-14">
                Allows multiple fans to contribute to your goal.
              </label>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalType;
