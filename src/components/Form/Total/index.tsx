import { useContext, useEffect, useState } from 'react';
import FormContext, { FormContextProps } from '../FormContext';
import { FormatMonth, FormatYear } from '../MonthInput/DateInput';
import {
  TotalEnv,
  TotalLine,
  TotalLabel,
  TotalValue,
  Bottom,
  Highlight,
} from './styles';

const Total: React.VFC = () => {
  const { amount, reachDate } = useContext<FormContextProps>(FormContext);
  const [monthlyValue, setMonthlyValue] = useState<string>('0');
  const [goal, setGoal] = useState<string>(amount.toString());
  const [depositsAmount, setDepositsAmount] = useState<number>(1);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const goalMonth = reachDate.getMonth();
    const monthDifference =
      goalMonth -
      currentMonth +
      12 * (reachDate.getFullYear() - currentDate.getFullYear());

    setDepositsAmount(monthDifference);
    setMonthlyValue(FormatCurrency(amount / monthDifference));
    setGoal(FormatCurrency(amount));
  }, [amount, reachDate]);
  return (
    <TotalEnv>
      <TotalLine>
        <TotalLabel>Monthly Amount</TotalLabel>
        <TotalValue data-testid="monthly-amount">
          {amount > 0 ? `$${monthlyValue}` : '$ -'}
        </TotalValue>
      </TotalLine>
      <Bottom>
        You’re planning
        <Highlight data-testid="monthly-deposits">
          {depositsAmount === 1
            ? ` ${depositsAmount} monthly deposit `
            : ` ${depositsAmount} monthly deposits `}
        </Highlight>
        to reach your
        <Highlight data-testid="goal"> ${goal}</Highlight> goal by
        <Highlight>
          {` ${FormatMonth(reachDate)} ${FormatYear(reachDate)}`}
        </Highlight>
        .
      </Bottom>
    </TotalEnv>
  );
};

export function FormatBigNumbers(value: number): string {
  if (value < 100000) return value.toFixed(2).toString();
  if (value < 1000000) return `${(value / 1000).toFixed(2).toString()}K`;
  if (value < 1000000000) return `${(value / 1000000).toFixed(2).toString()}M`;
  return `${(value / 1000000000).toFixed(2).toString()}B`;
}

export function FormatCurrency(value: number): string {
  const fixedTotal = FormatBigNumbers(value);

  return fixedTotal
    .replace(/\B(?=(\d{3})+(?!\d))/g, '$&,')
    .replace(/[.][0][0]/g, '');
}

export default Total;
