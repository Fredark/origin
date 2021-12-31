import {
  Tag,
  MoneyEnv,
  Label,
  Box,
  Money,
  Amount,
  MonthEnv,
  Item,
  Month,
  Year,
  TotalEnv,
  TotalLine,
  TotalLabel,
  TotalValue,
  Bottom,
  Highlight,
  Button,
} from './styles';

const Form: React.VFC = () => (
  <Tag>
    <MoneyInput />
    <MonthInput />
    <Total />
    <Button>Confirm</Button>
  </Tag>
);

const MoneyInput: React.VFC = () => (
  <MoneyEnv>
    <Label htmlFor="amount">Total amount</Label>
    <Box htmlFor="amount">
      <Money>
        <use xlinkHref="#money" />
      </Money>
      <Amount name="amount" id="amount" />
    </Box>
  </MoneyEnv>
);

const MonthInput: React.VFC = () => (
  <MonthEnv>
    <Label>Reach goal by</Label>
    <Box>
      <Item>
        <Month>October</Month>
        <Year>2021</Year>
      </Item>
    </Box>
  </MonthEnv>
);

const Total: React.VFC = () => (
  <TotalEnv>
    <TotalLine>
      <TotalLabel>Monthly Amount</TotalLabel>
      <TotalValue>$520.83</TotalValue>
    </TotalLine>
    <Bottom>
      You’re planning <Highlight>48 monthly deposits</Highlight> to reach your
      <Highlight> $25,000</Highlight> goal by
      <Highlight> October 2021</Highlight>.
    </Bottom>
  </TotalEnv>
);

export default Form;
