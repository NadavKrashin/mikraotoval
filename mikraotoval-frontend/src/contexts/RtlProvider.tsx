import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const RtlProvider = (props: { children: JSX.Element }) => {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
};

export default RtlProvider;
