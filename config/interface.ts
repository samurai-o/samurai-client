export type ProxyPathRewrite = {
  [key: string]: string;
};
export type ProxyOption = {
  target: string;
  pathRewrite?: ProxyPathRewrite;
  changeOrigin?: boolean;
  secure?: boolean;
};

export type ProxyConfig = {
  [key: string]: ProxyOption;
};
