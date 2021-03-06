import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      header: string;
      background: string;
      backgroundLight: string;
      text: string;
      textLight: string;
    };
  }
}
