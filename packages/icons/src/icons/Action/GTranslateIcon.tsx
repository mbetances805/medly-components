import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GTranslateIconSvg from '../../assets/Action/g_translate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GTranslateIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GTranslateIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GTranslateIcon.Style = SvgIcon;
GTranslateIcon.displayName = 'GTranslateIcon';

export default GTranslateIcon
