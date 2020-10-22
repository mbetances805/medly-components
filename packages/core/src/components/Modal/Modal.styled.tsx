import { styled } from '@medly-components/utils';
import { ContentHeaderProps, ModalBackgroundProps } from './types';

export const ModalBackgroundStyled = styled.div<ModalBackgroundProps>`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.modal.overlayColor};
    z-index: 1000;
    animation: ${({ open, isSmallScreen }) => isSmallScreen && `${open ? 'fadeIn' : 'fadeOut'} 0.5s cubic-bezier(0, 0, 0.33, 1) `};
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 100;
        }
        100% {
            opacity: 0;
        }
    }

    @media (min-width: 768px) {
        align-items: center;
    }
`;

export const ContentHeaderStyled = styled.div<ContentHeaderProps>`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        margin-top: ${({ headerHeight }) => headerHeight / 10}rem;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.modal.scrollbarThumbColor};
    }

    @media (min-width: 768px) {
        overflow: hidden;

        &::-webkit-scrollbar-track {
            margin-top: 0;
        }
    }
`;
