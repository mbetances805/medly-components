import { HTMLProps, WithStyle, WithThemeProp } from '@medly-components/utils';
import { MutableRefObject } from 'react';
import { ModalActionUserProps } from './Actions/types';
import { Props as ModalPopupProps } from './Popup/types';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    /** Shows modal only when this prop is true */
    open?: boolean;
    /** Function to be called on closing modal */
    onCloseModal?: () => void;
    /** Min width in px/rem/% (1rem = 10px) */
    minWidth?: string;
    /** Min height in px/rem/% (1rem = 10px) */
    minHeight?: string;
    /** Set it true to close the modal on click outside of popup */
    shouldCloseOnOutsideClick?: boolean;
}

export interface ModalBackgroundProps {
    open?: boolean;
}

export interface HeaderProps extends Props {
    setHeaderHeight: (height: number) => void;
    isSmallScreen: boolean;
}

export interface ModalStaticProps {
    Popup?: React.FC<ModalPopupProps> & WithStyle;
    Header?: React.FC;
    Content?: React.FC;
    Actions?: React.FC<ModalActionUserProps>;
}

export interface ContentHeaderProps {
    /** height of the header component */
    headerHeight: number;
}

export interface UseScrollStateProps {
    scrollState: {
        scrolledToTop: boolean;
        scrolledToBottom: boolean;
        scrollPosition: number;
    };
    ref: MutableRefObject<HTMLDivElement>;
    dispatch: React.Dispatch<{
        type: 'scrolledToTop' | 'scrolledToBottom' | 'scrollPosition';
        value: boolean | number;
    }>;
}
