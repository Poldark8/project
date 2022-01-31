import React from 'react';
import BulletClasses from './Bullet.module.scss';

const Bullet: React.FC<{ isActive?: boolean }> = (props) => {
    return (
        <span className={`${BulletClasses.bullet} ${props.isActive && BulletClasses.active}`}>

        </span>
    );
};


export default Bullet;