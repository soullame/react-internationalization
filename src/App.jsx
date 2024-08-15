import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center h-screen w-full bg-slate-950 flex-col">
      <h3 className="text-white font-semibold text-6xl mb-3">{t("hello")}</h3>
      <p className="text-white font-medium text-lg mb-6">
        {t("welcome_message")}
      </p>
      <LanguageSelector />
    </div>
  );
}

export default App;
