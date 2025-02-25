import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning194LineIconSvg from '../../assets/GSDD/Warning_194_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning194LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning194LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning194LineIcon.Style = SvgIcon;
Warning194LineIcon.displayName = 'Warning194LineIcon';

export default Warning194LineIcon
