import { styled } from "..";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const CartModalContent = styled(AlertDialog.Content, {
  maxWidth: "30rem",
  width: "100%",
  height: "100vh",
  borderRadius: "6px",
  padding: "2.5rem 3rem",
  background: "$gray800",
  //Hackerzinho para centralizar
  position: "fixed",
  top: "0",
  right: "0px",
  display: "flex",
  gap: "1rem",
  flexDirection: "column",

  h2: {
    fontSize: "$lg",
  },

  section: {
    height: "75%",
    display: "flex",
    flexDirection: "column",
    gap: '1.5rem'
  },
});

export const CartModalResume = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  span: {
    fontWeight: "bold",
    fontSize: "$md",
  },

  strong: {
    fontSize: "$xl",
  },
});

export const CartModalCancelButton = styled(AlertDialog.Cancel, {
  backgroundColor: "transparent",
  border: "0",
  lineHeight: "0",
  marginLeft: "auto",
  cursor: "pointer",
});

export const CartModalSubmitButton = styled("button", {
  padding: "1.3rem",
  borderRadius: "8px",
  backgroundColor: "$green500",
  fontWeight: "bold",
  color: "$white",
  fontSize: "$md",
  marginTop: "3rem",
});
