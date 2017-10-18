const user = {
  name: {
    first: 'Imani',
    last: 'Oliver'
  },
  username: 'imanio',
  bio: 'Born in a car in Brooklyn, NY, Imani climbed the competitive ranks for Track & Field to earn a spot on Princeton University\'s Athletics team. Imani is looking to qualify for the 2020 Summer Olympics in the triple jump.',
  events: ['Triple jump', 'High jump', 'Leap frog'],
  teamHistory: [
    {
      name: 'Princeton University',
      dates: {
        start: '2010',
        end: '2014'
      },
      location: 'Princeton, NJ',
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'Crystal Palace Track Club',
      dates: {
        start: '2013',
        end: '2015'
      },
      location: 'New York, NY',
      details: 'Imani ran real good and jumped even better at the Crystal Palace Track Club.'
    }
  ]
};

// const results = [
//   {
//     date: '9/21/2017',
//     location: 'Brooklyn, NY',
//     result: {
//       amount: 13.34,
//       measurement: 'm',
//     },
//     source: 'http://google.com'
//   },
//   {
//     date: '9/30/2017',
//     location: 'Princeton, NJ',
//     result: {
//       amount: 13.35,
//       measurement: 'm',
//     },
//     source: 'http://google.com'
//   },
//   {
//     date: '10/5/2017',
//     location: 'New York, NY',
//     result: {
//       amount: 13.37,
//       measurement: 'm',
//     },
//     source: 'http://google.com'
//   },
//   {
//     date: '10/17/2017',
//     location: 'Nashville, TN',
//     result: {
//       amount: 13.36,
//       measurement: 'm'
//     },
//     source: 'http://google.com'
//   },
//   {
//     date: '11/3/2017',
//     location: 'Atlanta, GA',
//     result: {
//       amount: 13.39,
//       measurement: 'm'
//     },
//     source: 'http://google.com'
//   }
// ]

const results = {
  username: 'imanio',
  events: [
    { title: 'Triple Jump',
      data: {
        measurement: 'Distance',
        units: 'm',
        results: [
          {
            date: '9/21/2017',
            location: 'Brooklyn, NY',
            value: 13.34,
            source: 'http://google.com'
          },
          {
            date: '10/5/2017',
            location: 'New York, NY',
            value: 13.37,
            source: 'http://google.com'
          },
          {
            date: '11/3/2017',
            location: 'Atlanta, GA',
            value: 13.39,
            source: 'http://google.com'
          }
        ]
      }
    },
    {
      title: 'High Jump',
      data: {
        measurement: 'Distance',
        units: 'm',
        results: [
          {
            date: '9/21/2017',
            location: 'Manhattan, NY',
            value: 2.03,
            source: 'http://google.com'
          },
          {
            date: '10/5/2017',
            location: 'Albany, NY',
            value: 2.44,
            source: 'http://google.com'
          },
          {
            date: '11/3/2017',
            location: 'Athens, GA',
            value: 2.51,
            source: 'http://google.com'
          }
        ]
      }
    },
    {
      title: '100m Dash',
      data: {
        measurement: 'Time',
        units: 's',
        results: [
          {
            date: '9/21/2017',
            location: 'Buffalo, NY',
            value: 12.12,
            source: 'http://google.com'
          },
          {
            date: '10/5/2017',
            location: 'Kingston, NY',
            value: 12.01,
            source: 'http://google.com'
          },
          {
            date: '11/3/2017',
            location: 'Peachtree City, GA',
            value: 11.55,
            source: 'http://google.com'
          }
        ]
      }
    }
  ]
}

export { user, results };
