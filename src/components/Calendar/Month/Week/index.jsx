import React from 'react';
import styles from './Week.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {eachDayOfInterval, startOfWeek, endOfWeek} from 'date-fns';
import CDate from './Cdate';


const getDaysWeek = ({weekDate, date, currentDate}) =>
eachDayOfInterval({
    start: startOfWeek(weekDate),
    end: endOfWeek(weekDate),
}).map((dayDate) => (
    <CDate key={dayDate} dayDate={dayDate} date={date} currentDate={currentDate} />
));

const Week = (props) => <ul className={styles.row}>{getDaysWeek(props)}</ul>;


Week.propTypes = {
    weekDate: PropTypes.instanceOf(Date).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date),
};

Week.defaultProps = {
    currentDate: new Date(),
    date: new Date(),
};


export default Week;