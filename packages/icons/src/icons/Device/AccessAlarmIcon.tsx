import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AccessAlarmIconSvg from '../../assets/Device/access_alarm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessAlarmIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AccessAlarmIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AccessAlarmIcon.Style = SvgIcon;
AccessAlarmIcon.displayName = 'AccessAlarmIcon';

export default AccessAlarmIcon
