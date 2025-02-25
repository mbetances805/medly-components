import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SubscriptionsIconSvg from '../../assets/Media/subscriptions_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubscriptionsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SubscriptionsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SubscriptionsIcon.Style = SvgIcon;
SubscriptionsIcon.displayName = 'SubscriptionsIcon';

export default SubscriptionsIcon
