import moment from 'moment/moment';
import Day from './Day';

class DatesHelper {

  isToday(date) {
    return moment().isSame(date, 'day');
  }

  isInPreviousMonth(currentMonth, date) {
    return date.isBefore(currentMonth, 'month');
  }

  isInNextMonth(currentMonth, date) {
    return date.isAfter(currentMonth, 'month');
  }

  isInSameMonth(currentMonth, date) {
    return date.isSame(currentMonth, 'month');
  }

  getDaysInWeek () {
    let headers = [];

    for(var i=0; i < 7; i++) {
      headers.push(new Day(moment().weekday(i)));
    }

    return headers;
  }

  getWeeksForMonth(month) {
    const firstOfMonth = moment(month).date(1);
    const lastOfMonth = moment(month).date(moment(month).daysInMonth());
    const firstOfFirstWeek = firstOfMonth.clone().weekday(0);
    const lastOfLastWeek = lastOfMonth.clone().weekday(6);
    const numberOfWeeks = lastOfLastWeek.diff(firstOfFirstWeek, 'weeks') + 1;

    let weeks = [];
    let tempDay = firstOfFirstWeek.clone();

    for(let week = 0; week < numberOfWeeks; week++) {
      let days = [];
      for(let day = 0; day < 7; day++) {
        days.push(new Day(tempDay));
        tempDay = tempDay.clone().add(1, 'day');
      }

      weeks.push({
        days: days
      });
    }

    return weeks;
  }
}

export default DatesHelper;
