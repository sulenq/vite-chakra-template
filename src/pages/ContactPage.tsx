import { Center, Text } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";
import TopNav from "../components/TopNav";

export default function ContactPage() {
  return (
    <PageContainer id={"Contact Page"}>
      <TopNav />

      <Center flex={1}>
        <Text>Contact Page</Text>
      </Center>
    </PageContainer>
  );
}
