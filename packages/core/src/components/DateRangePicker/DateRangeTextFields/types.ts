import { DateRangeProps, DateRangeType } from '../types';

export type Props = {
    id: string;
    size: DateRangeProps['size'];
    variant: DateRangeProps['variant'];
    errorText: string;
    helperText: string;
    disabled: boolean;
    isActive: boolean;
    required: boolean;
    startDateLabel: string;
    endDateLabel: string;
    selectedDates: DateRangeProps['value'];
    onDateChange: DateRangeProps['onChange'];
    displayFormat: DateRangeProps['displayFormat'];
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    setFocusedElement: React.Dispatch<React.SetStateAction<'START_DATE' | 'END_DATE'>>;
    startDateRef: React.MutableRefObject<HTMLInputElement>;
    endDateRef: React.MutableRefObject<HTMLInputElement>;
    validator?: (val: DateRangeType, eventType?: string) => string;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
};
