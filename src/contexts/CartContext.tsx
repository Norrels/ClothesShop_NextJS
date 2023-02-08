import { createContext, ReactNode, useState } from "react";

export interface ProductsProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  defaultPrice: string;
  description: string;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContext {
  products: ProductsProps[];
  totalPrice: number;
  addToCart: (product: ProductsProps) => void;
  removeProductFromCart: (id: string) => void;
  checkeIfProductIsInCart: (id: string) => boolean;
}

export const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const totalPrice = products.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  function addToCart(product: ProductsProps) {
    setProducts((state) => [...state, product]);
  }

  function checkeIfProductIsInCart(productId: string) {
    const isItemOnCart = products.some((product) => product.id === productId);
    return isItemOnCart;
  }

  function removeProductFromCart(productId: string) {
    const productsWithoutDeletedOne = products.filter(
      (product) => product.id !== productId
    );
    setProducts(productsWithoutDeletedOne);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        checkeIfProductIsInCart,
        removeProductFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
