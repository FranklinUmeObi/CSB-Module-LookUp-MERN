import React from "react";

import Button from "@material-ui/core/Button";

import "./boxSelect.css";

import CardList from "./cardList";
import Sem1List from "./sem1List";
import Sem2List from "./sem2List";

function BoxSelect(props) {
  //--------------------------------------------------
  //State
  const [state, setState] = React.useState({
    selected: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    listVisibility: false,
  });

  //--------------------------------------------------
  //Functions

  const onShow = (event) => {
    setState({ ...state, listVisibility: true });
  };

  //--------------------------------------------------
  //Variables
  let ModuleList;
  if (props.semester === "1")
    ModuleList = <Sem1List state={state} setState={setState} />;
  else 
    ModuleList = <Sem2List state={state} setState={setState} />;

  //--------------------------------------------------
  // Checkboxes

  return (
    <div className="boxSelect">
      {ModuleList}
      <div className="buttonContainer">
        <Button
          className="button"
          size="large"
          onClick={onShow}
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </div>

      <CardList show={state.listVisibility} data={props.data} state={state} />
    </div>
  );
}
export default BoxSelect;
