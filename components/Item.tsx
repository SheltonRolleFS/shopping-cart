import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { add } from '../redux/cart';

type Items = {
    id: number,
    name: string,
    image_url: string,
    price: number
}

function Item({ id, name, image_url, price }: Items) {
    
    const dispatch = useDispatch();

    const addToCart = async (id: number, name: string, price: number) => {
        const itemData = {
            id,
            name,
            price
        }

        await dispatch(add(itemData));
    }

    return (
        <div className="item-card">
            <p>Quantity</p>
            <Image src={image_url} alt="item-thumbnail" width="100px" height="100px" />
            <section>
                <h3>{name}</h3>
                <p>{price}</p>
            </section>
            <button onClick={() => addToCart(id, name, price)}>Add To Cart</button>
        </div>
    )
}

export default Item;