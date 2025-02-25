import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1546LineIconSvg from '../../assets/GSDD/SideEffect_154_6_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1546LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1546LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1546LineIcon.Style = SvgIcon;
SideEffect1546LineIcon.displayName = 'SideEffect1546LineIcon';

export default SideEffect1546LineIcon
