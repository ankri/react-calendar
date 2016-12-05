import React, { Component, PropTypes } from 'react';
import moment from 'moment/moment';
import DatesHelper from '../common/DatesHelper';

class MonthView extends Component {
  constructor(props) {
    super(props);

    this._dateHelper = new DatesHelper();
  }

  render () {
    const headers = this._dateHelper.getDaysInWeek();
    const weeks = this._dateHelper.getWeeksForMonth(this.props.monthToDisplay);
    const DayBodyTemplate = this.props.dayTemplate;

    return (
      <table className="table table-bordered month-view">
        <thead className="month-view-headers">
          <tr>
          {headers.map((header, index) => {
            const classNames = 'month-view-header ' + (header.isWeekend() ? 'month-view-header-weekend' : '');
            {/*const DayHeaderTemplate = this.props.dayHeaderTemplate ? this.props.dayHeaderTemplate : (<th className={classNames} key={index} style={{width: (100 / 7) + '%'}}>{header.format(this.props.headerFormat)}</th>);*/}

            return (
              <th className={classNames} key={index} style={{width: (100 / 7) + '%'}}>{header.format(this.props.headerFormat)}</th>            )
            }
          )}
          </tr>
        </thead>
        <tbody className="month-view-body">
          {
            weeks.map ((week, index) =>
              <tr key={index}>
                {
                  week.days.map( day => {
                    let classNames = 'month-view-day ';

                    if(day.isWeekend()) {
                      classNames += ' month-view-day-weekend';
                    }

                    if(this._dateHelper.isInPreviousMonth(this.props.monthToDisplay, day.getDate())) {
                      classNames += ' month-view-day-in-previous-month';
                    }
                    else if(this._dateHelper.isInNextMonth(this.props.monthToDisplay, day.getDate())) {
                      classNames += ' month-view-day-in-next-month';
                    }

                    if(this._dateHelper.isToday(day.getDate())) {
                      classNames += ' month-view-day-today';
                    }

                    return (
                      <td key={day.getDate().unix()} className={classNames}>
                        <div className="month-view-day-header">
                          {day.format('DD')}
                        </div>
                        <div className="month-view-day-body">
                          <DayBodyTemplate day={day} {...this.props}/>
                        </div>
                      </td>
                    );
                  })
                }
              </tr>
            )
          }
        </tbody>

      </table>
    );
  }
}

MonthView.defaultProps = {
  headerFormat: 'dddd'
};

MonthView.propTypes = {
  headerFormat: PropTypes.string,
  monthToDisplay: PropTypes.instanceOf(moment).isRequired,
  dayTemplate: PropTypes.func.isRequired,
  dayHeaderTemplate: PropTypes.func
};

export default MonthView;
