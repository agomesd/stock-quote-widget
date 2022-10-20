require("./index.css");
var $7OPzr$reactjsxruntime = require("react/jsx-runtime");
var $7OPzr$react = require("react");
var $7OPzr$reactdomclient = require("react-dom/client");
require("@swc/helpers/lib/_sliced_to_array.js");
var $7OPzr$moment = require("moment");
var $7OPzr$axios = require("axios");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}









var $29adde7787c57874$var$MARKET_STACK_QUOTE_URL = "http://api.marketstack.com/v1/intraday";
var $29adde7787c57874$var$MARKET_STACK_TICKER_URL = "http://api.marketstack.com/v1/tickers";
function $29adde7787c57874$var$StockQuote(param) {
    var symbol = param.symbol;
    var ref = (0, $29adde7787c57874$import$a521aa921bda7687$2e2bcd8739ae039)((0, $7OPzr$react.useState)({
        price: "--",
        var: "--",
        time: "--"
    }), 2), quote = ref[0], setQuote = ref[1];
    var ref1 = (0, $29adde7787c57874$import$a521aa921bda7687$2e2bcd8739ae039)((0, $7OPzr$react.useState)({
        stockExchange: "N/A",
        name: "N/A"
    }), 2), stock = ref1[0], setStock = ref1[1];
    (0, $7OPzr$react.useEffect)(function() {
        (0, ($parcel$interopDefault($7OPzr$axios))).get($29adde7787c57874$var$MARKET_STACK_QUOTE_URL, {
            params: {
                access_key: "9e7484493a22507236fa46fccf55e643",
                symbols: symbol,
                interval: "15min",
                date_from: (0, ($parcel$interopDefault($7OPzr$moment)))().subtract(1, "day").format("YYYY-MM-DD"),
                date_to: (0, ($parcel$interopDefault($7OPzr$moment)))().format("YYYY-MM-DD"),
                limit: "1"
            }
        }).then(function(result) {
            if (!result.data.data || result.data.data.length <= 0) return;
            var lastQuote = result.data.data[0];
            setQuote({
                price: lastQuote.last,
                var: (Math.trunc(-(1 - lastQuote.last / lastQuote.open) * 10000) / 100).toString(),
                time: (0, ($parcel$interopDefault($7OPzr$moment)))(lastQuote.date).format("YYYY-MM-DD HH:mm")
            });
        });
    }, [
        symbol
    ]);
    (0, $7OPzr$react.useEffect)(function() {
        (0, ($parcel$interopDefault($7OPzr$axios))).get("".concat($29adde7787c57874$var$MARKET_STACK_TICKER_URL, "/").concat(symbol), {
            params: {
                access_key: "9e7484493a22507236fa46fccf55e643"
            }
        }).then(function(result) {
            if (!result.data) return;
            setStock({
                stockExchange: result.data.stock_exchange.acronym,
                name: result.data.name
            });
        });
    }, [
        symbol
    ]);
    var varColor = +quote.var < 0 ? "text-red-500" : "text-green-500";
    return /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsxs)("div", {
        className: "quote rounded-lg shadow-md p-4 bg-gray-800",
        children: [
            /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsx)("span", {
                className: "quoteSymbol text-sm text-white font-bold",
                children: symbol
            }),
            /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsx)("span", {
                className: "quoteSymbol text-2xs text-gray-400 ml-1",
                children: stock.name
            }),
            /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsxs)("span", {
                className: "quoteSymbol text-2xs text-gray-400 ml-1",
                children: [
                    "(",
                    stock.stockExchange,
                    ")"
                ]
            }),
            /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsxs)("div", {
                className: "quote flex flex-row justify-between mt-1",
                children: [
                    /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsxs)("div", {
                        className: "quotePrice self-center text-2xl font-bold items-center text-white",
                        children: [
                            "$",
                            quote.price
                        ]
                    }),
                    /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsxs)("div", {
                        className: "flex flex-col text-right",
                        children: [
                            /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsxs)("div", {
                                className: "quoteVar " + varColor,
                                children: [
                                    quote.var,
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsx)("div", {
                                className: "quoteTime text-right text-2xs text-gray-400",
                                children: quote.time
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
var $29adde7787c57874$export$2e2bcd8739ae039 = $29adde7787c57874$var$StockQuote;


function $91b786905c14e19d$export$2e2bcd8739ae039(param) {
    var symbol = param.symbol;
    if (!symbol) return /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsx)("p", {
        children: "No symbol was provided"
    });
    return /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsx)((0, $29adde7787c57874$export$2e2bcd8739ae039), {
            symbol: symbol
        })
    });
}



var $89705e6c43d6e535$var$widgetDivs = document.querySelectorAll(".wt-finance-widget");
$89705e6c43d6e535$var$widgetDivs.forEach(function(div) {
    var widget = (0, ($parcel$interopDefault($7OPzr$reactdomclient))).createRoot(div);
    widget.render(/*#__PURE__*/ (0, $7OPzr$reactjsxruntime.jsx)((0, $91b786905c14e19d$export$2e2bcd8739ae039), {
        symbol: div.dataset.symbol
    }));
});


