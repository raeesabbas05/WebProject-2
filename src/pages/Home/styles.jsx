import styled from "@emotion/styled";

export const Wrapper = styled.div({
  marginTop: "25px",
  marginBottom: "25px",
  display: "flex",
  gap: "30px",

  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

export const CategoriesWrapper = styled("div")({
  minWidth: "220px",
  border: "transparent",
  borderRadius: "8px",
  alignSelf: "start",

  "@media (max-width: 568px)": {
    minWidth: "100%",
  },
});

export const CategoryWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isSelected",
})(({ isSelected }) => ({
  padding: "10px 20px",
  cursor: "pointer",
  backgroundColor: isSelected ? "#A9EAC7" : undefined,

  "&:not(:last-child)": {
    borderBottom: "1px solid gray",
  },

  "&:hover": {
    backgroundColor: isSelected ? "#A9EAC7" : "#dbdbdb",
  },
}));

export const ChartWrapper = styled("div")({
  flex: 1,
});
