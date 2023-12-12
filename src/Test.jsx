import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  display: "flex !important",
  padding: grid,
  overflow: "auto important",
});

const Test = () => {
  const [items, setItems] = useState(getItems(6));

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}
                // onDragStart={(e) => handleDragStart(e, provided)}
              >
                {(provided, snapshot) => (
                  <>
                    <div {...provided.draggableProps}>
                      {item.content}

                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                      >
                        {" "}
                        Button1
                      </div>
                      <div> Button2</div>
                    </div>
                  </>
                )}
              </Draggable>
            ))}
            {/* {provided.placeholder} */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Test;
