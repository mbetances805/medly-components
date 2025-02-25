import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StayCurrentLandscapeIconSvg from '../../assets/Communication/stay_current_landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StayCurrentLandscapeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StayCurrentLandscapeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StayCurrentLandscapeIcon.Style = SvgIcon;
StayCurrentLandscapeIcon.displayName = 'StayCurrentLandscapeIcon';

export default StayCurrentLandscapeIcon
