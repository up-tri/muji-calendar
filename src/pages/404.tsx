import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";
import { RootTemplate } from "../components/templates/RootTemplate";

export default function Error400() {
  const router = useRouter();

  return (
    <RootTemplate
      header={<Header pageTitle='ページが見つかりません' />}
      footer={<Footer />}
    >
      <Box marginTop='50px'>
        <Text fontSize='md' textAlign='center' fontWeight='bold'>
          ページが見つかりません。
        </Text>
      </Box>
      <Box marginY='30px' textAlign='center'>
        <Button
          colorScheme='teal'
          size='lg'
          onClick={() => router.replace("/", undefined, { shallow: false })}
        >
          TOPページへ戻る
        </Button>
      </Box>
    </RootTemplate>
  );
}
