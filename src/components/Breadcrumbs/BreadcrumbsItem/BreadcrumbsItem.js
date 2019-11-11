import React from "react";
import "./BreadcrumbsItem.css";

function BreadcrumbsItem(props) {
  const { name, changeActiveStep, id, isActive, isCompleted } = props;
  const classname = isActive ? " BreadcrumbsItem-active" : "";

  return (
    <div
      onClick={() => isCompleted && changeActiveStep(id)}
      className={"BreadcrumbsItem" + classname}
    >
      {isCompleted && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
            width="30"
          >
            <path
              fill="#a7a7a7"
              d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"
            />
            <path
              fill="#a7a7a7"
              d="M38.252 15.336l-15.369 17.29-9.259-7.407a1 1 0 00-1.249 1.562l10 8a.999.999 0 001.373-.117l16-18a1 1 0 10-1.496-1.328z"
            />
          </svg>
        </span>
      )}
      <span>{name}</span>
    </div>
  );
}

export default BreadcrumbsItem;
