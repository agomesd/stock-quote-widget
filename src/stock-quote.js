var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
var MARKET_STACK_QUOTE_URL = "".concat(process.env.REACT_APP_MARKETSTACK_BASE_URL, "/intraday");
var MARKET_STACK_TICKER_URL = "".concat(process.env.REACT_APP_MARKETSTACK_BASE_URL, "/tickers");
function StockQuote(_a) {
    var symbol = _a.symbol;
    var _b = useState({
        price: "--",
        var: "--",
        time: "--",
    }), quote = _b[0], setQuote = _b[1];
    var _c = useState({
        stockExchange: "N/A",
        name: "N/A",
    }), stock = _c[0], setStock = _c[1];
    useEffect(function () {
        axios
            .get(MARKET_STACK_QUOTE_URL, {
            params: {
                access_key: process.env.REACT_APP_MARKETSTACK_ACCESS_KEY,
                symbols: symbol,
                interval: "15min",
                date_from: moment().subtract(1, "day").format("YYYY-MM-DD"),
                date_to: moment().format("YYYY-MM-DD"),
                limit: "1",
            },
        })
            .then(function (result) {
            if (!result.data.data || result.data.data.length <= 0) {
                return;
            }
            var lastQuote = result.data.data[0];
            setQuote({
                price: lastQuote.last,
                var: (Math.trunc(-(1 - lastQuote.last / lastQuote.open) * 10000) / 100).toString(),
                time: moment(lastQuote.date).format("YYYY-MM-DD HH:mm"),
            });
        });
    }, [symbol]);
    useEffect(function () {
        axios
            .get("".concat(MARKET_STACK_TICKER_URL, "/").concat(symbol), {
            params: {
                access_key: process.env.REACT_APP_MARKETSTACK_ACCESS_KEY,
            },
        })
            .then(function (result) {
            if (!result.data) {
                return;
            }
            setStock({
                stockExchange: result.data.stock_exchange.acronym,
                name: result.data.name,
            });
        });
    }, [symbol]);
    var varColor = +quote.var < 0 ? "text-red-500" : "text-green-500";
    return (_jsxs("div", __assign({ className: "quote rounded-lg shadow-md p-4 bg-gray-800" }, { children: [_jsx("span", __assign({ className: "quoteSymbol text-sm text-white font-bold" }, { children: symbol })), _jsx("span", __assign({ className: "quoteSymbol text-2xs text-gray-400 ml-1" }, { children: stock.name })), _jsxs("span", __assign({ className: "quoteSymbol text-2xs text-gray-400 ml-1" }, { children: ["(", stock.stockExchange, ")"] })), _jsxs("div", __assign({ className: "quote flex flex-row justify-between mt-1" }, { children: [_jsxs("div", __assign({ className: "quotePrice self-center text-2xl font-bold items-center text-white" }, { children: ["$", quote.price] })), _jsxs("div", __assign({ className: "flex flex-col text-right" }, { children: [_jsxs("div", __assign({ className: "quoteVar " + varColor }, { children: [quote.var, "%"] })), _jsx("div", __assign({ className: "quoteTime text-right text-2xs text-gray-400" }, { children: quote.time }))] }))] }))] })));
}
export default StockQuote;
