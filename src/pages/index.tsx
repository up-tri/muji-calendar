import { CheckIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Container,
  Divider,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";
import { RootTemplate } from "../components/templates/RootTemplate";
import { months } from "../lib/types/Month";

const defaultMonths = months.map((v) => `${v}`);

const makeNextPath = (
  year: number | undefined,
  months: string[],
  isTate: boolean
): string => {
  if (!year) {
    return "/";
  }

  const paramMonths = [0, 12].includes(months.length)
    ? ""
    : `&months=${months.sort((a, b) => parseInt(a) - parseInt(b)).join(",")}`;
  return `/calendar?dir=${isTate ? "tate" : "yoko"}&year=${year}${paramMonths}`;
};

const buttonDisabled = (year: number | undefined, months: string[]): boolean =>
  year === undefined || !/^[0-9]{4}$/.test(`${year}`) || months.length === 0;

const checkError = (
  year: number | undefined,
  months: string[],
  callback: (v: string[]) => void
): void => {
  const msg: string[] = [];
  if (year === undefined || !/^[0-9]{4}$/.test(`${year}`)) {
    msg.push("年が不正です。");
  }

  if (months.length === 0) {
    msg.push("出力する月を選択してください。");
  }

  callback(msg);
};

export default function Home() {
  const router = useRouter();
  const [year, setYear] = useState<number | undefined>(undefined);
  const [months, setMonths] = useState<string[]>(defaultMonths);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [tate, setTate] = useState(true);

  useEffect(() => {
    checkError(year, months, setErrorMessages);
  }, [year, months]);

  return (
    <RootTemplate header={<Header />} footer={<Footer />}>
      <Container>
        <Box marginTop='50px'>
          <Text fontSize='md' textAlign='center' color='red.500'></Text>
        </Box>
        <Box
          flex='1'
          marginX='auto'
          marginY='30px'
          fontSize='md'
          textAlign='center'
        >
          <Card variant='filled'>
            <CardBody>
              <Text>生成する「年」を半角数字で入力してください。</Text>
              <Text fontSize='sm'>※祝日は2024年までに対応しています。</Text>
            </CardBody>
          </Card>
        </Box>
        <Box minHeight='72px' flex='1' marginY='30px' fontSize='md'>
          {errorMessages.length !== 0 && (
            <Alert status='error'>
              <AlertIcon />
              <Box>
                <AlertDescription>
                  {errorMessages.map((message, index) => (
                    <Text key={index}>{message}</Text>
                  ))}
                </AlertDescription>
              </Box>
            </Alert>
          )}
        </Box>
        <Box flex='1' marginY='30px' fontSize='md' textAlign='center'>
          <Input
            htmlSize={4}
            width='100px'
            type='number'
            min='0'
            step='1'
            marginRight='4px'
            placeholder='例:2022'
            onChange={(event) => {
              setYear(parseInt(event.target.value));
              // checkError(year, months, setErrorMessages);
            }}
          />
          <span style={{ verticalAlign: "middle" }}>年のカレンダーを</span>
          <Tooltip isDisabled={buttonDisabled(year, months)} label='aaa'>
            <Button
              marginLeft='4px'
              colorScheme='teal'
              size='lg'
              disabled={buttonDisabled(year, months)}
              onClick={() => {
                router.push(makeNextPath(year, months, tate), undefined, {});
              }}
            >
              <span style={{ verticalAlign: "middle" }}>生成する！</span>
            </Button>
          </Tooltip>
          <Card marginY='5' variant='outline'>
            <CardBody>
              <Stack direction='column' spacing={3} divider={<Divider />}>
                <Box>
                  <Text fontSize='xl' fontWeight='bold'>
                    <span style={{ verticalAlign: "middle" }}>生成する月</span>
                    <Button
                      marginLeft='8px'
                      colorScheme='blue'
                      size='sm'
                      onClick={() => {
                        setMonths(defaultMonths);
                        // checkError(year, months, setErrorMessages);
                      }}
                    >
                      全選択
                    </Button>
                    <Button
                      marginLeft='8px'
                      colorScheme='blue'
                      variant='outline'
                      size='sm'
                      onClick={() => {
                        setMonths([]);
                        // checkError(year, months, setErrorMessages);
                      }}
                    >
                      全解除
                    </Button>
                  </Text>
                  <Text marginTop='3' size='sm'>
                    チェック
                    <CheckIcon
                      style={{
                        width: "var(--chakra-sizes-4)",
                        height: " var(--chakra-sizes-4)",
                        margin: "0 4px 3px",
                        border: "2px solid var(--chakra-colors-teal-500)",
                        borderRadius: "var(--chakra-radii-sm);",
                        backgroundColor: "var(--chakra-colors-teal-500)",
                        color: "var(--chakra-colors-chakra-border-color)",
                      }}
                    />
                    を入れた月が生成されます。
                  </Text>
                  <CheckboxGroup
                    value={months}
                    colorScheme='teal'
                    onChange={(values: string[]) => {
                      setMonths(values);
                      checkError(year, months, setErrorMessages);
                    }}
                  >
                    <SimpleGrid
                      marginTop='5'
                      minChildWidth='60px'
                      spacing='10px'
                    >
                      <Checkbox value='1'>1月</Checkbox>
                      <Checkbox value='2'>2月</Checkbox>
                      <Checkbox value='3'>3月</Checkbox>
                      <Checkbox value='4'>4月</Checkbox>
                      <Checkbox value='5'>5月</Checkbox>
                      <Checkbox value='6'>6月</Checkbox>
                      <Checkbox value='7'>7月</Checkbox>
                      <Checkbox value='8'>8月</Checkbox>
                      <Checkbox value='9'>9月</Checkbox>
                      <Checkbox value='10'>10月</Checkbox>
                      <Checkbox value='11'>11月</Checkbox>
                      <Checkbox value='12'>12月</Checkbox>
                    </SimpleGrid>
                  </CheckboxGroup>
                </Box>
                <Box>
                  <Text fontSize='xl' fontWeight='bold'>
                    <span style={{ verticalAlign: "middle" }}>
                      カレンダーの向き
                    </span>
                  </Text>
                  <RadioGroup
                    value={tate ? "tate" : "yoko"}
                    colorScheme='teal'
                    onChange={(value: string) => {
                      setTate(value === "tate");
                    }}
                  >
                    <Stack marginTop='5' spacing='10px'>
                      <Radio defaultChecked value='tate'>
                        縦向き
                      </Radio>
                      <Radio value='yoko'>横向き</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </RootTemplate>
  );
}
