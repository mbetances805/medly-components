import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FlashOffIconSvg from '../../assets/Image/flash_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlashOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlashOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlashOffIcon.Style = SvgIcon;
FlashOffIcon.displayName = 'FlashOffIcon';

export default FlashOffIcon
