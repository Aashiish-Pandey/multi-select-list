import ReactDOM from "react-dom";
import React, { useState } from "react";
import "./styles.css";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <SelectBoxes />
  </React.StrictMode>,
  rootElement
);

function SelectBoxes() {
  const [boxOneState, setBoxOneState] = useState([
    {
      value: "apple",
      label: "Apple"
    },
    {
      value: "orange",
      label: "Orange"
    },
    {
      value: "banana",
      label: "Banana"
    },
    {
      value: "maruti",
      label: "Maruti"
    },
    {
      value: "vento",
      label: "Vento"
    },
    {
      value: "s8",
      label: "Galaxy S8"
    }
  ]);
  const [boxTwoState, setBoxTwoState] = useState([
    {
      value: "peach",
      label: "Peach"
    },
    {
      value: "verna",
      label: "Verna"
    },
    {
      value: "train18",
      label: "Train 18"
    },
    {
      value: "lg_oled",
      label: "LG OLED"
    }
  ]);

  const [selectedItemsBoxOne, setSelectedItemsBoxOne] = useState([]);
  const [selectedItemsBoxTwo, setSelectedItemsBoxTwo] = useState([]);

  return (
    <div className="container">
      <select
        multiple
        onChange={(e) => {
          const items = Array.from(e.target.selectedOptions).map((option) => {
            const oneItem = boxOneState.find(
              (item) => item.value === option.value
            );
            return oneItem;
          });

          setSelectedItemsBoxOne(items);
        }}
      >
        {boxOneState.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="buttons">
        <button
          onClick={() => {
            setBoxTwoState([...boxTwoState, ...selectedItemsBoxOne]);

            const filteredItems = boxOneState.filter((item) => {
              const selectedItem = selectedItemsBoxOne.find(
                (sItem) => sItem.value === item.value
              );
              return !selectedItem;
            });

            setBoxOneState(filteredItems);
            setSelectedItemsBoxOne([]);
          }}
        >
          &gt;
        </button>
        <button
          onClick={() => {
            setBoxOneState([...boxOneState, ...selectedItemsBoxTwo]);

            const filteredItems = boxTwoState.filter((item) => {
              const selectedItem = selectedItemsBoxTwo.find(
                (sItem) => sItem.value === item.value
              );
              return !selectedItem;
            });

            setBoxTwoState(filteredItems);
            setSelectedItemsBoxTwo([]);
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            setBoxTwoState([...boxTwoState, ...boxOneState]);
            setBoxOneState([]);
            setSelectedItemsBoxOne([]);
          }}
        >
          &gt;&gt;
        </button>
        <button
          onClick={() => {
            setBoxOneState([...boxOneState, ...boxTwoState]);
            setBoxTwoState([]);
            setSelectedItemsBoxTwo([]);
          }}
        >
          &lt;&lt;
        </button>
      </div>
      <select
        multiple
        onChange={(e) => {
          const items = Array.from(e.target.selectedOptions).map((option) => {
            const oneItem = boxTwoState.find(
              (item) => item.value === option.value
            );
            return oneItem;
          });

          setSelectedItemsBoxTwo(items);
        }}
      >
        {boxTwoState.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
