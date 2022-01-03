import { VFC, memo, useState } from 'react';
import MoneyInput from './MoneyInput';
import MonthInput from './MonthInput';
import Total from './Total';
import { Tag, Button } from './styles';
import { FormContextProvider, FormContextProps } from './FormContext';
import { GetNextMonth } from './MonthInput/DateInput';
import { useEffect } from 'react';

const Form: VFC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [reachDate, setReachDate] = useState<Date>(GetNextMonth());
  const [buttonActive, setButtonActive] = useState<boolean>(false);

  const formContextValues: FormContextProps = {
    amount,
    reachDate,
    setAmount,
    setReachDate,
  };

  useEffect(() => {
    setButtonActive(amount > 0);
  }, [amount]);

  return (
    <FormContextProvider value={formContextValues}>
      <Tag>
        <MoneyInput />
        <MonthInput />
        <Total />
        <Button type="button" isActive={buttonActive}>
          Confirm
        </Button>
      </Tag>
    </FormContextProvider>
  );
};

export default memo(Form);
