import { useState } from "react";
import data from "./data";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelected, SetMultiSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function selectedTitle(id) {
    selected === id ? setSelected(null) : setSelected(id);
  }

  function multipleSelectedTitle(id) {
    let cpyMultiSelected = [...multiSelected];
    const findIndexOfCurrentId = cpyMultiSelected.indexOf(id);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiSelected.push(id);
    else cpyMultiSelected.splice(findIndexOfCurrentId, 1);

    SetMultiSelected(cpyMultiSelected);
  }

  console.log(selected, multiSelected);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => multipleSelectedTitle(dataItem.id)
                    : () => selectedTitle(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                {selected === dataItem.id ? (
                  <div className="expand-element">-</div>
                ) : (
                  <div className="expand-element">+</div>
                )}
              </div>
              {selected === dataItem.id ||
              multiSelected.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
