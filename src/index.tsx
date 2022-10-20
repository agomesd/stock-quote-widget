import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const widgetDivs = document.querySelectorAll(
  ".wt-finance-widget"
) as NodeListOf<HTMLElement>;

widgetDivs.forEach((div) => {
  const widget = ReactDOM.createRoot(div);
  widget.render(<App symbol={div.dataset.symbol} />);
});
