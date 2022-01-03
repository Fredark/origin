import { render } from 'enzyme';
import Form from '../components/Form';
import { FormatMoneyInput } from '../components/Form/MoneyInput/AmountInput';
import {
  FormatDate,
  GetNextMonth,
  isLeftArrowInactive,
} from '../components/Form/MonthInput/DateInput';
import { FormatBigNumbers, FormatCurrency } from '../components/Form/Total';
import { Layout } from '../designSystem/Layout';

describe('Form', () => {
  const component = render(
    <Layout>
      <Form />
    </Layout>
  );

  const amount = component.find('[data-testid="amount"]');
  const reachDate = component.find('[data-testid="reach-date"]');
  const monthlyAmount = component.find('[data-testid="monthly-amount"]');
  const monthlyDeposits = component.find('[data-testid="monthly-deposits"]');
  const goal = component.find('[data-testid="goal"]');
  const dateSelector = component.find('[data-testid="date-selector"]');
  const dateLeftArrow = component.find('[data-testid="date-left-arrow"]');
  const dateRightArrow = component.find('[data-testid="date-right-arrow"]');

  it('required fields exist', () => {
    expect(amount).toHaveLength(1);
    expect(reachDate).toHaveLength(1);
    expect(monthlyAmount).toHaveLength(1);
    expect(monthlyDeposits).toHaveLength(1);
    expect(goal).toHaveLength(1);
    expect(dateSelector).toHaveLength(1);
    expect(dateLeftArrow).toHaveLength(1);
    expect(dateRightArrow).toHaveLength(1);
  });

  describe('Amount input', () => {
    it('block special and letter characters', () => {
      expect(FormatMoneyInput('abc~*/@!"\'')).toBe('');
    });

    it('autofill 0 when type . as first character', () => {
      expect(FormatMoneyInput('.')).toBe('0.');
      expect(FormatMoneyInput('.18')).toBe('0.18');
    });

    it('does not allow multiple . characters', () => {
      expect(FormatMoneyInput('..')).toBe('0.');
      expect(FormatMoneyInput('......')).toBe('0.');
      expect(FormatMoneyInput('10..50')).toBe('10.50');
      expect(FormatMoneyInput('10....50')).toBe('10.50');
      expect(FormatMoneyInput('10.5.0')).toBe('10.50');
      expect(FormatMoneyInput('10.5...0')).toBe('10.50');
      expect(FormatMoneyInput('10.50.123')).toBe('10.50');
    });

    it('adds , characters properly', () => {
      expect(FormatMoneyInput('100000')).toBe('100,000');
      expect(FormatMoneyInput('100')).toBe('100');
      expect(FormatMoneyInput('1000')).toBe('1,000');
      expect(FormatMoneyInput('1000000000')).toBe('1,000,000,000');
      expect(FormatMoneyInput('10000.50')).toBe('10,000.50');
      expect(FormatMoneyInput('10000.50...50')).toBe('10,000.50');
    });

    it('shows the numeric keyboard to mobile users', () => {
      expect(amount.prop('inputmode')).toBe('numeric');
      expect(amount.prop('pattern')).toBe('[0-9.]');
    });
  });

  describe('Reach Date input', () => {
    it('GetNextMonth helper works properly', () => {
      const next: Date = GetNextMonth();
      const nextMonth: number = next.getMonth();
      const nextYear: number = next.getFullYear();
      const today: Date = new Date();
      const todayMonth: number = today.getMonth();
      const todayYear: number = today.getFullYear();
      const yearDiff: number = nextYear - todayYear;

      expect(nextMonth === todayMonth + 12 * yearDiff + 1).toBe(true);
    });

    it('FormatDate helper works properly', () => {
      const date: string = FormatDate(new Date());

      expect(date).toMatch(/[\d]{4}[-][\d]{2}[-][\d]{2}/g);
    });

    it('has the next month as initial value', () => {
      const nextMonth: Date = GetNextMonth();
      const nextMonthString: string = FormatDate(nextMonth);

      expect(reachDate.prop('value')).toBe(nextMonthString);
    });

    it('disable left button when value <= nextMonth', () => {
      const date: Date = new Date();
      const minDate: Date = GetNextMonth();
      const futureDate: Date = new Date(
        date.getFullYear() + 1,
        date.getMonth() + 1,
        1
      );

      expect(isLeftArrowInactive(date, minDate)).toBe(true);
      expect(isLeftArrowInactive(minDate, minDate)).toBe(true);
      expect(isLeftArrowInactive(futureDate, minDate)).toBe(false);
    });
  });

  describe('Total block', () => {
    it('FormatBigNumbers helper works properly', () => {
      expect(FormatBigNumbers(10)).toBe('10.00');
      expect(FormatBigNumbers(100)).toBe('100.00');
      expect(FormatBigNumbers(1000.1)).toBe('1000.10');
      expect(FormatBigNumbers(100000.1)).toBe('100.00K');
      expect(FormatBigNumbers(1000000.0)).toBe('1.00M');
      expect(FormatBigNumbers(5983000000.0)).toBe('5.98B');
    });

    it('FormatCurrency helper works properly', () => {
      expect(FormatCurrency(10)).toBe('10');
      expect(FormatCurrency(100)).toBe('100');
      expect(FormatCurrency(1000)).toBe('1,000');
      expect(FormatCurrency(10.1)).toBe('10.10');
      expect(FormatCurrency(1000.1)).toBe('1,000.10');
      expect(FormatCurrency(473499)).toBe('473.50K');
      expect(FormatCurrency(1000000.1)).toBe('1M');
      expect(FormatCurrency(1000000.0)).toBe('1M');
      expect(FormatCurrency(5983000000)).toBe('5.98B');
    });
  });
});
