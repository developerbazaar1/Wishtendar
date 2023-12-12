import React, { useState } from "react";
import LocaProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { DragButton } from "../elements/dragButton";

import { Draggable, Droppable } from "react-beautiful-dnd";

const Goals = ({ goals }) => {
  return (
    <>
      <Droppable droppableId="goal-card">
        {(provided, snapshot) => (
          <section
            className="goal-card-section"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {goals?.map((goal, index) => (
              <Draggable
                draggableId={goal.id.toString()}
                index={index}
                key={goal.id}
              >
                {(provided) => (
                  <Link
                    to="/goaldetails"
                    className="card goal-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div className="goal-car-img">
                      {/* card-drag-con start */}
                      <div className="card-drag-icon">{DragButton}</div>
                      {/* card-drag-con end */}
                      <img
                        src={goal.goalImg}
                        className="card-img-top"
                        alt="loading"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="goal-title">{goal.name}</h5>
                      <div className="price-plan-subscription">
                        <h5 className="goal-price-typo">{goal.price}</h5>
                        {goal?.frequency && (
                          <button className="freq-btn medium-typo">
                            {goal?.frequency}
                          </button>
                        )}
                      </div>
                      <div>
                        {goal?.ProgessBar && (
                          <div className="goal-progressbar">
                            <LocaProgressBar />
                          </div>
                        )}

                        <div className="goal-links">
                          <Link className="text-dark">
                            <AiOutlineLink size={20} />
                          </Link>
                          <Link className="d-flex  text-dark text-dec-non x-postbtn">
                            <FaXTwitter size={22} />
                            Post
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </Draggable>
            ))}
          </section>
        )}
      </Droppable>
    </>
  );
};

export default Goals;
