import Image from "next/image";
import { CartButtonRoot, Header, HomeButton } from "../../styles/components/header";
import logoImg from "../../assets/Logo.svg";
import { Handbag, House } from "phosphor-react";
import { CartButton } from "../../styles/components/cartButton";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { CartModal } from "../cartModal";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "../../hooks/useCart";

export function HeaderComponent() {
  const { pathname } = useRouter();

  const { products } = useCart()

  return (
    <Header>
      <Image src={logoImg} alt="" />
      <div>
        {pathname !== "/" && (
          <Link href={"/"}>
            <HomeButton>
              <House color="#8D8D99" size={25} weight={"regular"} />
            </HomeButton>
          </Link>
        )}
        {pathname !== "/success" && (
          <AlertDialog.Root>
            <CartButtonRoot>
              {products.length > 0 && <span>{products.length}</span>}
              <AlertDialog.Trigger asChild>
                <CartButton>
                  <Handbag color="#8D8D99" size={25} weight={"regular"} />
                </CartButton>
              </AlertDialog.Trigger>
              <CartModal />
            </CartButtonRoot>
          </AlertDialog.Root>
        )}
      </div>
    </Header>
  );
}
