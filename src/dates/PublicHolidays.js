const publicHolidaysArray = {
  '2016': [
    {
      date:'20160101',
      name: 'Neujahrstag'
    },
    {
      date: '20160106',
      name:'Heilige Drei Könige'
    },
    {
      date:'20160324',
      name:'Gründonnerstag'
    },
    {
      date:'20160325',
      name:'Karfreitag'
    },
    {
      date:'20160328',
      name:'Ostermontag'
    },
    {
      date:'20160501',
      name:'Tag der Arbeit'
    },
    {
      date:'20160505',
      name:'Christi Himmelfahrt'
    },
    {
      date:'20160516',
      name:'Pfingstmontag'
    },
    {
      date:'20160526',
      name:'Fronleichnam'
    },
    {
      date:'20161003',
      name:'Tag der Deutschen Einheit'
    },
    {
      date:'20161031',
      name:'Reformationstag'
    },
    {
      date:'20161101',
      name:'Allerheiligen'
    },
    {
      date:'20161225',
      name:'1. Weihnachtstag'
    },
    {
      date:'20161226',
      name:'2. Weihnachtstag'
    }
  ]
};

export const publicHolidays = Object.keys(publicHolidaysArray).reduce((allYears, year) => {
  publicHolidaysArray[year].forEach( (date) => {
    allYears[date.date] = date.name;
  }, {});
  return allYears;
}, {});
