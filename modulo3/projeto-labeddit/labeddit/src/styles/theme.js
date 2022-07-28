import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "open sans",
    
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background: "linear-gradient(90deg, #7928CA 0%, #FF0080 100%)",
            color: "#ffffff",
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            background: "transparent",
            border: "1px solid #7928CA",
            color: "#262626",
          },
        },
      ],

      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "8px",
          textTransform: "capitalize",
          fontWeight: "700",
         
        },
      },
    },
  },
});

export default theme;
