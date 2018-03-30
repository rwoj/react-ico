import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarPanel = styled.div`
    z-index: 100;
    border-right: 1px solid #ccc;
    position: fixed;
    width: 300px;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: left 0.2s;
    will-change: left;
`;

const Sidebar = ({children}) => {
    return (
        <SidebarPanel>
            {children}
        </SidebarPanel>
    );
};

export default Sidebar;
