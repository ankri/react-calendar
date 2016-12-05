import React, { Component, PropTypes } from 'react';

import Day from '../calendar/common/Day';
import DatesHelper from '../calendar/common/DatesHelper';

import { publicHolidays } from '../dates/PublicHolidays'


class DayBodyTemplate extends Component {

  isPublicHoliday = false;

  constructor (props) {
    super(props);

    this._datesHelper = new DatesHelper();
    this.isPublicHoliday = typeof(publicHolidays[props.day.format('YYYYMMDD')]) != 'undefined';
  }

  render () {
    const events = this.isPublicHoliday ? [publicHolidays[this.props.day.format('YYYYMMDD')]] : [];
    const color = this._datesHelper.isInSameMonth(this.props.monthToDisplay, this.props.day.getDate()) && this.isPublicHoliday ? '#3c763d' : 'inherit';

    return (
      <div>
        {
          events.map((event, index) =>
            <div style={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '135px', fontSize: '0.75rem', color: color}} key={index}>{event}</div>
          )
        }
      </div>
    );
  }
}

DayBodyTemplate.propTypes = {
  monthToDisplay: PropTypes.object,
  day: PropTypes.instanceOf(Day)
};

export default DayBodyTemplate;
