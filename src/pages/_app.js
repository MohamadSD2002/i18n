import "@/styles/globals.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import useLanguage from "@/hooks/useLanguage";

export default function App({ Component, pageProps }) {
  const { direction } = useLanguage();

  return (
    <I18nextProvider i18n={i18n}>
      <div style={{ direction: direction }}>
        <Component {...pageProps} />
      </div>
    </I18nextProvider>
  );
}
