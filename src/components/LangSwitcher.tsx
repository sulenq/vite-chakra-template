import { Button, ButtonProps, Tooltip } from "@chakra-ui/react";
import useTrigger from "../global/useTrigger";
import { getLang, setLang as setLangLocal } from "../lib/lang";

interface Props extends ButtonProps {}

export default function LangSwitcher({ ...props }: Props) {
  const lang = getLang();
  const { trigger, setTrigger } = useTrigger();

  const onSwitchLang = () => {
    if (lang === "id") {
      setLangLocal("en");
      setTrigger(!trigger);
    } else {
      setLangLocal("id");
      setTrigger(!trigger);
    }
  };

  return (
    <Tooltip>
      <Button
        className={"btn"}
        onClick={onSwitchLang}
        px={"4px !important"}
        {...props}
      >
        {lang === "en" ? "ID" : "EN"}
      </Button>
    </Tooltip>
  );
}
