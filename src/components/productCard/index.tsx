import Image from "next/image";
import { ProductsProps } from "../../contexts/CartContext";
import { useCart } from "../../hooks/useCart";
import { CartContainer, CartContent } from "../../styles/components/cartItem";

interface ProductCartProps {
  product: ProductsProps;
}

export function ProductCart({ product }: ProductCartProps) {
  const { removeProductFromCart } = useCart();

  function hadleRemove(id: string) {
    removeProductFromCart(id);
  }

  return (
    <CartContainer>
      <picture>
        <Image width={100} height={100} src={product.imageUrl} alt=""></Image>
      </picture>
      <CartContent>
        <p>{product.name}</p>
        <strong>{product.price}</strong>
        <button onClick={() => hadleRemove(product.id)}>Remover</button>
      </CartContent>
    </CartContainer>
  );
}
