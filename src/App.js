import { jsx as _jsx } from "react/jsx-runtime";
import StockQuote from "./stock-quote";
export default function App(_a) {
    var symbol = _a.symbol;
    if (!symbol)
        return _jsx("p", { children: "No symbol was provided" });
    return (_jsx("div", { children: _jsx(StockQuote, { symbol: symbol }) }));
}
