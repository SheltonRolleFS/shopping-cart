import Item from "../components/Item";

import { data } from '../Data/StoreData';

const Home = () => {
  return (
    <div>
      {data.map((d) => {
        return <Item key={d.id} id={d.id} name={d.name} image_url={d.image_url} price={d.price} />
      })}
    </div>
  )
}

export default Home
