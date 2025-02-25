import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StopIconSvg from '../../assets/Media/stop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StopIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StopIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StopIcon.Style = SvgIcon;
StopIcon.displayName = 'StopIcon';

export default StopIcon
