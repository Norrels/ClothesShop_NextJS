import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";
import { ProductsProps } from "../../contexts/CartContext";
import { useCart } from "../../hooks/useCart";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductPropsUnit {
  product: ProductsProps;
}

export default function Product({ product }: ProductPropsUnit) {
  const [isCreatingCheckOutSession, setIsCreatingCheckOutSession] =
    useState(false);

  const { checkeIfProductIsInCart, addToCart } = useCart();

  const isProductInCart = checkeIfProductIsInCart(product.id);

  function handleBuyProduct() {
    addToCart(product);
    // try {
    //   setIsCreatingCheckOutSession(true);

    //   const response = await axios.post("/api/checkout", {
    //     priceId: product.defaultPriceId,
    //   });

    //   const { checkoutUrl } = response.data;

    //   window.location.href = checkoutUrl;
    // } catch (err) {
    //   alert("Falha ao redirecionar o checkout!");
    // }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={480} height={520} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>
          <button
            disabled={isCreatingCheckOutSession || isProductInCart}
            onClick={handleBuyProduct}
          >
            {isProductInCart ? "Produto já adicionado" : "Compra agora"}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_Mk7zo8XkHSb1CJ" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, //1 hour
  };
};
