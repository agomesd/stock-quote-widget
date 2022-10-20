import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
var widgetDivs = document.querySelectorAll(".wt-finance-widget");
widgetDivs.forEach(function (div) {
    var widget = ReactDOM.createRoot(div);
    widget.render(_jsx(App, { symbol: div.dataset.symbol }));
});
