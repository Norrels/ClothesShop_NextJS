import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/Logo.svg'
import { Container, Header } from "../styles/pages/app"
import Image from "next/future/image"

//ele deve fica fora por que toda vez que o componente fosse renderizado
//O css inteiro também seria...
globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
