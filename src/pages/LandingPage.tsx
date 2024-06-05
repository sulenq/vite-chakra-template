import { Center, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import PageContainer from "../components/PageContainer";
import TopNav from "../components/TopNav";
import useTrigger from "../global/useTrigger";
import { getLang, setLang as setLangLocal } from "../lib/lang";

export default function LandingPage() {
  const { setTrigger } = useTrigger();

  useEffect(() => {
    const lang = getLang();
    if (!lang) {
      setLangLocal("en");
      setTrigger(true);
    } else {
      setLangLocal(lang);
      setTrigger(true);
    }
  }, [setTrigger]);

  return (
    <PageContainer>
      <TopNav />

      <Center flex={1}>
        <Heading>Template by Sulenq</Heading>
      </Center>
    </PageContainer>
  );
}
