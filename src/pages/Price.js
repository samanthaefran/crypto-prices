import { useState, useEffect } from 'react';

const Price = (props) => {
  const apiKey = 'BDB76343-B9D6-4FE9-AB31-AEC6CEA89E2A';

  const symbol = props.match.params.symbol;

  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);

  async function getCoin() {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
  }

  useEffect(() => {
    getCoin();
  }, []) // the empty brackets are called a dependency array. tells react that we have no other items to watch for in order to run the effect function.. if there are other items we do want it to watch, we can put them in the array.

  const loading = () => <h1>loading ...</h1>

  const loaded = () => {
    return (
      <div>
        <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
        <h2>{coin.rate}</h2>
      </div>
    )
  }
  return coin ? loaded() : loading(); // this is a ternary function, it asks do we have a coin? if so return loaded if not (:) return loading .. called conditional rendering 
}

export default Price;