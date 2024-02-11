import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { css } from "@emotion/css";

export const Option = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: "2vh",
  height: "10vh",
  width: "100%",
  lineHeight: "10vh",
  ":hover": {
    cursor: "pointer",
  },
  ":active": {
    backgroundColor: theme.palette.action.active,
    opacity: theme.palette.action.activatedOpacity,
  },
}));

export const useClasses = () => ({
  container: css({
    textAlign: "center",
    maxHeight: "80vh",
  }),
  optionsBox: css({
    display: "flex",
    flexDirection: "column",
    height: "80%",
    marginTop: "2vh",
  }),
});
