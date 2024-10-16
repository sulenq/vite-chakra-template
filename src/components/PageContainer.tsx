import { VStack } from "@chakra-ui/react";
import TopNav from "./TopNav";

export default function PageContainer(props: any) {
  return (
    <VStack
      gap={0}
      minH={"100vh"}
      w={"100%"}
      align={"stretch"}
      overflowX={"clip"}
      {...props}
    >
      <TopNav />
      {props.children}
    </VStack>
  );
}
