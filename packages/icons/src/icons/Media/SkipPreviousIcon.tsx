import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SkipPreviousIconSvg from '../../assets/Media/skip_previous_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SkipPreviousIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SkipPreviousIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SkipPreviousIcon.Style = SvgIcon;
SkipPreviousIcon.displayName = 'SkipPreviousIcon';

export default SkipPreviousIcon
