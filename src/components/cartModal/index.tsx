import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { X } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import {
  CartModalCancelButton,
  CartModalContent,
  CartModalResume,
  CartModalSubmitButton,
} from "../../styles/components/cartModal";
import { ProductCart } from "../productCard";

export function CartModal() {
  const { products, totalPrice } = useCart();

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay />
      <CartModalContent>
        <CartModalCancelButton>
          <X color="#8D8D99" size={30} />
        </CartModalCancelButton>
        <AlertDialog.Title>Sacola de compras</AlertDialog.Title>
        <AlertDialog.Description />
        {products.length < 1 ? (
          <section>Nenhum item selecionado...</section>
        ) : (
          <section>
            {products.map((product) => {
              return (
                <ProductCart key={product.id} product={product}></ProductCart>
              );
            })}
          </section>
        )}
        <CartModalResume>
          <p>Quantidade</p>
          <p>{products.length === 1 ? "1 Item" : products.length + " Itens"}</p>
        </CartModalResume>

        <CartModalResume>
          <span>Valor Total</span>
          <strong>{formatedPrice}</strong>
        </CartModalResume>
        <CartModalSubmitButton>Finalizar compra</CartModalSubmitButton>
      </CartModalContent>
    </AlertDialog.Portal>
  );
}
