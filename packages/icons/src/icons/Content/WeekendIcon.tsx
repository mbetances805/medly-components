import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WeekendIconSvg from '../../assets/Content/weekend_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WeekendIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WeekendIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WeekendIcon.Style = SvgIcon;
WeekendIcon.displayName = 'WeekendIcon';

export default WeekendIcon
