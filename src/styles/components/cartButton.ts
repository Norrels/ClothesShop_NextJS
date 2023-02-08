import { styled } from "..";

export const CartButton = styled("button", {
  lineHeight: "0",
  border: "0px",
  display: "flex",
  padding: "0.7rem",
  cursor: "pointer",
  backgroundColor: "$gray800",
  borderRadius: "8px",

  variants: {
    color: {
      gray: {
        backgroundColor: "$gray800",
      },
      green: {
        backgroundColor: "$green500",
        "&:disabled": {
          opacity: 0.7,
          cursor: "not-allowed",
        },
      },
    },
  },
});

export const backToHomeButton = styled(CartButton)
