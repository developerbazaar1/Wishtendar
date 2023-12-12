import React from "react";
import LocaProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { DragButton } from "../elements/dragButton";

import { Draggable, Droppable } from "react-beautiful-dnd";

const Goals = ({ goals }) => {
  return (
    <Droppable droppableId="goalCard" direction="horizontal">
      {(provided, snapshot) => (
        <section
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="goal-card-section"
        >
          {goals?.map((goal, index) => (
            <Draggable
              key={goal?.id}
              draggableId={goal.id.toString()}
              index={index}
            >
              {(provided) => (
                <div
                  className="card goal-card"
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                >
                  <Link
                    to="/goaldetails"
                    style={{
                      textDecoration: "none",
                    }}
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
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
};

export default Goals;
