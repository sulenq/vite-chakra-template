import { Center, Text } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";
import TopNav from "../components/TopNav";

export default function PortfolioPage() {
  return (
    <PageContainer id={"Portfolio Page"}>
      <TopNav />

      <Center flex={1}>
        <Text>Portfolio Page</Text>
      </Center>
    </PageContainer>
  );
}
