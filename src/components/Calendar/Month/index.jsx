import React from 'react';
import styles from './Month.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {format, eachWeekOfInterval, eachDayOfInterval, startOfWeek, endOfWeek, startOfMonth, endOfMonth} from 'date-fns';
import Week from './Week';


const getWeeks = ({weekDate, date, currentDate}) =>
eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
}).map((weekDate) => (
    <Week key={weekDate} weekDate={weekDate} date={date} currentDate={currentDate} />
));

const headerWeeks = ({date}) =>
eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date),
}).map((day) => (
    <li className={styles.monthHeaderCell} key={day} date={date}>{format(day, 'EEE')}</li>
));


const Month = (props) => {
return (
<div className={styles.monthWrapper}> 
    <ul className={styles.monthHeader}>{headerWeeks(props)}</ul>
    <div className={styles.month}>{getWeeks(props)}</div> 
</div>);
}

Month.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date),
};

Month.defaultProps = {
    currentDate: new Date(),
    date: new Date(),
};


export default Month;