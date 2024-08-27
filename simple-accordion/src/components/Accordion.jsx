import { useState } from "react";
import data from "./data";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelected, SetMultiSelected] = useState(null);

  function selectedTitle(id) {
    selected === id ? setSelected(null) : setSelected(id);
  }
  return (
    <div className="wrapper">
      <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
        </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <div className="title"
                   onClick={enableMultiSelection
                    ? () => enableMultiSelection(dataItem.id)
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
              {selected === dataItem.id ? (
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
