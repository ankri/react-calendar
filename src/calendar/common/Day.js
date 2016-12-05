import moment from 'moment/moment';

export const WeekDays = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6
};

class Day {
  _date;

  constructor(date) {
    if(!date instanceof moment) {
      throw "date has to be of type moment";
    }

    this._date = date;
  }

  format(format) {
    return this._date.format(format);
  }

  getDate() {
    return this._date;
  }

  getDay () {
    return this._date.day();
  }

  isWeekday() {
    return !this.isWeekend();
  }

  isWeekend() {
    return this._date.day() === WeekDays.sunday || this._date.day() === WeekDays.saturday;
  }
}

export default Day;
