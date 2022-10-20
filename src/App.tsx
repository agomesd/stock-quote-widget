import StockQuote from "./stock-quote";
interface AppProps {
  symbol: string | undefined;
}

export default function App({ symbol }: AppProps) {
  if (!symbol) return <p>No symbol was provided</p>;
  return (
    <div>
      <StockQuote symbol={symbol} />
    </div>
  );
}
