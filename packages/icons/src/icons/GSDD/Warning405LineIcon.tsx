import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning405LineIconSvg from '../../assets/GSDD/Warning_405_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning405LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning405LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning405LineIcon.Style = SvgIcon;
Warning405LineIcon.displayName = 'Warning405LineIcon';

export default Warning405LineIcon
