import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MoreVertIconSvg from '../../assets/Navigation/more_vert_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoreVertIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MoreVertIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MoreVertIcon.Style = SvgIcon;
MoreVertIcon.displayName = 'MoreVertIcon';

export default MoreVertIcon
