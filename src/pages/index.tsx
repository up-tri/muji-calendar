import {
  Box,
  Button,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";
import { RootTemplate } from "../components/templates/RootTemplate";

export default function Home() {
  const router = useRouter();
  const [year, setYear] = useState<number | undefined>(undefined);

  return (
    <RootTemplate header={<Header />} footer={<Footer />}>
      <Box marginTop='50px'>
        <Text fontSize='md' textAlign='center' color='red.500'>
          ※2022年・2023年に対応しています。
        </Text>
      </Box>
      <Box flex='1' marginY='30px' fontSize='md' textAlign='center'>
        <Popover>
          <PopoverTrigger>
            <Input
              htmlSize={4}
              width='auto'
              type='number'
              min='0'
              step='1'
              marginRight='4px'
              placeholder='2022'
              onChange={(event) => {
                setYear(parseInt(event.target.value));
              }}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Box paddingX='14px'>
                有効な「年」を半角数字で
                <br />
                入力してください。
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        年のカレンダーを
        <Button
          marginLeft='4px'
          colorScheme='teal'
          size='lg'
          disabled={year === undefined || year <= 0}
          onClick={() => {
            router.push(`/calendar?year=${year}`, undefined);
          }}
        >
          生成する！
        </Button>
      </Box>
    </RootTemplate>
  );
}
