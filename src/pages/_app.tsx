import { AppProps } from "next/app";
import "./styles/Frame.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
