import { Center, Text } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";
import TopNav from "../components/TopNav";

export default function AboutPage() {
  return (
    <PageContainer id={"About Page"}>
      <TopNav />

      <Center flex={1}>
        <Text>About Page</Text>
      </Center>
    </PageContainer>
  );
}
