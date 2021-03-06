import React, { useContext } from 'react';
import { useCallback, useEffect } from 'react';
import { InputHTMLAttributes, useState } from 'react';
import FormContext from '../FormContext';
import {
  Item,
  HiddenDate,
  Month,
  Year,
  LeftArrow,
  RightArrow,
  Icon,
} from './styles';

const DateInput: React.VFC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const nextMonth = GetNextMonth();
  const nextMonthString = FormatDate(nextMonth);
  const [dateObj, setDateObj] = useState<Date>(nextMonth);
  const [date, setDate] = useState<string>(nextMonthString);
  const [month, setMonth] = useState<string>(FormatMonth(dateObj));
  const [year, setYear] = useState<string>(FormatYear(dateObj));
  const [leftArrowActive, setLeftArrowActive] = useState<boolean>(false);
  const { setReachDate } = useContext(FormContext);

  const handleLeftArrow = useCallback(() => {
    if (isLeftArrowInactive(dateObj, nextMonth)) return false;

    setDateObj(PreviousMonth(dateObj));
  }, [dateObj, nextMonth]);

  const handleRightArrow = useCallback(() => {
    setDateObj(NextMonth(dateObj));
    setLeftArrowActive(true);
  }, [dateObj]);

  const handleUpArrow = useCallback(() => {
    setDateObj(NextYear(dateObj));
    setLeftArrowActive(true);
  }, [dateObj]);

  const handleDownArrow = useCallback(() => {
    if (dateObj.getFullYear() <= nextMonth.getFullYear()) return false;
    if (
      dateObj.getFullYear() <= nextMonth.getFullYear() + 1 &&
      dateObj.getMonth() < nextMonth.getMonth()
    )
      return false;

    setDateObj(PreviousYear(dateObj));
  }, [dateObj, nextMonth]);

  const handleItemKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') handleRightArrow();
    if (e.key === 'ArrowLeft') handleLeftArrow();

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleUpArrow();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleDownArrow();
    }
  };

  useEffect(() => {
    setDate(FormatDate(dateObj));
    setMonth(FormatMonth(dateObj));
    setYear(FormatYear(dateObj));

    if (!canNavigateMonthBack(dateObj, nextMonth)) setLeftArrowActive(false);
  }, [dateObj, nextMonth]);

  useEffect(() => {
    setReachDate(dateObj);
  }, [dateObj, setReachDate]);

  return (
    <Item
      {...props}
      tabIndex={1}
      onKeyDown={handleItemKeyUp}
      data-testid="date-selector"
    >
      <HiddenDate
        type="text"
        value={date}
        min={nextMonthString}
        name="reachDate"
        id="reachDate"
        readOnly
        data-testid="reach-date"
      />
      <Month>{month}</Month>
      <Year>{year}</Year>
      <LeftArrow
        onClick={handleLeftArrow}
        isActive={leftArrowActive}
        data-testid="date-left-arrow"
      >
        <Icon>
          <use xlinkHref="#arrow" />
        </Icon>
      </LeftArrow>
      <RightArrow
        onClick={handleRightArrow}
        isActive={true}
        data-testid="date-right-arrow"
      >
        <Icon>
          <use xlinkHref="#arrow" />
        </Icon>
      </RightArrow>
    </Item>
  );
};

export function GetNextMonth(): Date {
  const currentDate = new Date();
  return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
}

export function FormatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function FormatMonth(date: Date): string {
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
}

export function FormatYear(date: Date): string {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);
}

function PreviousMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

function NextMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

function PreviousYear(date: Date): Date {
  return new Date(date.getFullYear() - 1, date.getMonth(), 1);
}

function NextYear(date: Date): Date {
  return new Date(date.getFullYear() + 1, date.getMonth(), 1);
}

function canNavigateMonthBack(date: Date, nextMonth: Date): boolean {
  return (
    date.getMonth() > nextMonth.getMonth() ||
    date.getFullYear() > nextMonth.getFullYear()
  );
}

export function isLeftArrowInactive(date: Date, nextMonth: Date): boolean {
  return (
    date.getMonth() <= nextMonth.getMonth() &&
    date.getFullYear() <= nextMonth.getFullYear()
  );
}

export default DateInput;
