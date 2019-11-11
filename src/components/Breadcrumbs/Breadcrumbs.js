import React from "react";
import { useDispatch } from "react-redux";
import "./Breadcrumbs.css";
import { actions } from "../../services/checkout/index";
import BreadcrumbsItem from "./BreadcrumbsItem/BreadcrumbsItem";

function Breadcrumbs(props) {
  const dispatch = useDispatch();
  const changeActiveStep = id => dispatch(actions.changeStep(id));

  return (
    <div className="Breadcrumbs">
      {props.steps.map(step => (
        <BreadcrumbsItem
          key={step.id}
          {...step}
          changeActiveStep={changeActiveStep}
        />
      ))}
    </div>
  );
}

export default Breadcrumbs;
