import Image from "next/image";
import { Header } from "../../styles/components/header";
import logoImg from "../../assets/Logo.svg";
import { Handbag, House } from "phosphor-react";
import { CartButton } from "../../styles/components/cartButton";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { CartModal } from "../cartModal";
import { useRouter } from "next/router";
import Link from "next/link";

export function HeaderComponent() {
  const { pathname } = useRouter();

  return (
    <Header>
      <Image src={logoImg} alt="" />
      <AlertDialog.Root>
        <div>
          {pathname !== "/" && (
            <Link href={"/"}>
              <span>
                <House color="#8D8D99" size={25} weight={"regular"} />
              </span>
            </Link>
          )}
          <AlertDialog.Trigger asChild>
            <CartButton>
              <Handbag color="#8D8D99" size={25} weight={"regular"} />
            </CartButton>
          </AlertDialog.Trigger>
        </div>

        <CartModal />
      </AlertDialog.Root>
    </Header>
  );
}
