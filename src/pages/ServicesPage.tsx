import { Center, Text } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";
import TopNav from "../components/TopNav";

export default function ServicePage() {
  return (
    <PageContainer id={"Service Page"}>
      <TopNav />

      <Center flex={1}>
        <Text>Services Page</Text>
      </Center>
    </PageContainer>
  );
}
