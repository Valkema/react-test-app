import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Day.module.scss';
import {format} from 'date-fns';

const Day = ({currentDate}) => {
    return(
        <div className={styles.todayWrapper}>
            <div className={styles.number}>{format(currentDate, 'd')}</div>            
            <div className={styles.name}>{format(currentDate, 'iiii')}</div>
        </div>
    );    
};

Day.propTypes = {
    currentDate: propTypes.instanceOf(Date).isRequired,
};

export default Day;