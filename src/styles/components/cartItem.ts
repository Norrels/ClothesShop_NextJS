import { styled } from "..";

export const CartContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  height: "5.875rem",
  gap: "1rem",

  picture: {
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    width: "7rem",
    height: "100%",
    borderRadius: "8px",
  },
});

export const CartContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "calc(100% - 5rem)",
  height: "100%",

  button: {
    backgroundColor: "transparent",
    width: "fit-content",
    border: "none",
    color: "$green500",
    fontWeight: "bold",
    fontSize: "$base",
    cursor: "pointer"
  },
});
