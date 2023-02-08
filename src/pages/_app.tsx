import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";

import { HeaderComponent } from "../components/header";
import { CartProvider } from "../contexts/CartContext";

//ele deve fica fora por que toda vez que o componente fosse renderizado
//O css inteiro também seria...
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <HeaderComponent />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
