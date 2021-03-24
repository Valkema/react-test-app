import React from 'react';
import classNames from 'classnames';
import styles from './Calendar.module.scss';
import PropTypes from 'prop-types';
import Month from './Month';
import Day from './Day';



const Calendar = ({currentDate = new Date()}) => {
    
    return(
        <article>
            <Day currentDate={currentDate} />
            <Month  currentDate={currentDate}/>
        </article>
    );
};

Calendar.propTypes = {
    currentDate: PropTypes.instanceOf(Date),
};

Calendar.defaultProps = {
    currentDate: new Date(),
};

export default Calendar; 