import { useEffect, useState } from 'react';
import { Cart } from '../contexts/session';
import { useSession } from '../contexts/session-context';
import { useParams } from 'react-router-dom';

// const DefaultItem = {
//   id: 0,
//   name: '',
//   price: 0,
// };

type Props = {
  itemId?: number;
  itemData?: Cart;
};

const Item = ({ itemData }: Props) => {
  const [item, setItem] = useState<Cart | null>(null);
  const {
    session: { cart },
  } = useSession();

  const { id } = useParams();
  console.log(itemData, item, id);

  useEffect(() => {
    if (cart) {
      setItem;
    }
  }, [cart]);

  return <></>;
};

export default Item;
