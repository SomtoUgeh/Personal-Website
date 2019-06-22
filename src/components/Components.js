import React, { useState } from "react";

const style = {
  listContainer: {
    listStyle: "none",
    paddingLeft: 0
  },
  itemStyle: {
    cursor: "pointer",
    padding: 5
  }
};

export const MultiselectCheckbox = ({ options, onChange }) => {
  const [data, setData] = useState(options);

  const toggle = item => {
    data.map((_, key) => {
      if (data[key].label === item.label) data[key].checked = !item.checked;
    });
    setData([...data]);
    onChange(data);
  };

  return (
    <ul style={style.listContainer}>
      {data.map(item => {
        return (
          <li key={item.label} style={style.itemStyle} onClick={() => toggle(item)}>
            <input readOnly type="checkbox" checked={item.checked || false} />
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export const TextArea = ({
  name,
  callback,
  cols = 20,
  rows = 2,
  disabled = false,
  readOnly = false,
  placeholder = ""
}) => {
  return (
    <textarea
      name={name}
      cols={cols}
      rows={rows}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={({ target: { name, value } }) => callback(name, value)}
    />
  );
};

export const Select = ({
  name,
  values,
  callback,
  disabled = false,
  readonly = false,
  selected
}) => {
  return (
    <select
      name={name}
      disabled={disabled}
      readOnly={readonly}
      onChange={({ target: { name, value } }) => callback(name, value)}
    >
      {values.map(([value, text]) => (
        <option selected={selected === value} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
};

export const Collapse = props => {
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);

  const style = {
    collapsed: {
      opacity: 0,
      visibility: "hidden",
      transition: "all 200ms ease-in-out"
    },
    expanded: {
      visibility: "visible",
      opacity: 1
    },
    buttonStyle: {
      display: "block",
      width: "100%"
    }
  };

  return (
    <div>
      <button style={style.buttonStyle} onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Show" : "Hide"} content
      </button>
      <div
        className="collapse-content"
        style={isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
};
