export const theme = {
  primary: {
    light: "#d0f4f0",
    main: "#13c8b5",
    dark: "#12baa9",
  },
  grey: {
    700: "#707070",
    900: "#1b1b1d",
  },
  background: {
    default: "#f5f5f5",
  },
  text: {
    disabled: "#BABABA",
    header: "#fff",
  },
  range: {
    selected: "#12baa9",
    hover: "#12baa9",
    selectedHoverColor: "#12baa9",
    selectedEndColor: "#12baa9",
    selectedTextEndColor: "#fff",
    selectedTextColor: "#fff",
  },
  sizes: {
    height: "40px",
    selectedRadius: "25px",
    button: "10px",
  },
};

export interface Theme {
  primary: {
    light: string;
    main: string;
    dark: string;
  };
  grey: {
    700: string;
    900: string;
  };
  background: {
    default: string;
  };
  text: {
    disabled: string;
    header: string;
  };
  range: {
    selected: string;
    hover: string;
    selectedHoverColor: string;
    selectedEndColor: string;
    selectedTextEndColor: string;
    selectedTextColor: string;
  };
  sizes: {
    height: string;
    selectedRadius: string;
    button: string;
  };
}
