import { extendTheme } from "@chakra-ui/react";

export const globalTheme = extendTheme({
  config: {
    initialColorMode: "light",
  },

  colors: {
    p: {
      50: "#d7f3ff",
      100: "#b9ecff",
      200: "#88e2ff",
      300: "#50cfff",
      400: "#28b3ff",
      500: "#0693ff",
      600: "#0a7eeb",
      700: "#0f64be",
      800: "#135695",
      900: "#11345a",
    },
    ap: {
      50: "#0693ff1b",
      100: "#0693ff2b",
      200: "#0693ff",
      300: "#0693ff",
      400: "#0693ff",
      500: "#0693ff",
      600: "#0693ff",
      700: "#0693ff",
      800: "#0693ff",
      900: "#0693ff",
    },
    s: {
      50: "#FEE4D8",
      100: "#FFE6DB",
      200: "#FFC7B8",
      300: "#FFA294",
      400: "#FF7F7A",
      500: "#FF4E57",
      600: "#DB394F",
      700: "#B72748",
      800: "#931840",
      900: "#7A0E3A",
    },
    as: {
      50: "#ff4e571b",
      100: "#ff4e572b",
      200: "#ff4e57",
      300: "#ff4e57",
      400: "#ff4e57",
      500: "#ff4e57",
      600: "#ff4e57",
      700: "#ff4e57",
      800: "#ff4e57",
      900: "#ff4e57",
    },
    bnw: {
      200: "white",
      300: "white",
      500: "#191919",
      600: "#191919",
    },
    wnb: {
      200: "#191919",
      300: "#191919",
      500: "white",
      600: "white",
    },
    b: "#000000",
    bt: "#333333",
    w: "white",
    wt: "#eeeeee",
    error: "#E53E3E",
    dark: "#191919",
  },

  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark" : "white",
        color: props.colorMode === "dark" ? "wt" : "bt",
      },
    }),
  },

  components: {
    Accordion: {
      baseStyle: (props) => ({
        container: {
          borderColor: "var(--divider)",
        },
        button: {
          borderRadius: 8,
        },
        panel: {
          pb: 2,
        },
      }),
    },

    Alert: {
      baseStyle: (props) => ({
        container: {
          borderRadius: 12,
        },
      }),
      variants: {
        // Perbarui varian subtle untuk status error
        subtle: (props) => ({
          container: {
            bg: props.status === "error" ? "var(--reda3)" : undefined,
          },
          icon: {
            color: props.status === "error" ? "red.400" : undefined,
          },
        }),
      },
    },

    Badge: {
      baseStyle: (props) => ({
        p: "4px 12px",
        borderRadius: 6,
        fontSize: [10, null, 12],
        fontWeight: 500,
        // textTransform: "none",
      }),
    },

    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: "full",
      },
      sizes: {
        md: {
          px: 6,
        },
      },
    },

    Checkbox: {
      baseStyle: (props) => ({
        icon: {
          color: "white",
        },
        control: {
          border: props.isInvalid
            ? "1.5px solid #E53E3E"
            : "3px solid var(--divider3) !important",
          _focusVisible: {
            boxShadow: "none !important",
          },
        },
      }),
    },

    Drawer: {
      baseStyle: (props) => ({
        overlay: {
          bg: "#00000011",
          backdropFilter: "blur(5px)",
        },
        dialog: {
          bg: props.colorMode === "dark" ? "dark" : "white",
          boxShadow: "none",
        },
        header: {
          py: "20px",
          pt: "18px",
          px: "24px",
          pr: "20px",
        },
        body: {
          px: "24px",
          py: "0px !important",
          display: "flex",
          flexDirection: "column",
          // minH: window.innerWidth < 500 ? "300px" : "fit-content",
        },
        closeButton: {
          borderRadius: "full",
          right: 4,
          top: 4,
          fontSize: "13px !important",
        },
      }),
    },

    Input: {
      baseStyle: (props) => ({
        field: {
          _autofill: {
            border: "1px solid var(--divider3) !important",
          },
        },
      }),
    },

    Menu: {
      baseStyle: (props) => ({
        groupTitle: {
          opacity: 0.5,
          cursor: "default",
        },
        divider: {
          my: 0,
          // mx: -1,
          borderColor: "var(--divider3)",
        },
        list: {
          // bg: props.colorMode === "dark" ? "dark" : "white",
          bg: "#303030df",
          color: "white",
          backdropFilter: "blur(20px)",
          border: "1px solid var(--divider)",
          overflow: "hidden",
          boxShadow: "none",
          borderRadius: 8,
          p: "0px !important",
          // p: "4px",
        },
        item: {
          // borderRadius: "6px",
          bg: "transparent",
          _hover: { bg: "var(--divider3)" },
          _focus: { border: "none !important", boxShadow: "none !important" },
          _focusVisible: {
            border: "none !important",
            boxShadow: "none !important",
          },
          fontSize: 14,
          justifyContent: "space-between",
          py: 3,
          px: 4,
        },
      }),
    },

    Modal: {
      baseStyle: (props) => ({
        dialogContainer: {
          p: 4,
          className: "scrollY",
        },
        dialog: {
          bg: props.colorMode === "dark" ? "dark" : "white",
          color: props.colorMode === "dark" ? "wt" : "bt",
          // bg: "#252525ee",
          // color: "white !important",
          backdropFilter: "blur(40px)",
          boxShadow: "none",
          borderRadius: 12,
          // m: 4,
          border: "1px solid var(--divider2)",
          className: "scrollY",
          // maxH: "100%",
        },
        overlay: {
          bg: "#00000011",
          backdropFilter: "blur(8px)",
        },
        header: {
          p: 0,
          // pt: "18px",
          // pr: "20px",
          // pb: "20px",
          // pl: "24px",
        },
        body: {
          px: "24px",
          py: "0px !important",
          display: "flex",
          flexDirection: "column",
          // minH: window.innerWidth < 500 ? "300px" : "fit-content",
        },
        footer: {
          px: "24px",
          pt: "24px",
          pb: "24px",
        },
        closeButton: {
          borderRadius: "full",
          right: 4,
          top: 4,
          fontSize: "13px !important",
          // color: "red.400",
        },
      }),
    },

    Popover: {
      baseStyle: (props) => ({
        popper: {
          minW: "300px !important",
        },
        content: {
          fontSize: 14,
          // pr: 5,
          bg: props.colorMode === "dark" ? "dark" : "white",
          color: props.colorMode === "dark" ? "white" : "dark",
        },
        body: {
          pr: 8,
        },
        arrow: {
          bg: props.colorMode === "dark" ? "dark !important" : "white",
          color: props.colorMode === "dark" ? "dark" : "white",
        },
        closeButton: {
          right: 1,
          fontSize: "12px !important",
        },
      }),
    },

    Radio: {
      baseStyle: (props) => ({
        control: {
          border: "1px solid var(--divider3) !important",
        },
      }),
    },

    Skeleton: {
      baseStyle: (props) => ({
        // bg: "var(--divider3) !important",
        borderRadius: 8,
      }),
    },

    Table: {
      thead: {
        color: "var(--divider3) !important",
      },
      sizes: {
        md: {
          // th: {
          //   py: "16px",
          //   px: "12px",
          // },
          td: {
            py: "12px",
            px: "16px",
          },
        },
      },
    },

    Toast: {
      baseStyle: {
        fontSize: [13, null, 15],
        borderRadius: 8,
      },
      container: {
        w: "100% !important",
        maxW: "500px !important",
      },
    },

    Tooltip: {
      baseStyle: {
        bg: "#252525ee",
        color: "white !important",
        "--popper-arrow-bg": "#252525ee",
        backdropFilter: "blur(40px)",
        border: "1px solid var(--divider3)",
        borderRadius: 8,
        px: 4,
        py: 2,
      },
    },
  },
});
