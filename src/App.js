import React, { Component } from 'react';

import moment from 'moment/moment';
import MonthView from './calendar/monthView/MonthView';

import DayBodyTemplate from './components/DayBodyTemplate';
import Demo2Template from './components/Demo2Template';

import { publicHolidays } from './dates/PublicHolidays';

class App extends Component {
  constructor () {
    super();

    let months = [];
    for(let i = 0; i < 12; i++) {
      months.push(moment().month(i));
    }

    this.state = {
      monthToDisplay: moment(),
      months: months
    }
  }

  _previousMonth() {
    this.setState({
      ...this.state,
      monthToDisplay: this.state.monthToDisplay.subtract(1, 'month')
    });
  }

  _currentMonth() {
    this.setState({
      ...this.state,
      monthToDisplay: moment()
  });

  }

  _nextMonth() {
    this.setState({
      ...this.state,
      monthToDisplay: this.state.monthToDisplay.add(1, 'month')
  });
  }

  render() {
    return (
      <div>
        <div className="demo1">
          <div className="container">
            <div className="row" style={{marginTop: '1.5rem'}}>
              <h1>{this.state.monthToDisplay.format('MMMM, YYYY')}</h1>
            </div>
            <div className="row" style={{marginTop: '1em', marginBottom: '1em'}}>
              <div className="btn-group">
                <button type="button" className="btn btn-secondary" onClick={this._previousMonth.bind(this)}>
                  <i className="fa fa-chevron-left"/> Previous month
                </button>
                <button type="button" className="btn btn-secondary" onClick={this._currentMonth.bind(this)}>
                  <i className="fa fa-calendar"/> Current month
                </button>
                <button type="button" className="btn btn-secondary" onClick={this._nextMonth.bind(this)}>
                  Next month <i className="fa fa-chevron-right"/>
                </button>
              </div>
            </div>
            <div className="row">
              <MonthView monthToDisplay={this.state.monthToDisplay} dayTemplate={DayBodyTemplate} publicHolidays={publicHolidays}/>
            </div>
          </div>
        </div>

        <hr/>

        <div className="demo2 container" style={{display: 'flex', flexWrap: 'wrap'}}>
          { this.state.months.map ((month, index) => {

            return (
              <div style={{flex: 1, padding: '5px'}}>
                <h6>{month.format('MMMM')}</h6>
                <MonthView monthToDisplay={month} dayTemplate={Demo2Template} headerFormat="dd" publicHolidays={publicHolidays}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
