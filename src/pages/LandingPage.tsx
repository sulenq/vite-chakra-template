import { Button, Heading, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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

      <VStack flex={1} justify={"center"} gap={6}>
        <Heading>Template by Sulenq</Heading>
        <Button
          as={Link}
          to={"/contact"}
          className="btn-ap clicky"
          colorScheme="ap"
        >
          Contact
        </Button>
      </VStack>
    </PageContainer>
  );
}
