import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './TabPanel.styled';
import { Props } from './types';

export const TabPanel: React.FC<Props> & WithStyle = React.memo(props => {
    const { active, children, forceRender, className } = props;

    return (
        <>
            {React.Children.map(children, (child: any) => {
                const { id } = child.props;
                const isActive = id === active;
                const renderTabPanel = forceRender || isActive;

                return (
                    renderTabPanel && (
                        <Styled.TabPanel
                            isActive={isActive}
                            id={`${props.id}-${id}`}
                            role="tabpanel"
                            tabIndex={0}
                            aria-labelledby={id}
                            className={className}
                        >
                            {child.props.children}
                        </Styled.TabPanel>
                    )
                );
            })}
        </>
    );
});
TabPanel.displayName = 'TabPanel';
TabPanel.Style = Styled.TabPanel;
