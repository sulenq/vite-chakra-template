import { Center, Text } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";
import TopNav from "../components/TopNav";

export default function FaqsPage() {
  return (
    <PageContainer id={"FAQs Page"}>
      <TopNav />

      <Center flex={1}>
        <Text>FAQs Page</Text>
      </Center>
    </PageContainer>
  );
}
