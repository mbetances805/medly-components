import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WifiOffIconSvg from '../../assets/Notification/wifi_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WifiOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WifiOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WifiOffIcon.Style = SvgIcon;
WifiOffIcon.displayName = 'WifiOffIcon';

export default WifiOffIcon
