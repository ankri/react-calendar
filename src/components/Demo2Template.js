import React, { Component, PropTypes } from 'react';

import Day from '../calendar/common/Day';
import { publicHolidays } from '../dates/PublicHolidays'


class Day2Template extends Component {
  isPublicHoliday = false;

  constructor(props) {
    super(props);

    this.isPublicHoliday = typeof(publicHolidays[this.props.day.format('YYYYMMDD')]) != "undefined"
  }

  render () {
    return (
      <div style={{textAlign: 'center', padding: '0.25rem', backgroundColor: this.isPublicHoliday ? '#5cb85c' : '', color: this.isPublicHoliday ? '#FFF' : 'inherit'}}>
        {this.props.day.format('DD')}
      </div>
    );
  }
}

Day2Template.propTypes = {
  day: PropTypes.instanceOf(Day),
  dates: PropTypes.object
};

export default Day2Template;
