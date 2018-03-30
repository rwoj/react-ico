import React from 'react';
import {rule} from '../../nano';

const width = 300;
const className = rule({
    z: 100,
    bdr: '1px solid #ccc',
    pos: 'fixed',
    w: width + 'px',
    h: '100%',
    top: 0,
    left: 0,
    ov: 'hidden',
    trs: 'left 0.2s',
    willChange: 'left',
}, 'Sidebar');

const Sidebar = () => {
    return <div className={className}>sidebar</div>;
};

export default Sidebar;
