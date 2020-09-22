export {};

declare global {
  interface Window {
    api: {
      app: {
        name: string,
        version: string
      },
      win: {
        minimize: () => void,
        maximize: () => boolean,
        close: () => void
      }
    };
  }
}
