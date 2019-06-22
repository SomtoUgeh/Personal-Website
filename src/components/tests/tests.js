import React from "react";
import { MultiselectCheckbox, TextArea, Select, Collapse } from "../Components";

let choices = [
  ["grapefruit", "Grapefruit"],
  ["lime", "Lime"],
  ["coconut", "Coconut"],
  ["mango", "Mango"]
];

const options = [{ label: "Item One" }, { label: "Item Two" }];

const CoolTests = () => {
  return (
    <>
      <Select
        name="test"
        values={choices}
        selected="lime"
        callback={(name, val) => console.log(name, val)}
      />
      <TextArea
        name="test1"
        placeholder="Insert some text here..."
        callback={(name, val) => console.log(name, val)}
      />
      <MultiselectCheckbox
        options={options}
        onChange={data => {
          console.log(data);
        }}
      />
      <Collapse>
        <h1>This is a collapse</h1>
        <p>Hello world!</p>
      </Collapse>
    </>
  );
};

export default CoolTests;
