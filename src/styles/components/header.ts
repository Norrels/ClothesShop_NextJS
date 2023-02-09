import { styled } from "..";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  div: {
    display: "flex",
    gap: "1rem",
  },
});

export const HomeButton = styled("span", {
  padding: "0.7rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  widht: "100%",
});

export const CartButtonRoot = styled("div", {
  position: "relative",

  span: {
    position: "absolute",
    top: "-9px",
    right: "-9px",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    fontSize: '12px',
    fontWeight: "bold",
    border: '3px solid $gray900',
    height: 25,
    width: 25,
    borderRadius: 9999999999,
    backgroundColor: "$green500"
  },
});
