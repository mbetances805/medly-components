import colors from '../colors';
import { StepperTheme } from './types';

const stepper: StepperTheme = {
    sizes: {
        S: {
            counterSize: '30px',
            fontSize: 'M3'
        },
        M: {
            counterSize: '60px',
            fontSize: 'L2'
        },
        L: {
            counterSize: '90px',
            fontSize: 'L3'
        },
        XL: {
            counterSize: '120px',
            fontSize: 'L4'
        }
    },
    defaultSize: 'S',
    counterColor: colors.white,
    activeColor: colors.professionalNavy,
    inactiveColor: colors.grey[300]
};

export default stepper;
