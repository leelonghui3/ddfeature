// Google geochart
  google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyDkOtGgeF0ZHMNOV_c0RWdpome4iv2-i8I'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Number of players'],
      ['Argentina', 13],
      ['Australia', 9],
      ['Austria', 1],
      ['Bahamas', 1],
      ['Belize', 1],
      ['Bosnia and Herzegovina', 4],
      ['Brazil', 12],
      ['Cameroon', 3],
      ['Canada', 20],
      ['Cabo Verde', 1],
      ['China', 4],
      ['Congo', 5],
      ['Croatia', 13],
      ['Czech Republic', 3],
      ['Dominican Republic', 4],
      ['Finland', 1],
      ['France', 19],
      ['Gabon', 1],
      ['Georgia', 4],
      ['Germany', 6],
      ['Ghana', 1],
      ['Greece', 6],
      ['Haiti', 2],
      ['Iran', 1],
      ['Ireland', 1],
      ['Israel', 2],
      ['Italy', 4],
      ['Jamaica', 2],
      ['Korea, Republic of', 1],
      ['Latvia', 3],
      ['Lithuania', 11],
      ['Macedonia', 1],
      ['Mali', 2],
      ['Mexico', 3],
      ['Montenegro', 4],
      ['Netherlands', 2],
      ['New Zealand', 2],
      ['Nigeria', 4],
      ['Panama', 1],
      ['Poland', 3],
      ['Puerto Rico', 5],
      ['Russia', 9],
      ['Senegal', 8],
      ['Serbia', 15],
      ['Slovenia', 7],
      ['South Sudan', 2],
      ['Spain', 12],
      ['Saint Vincent and the Grenadines', 1],
      ['Sweden', 2],
      ['Switzerland', 2],
      ['Tanzania', 1],
      ['Tunisia', 1],
      ['Turkey', 7],
      ['Ukraine', 7],
      ['United Kingdom', 6],
      ['Uruguay', 1],
      ['Venezuela', 3]
    ]);

    var options = {
      backgroundColor: '#eff3ff',
      colorAxis: {
        colors: ['#bdd7e7', '#08519c']
      },
      tooltip: {
        textStyle: {
          fontName: 'Georgia'
        }
      }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }

  // to make the map responsive
  $(window).resize(function() {
    drawRegionsMap();
  });

  // combination chart
  Highcharts.chart('chart', {
    title: {
      text: "Non-US Players' Contribution on The Court"
    },
    subtitle: {
      text: '<a href="http://stats.nba.com" target="_blank">NBA.com</a>',
    },
    credits: {
      text: 'Lee Long Hui',
      href: 'https://twitter.com/leelonghui'
    },
    xAxis: {
      categories: ['2000-01', '2001-02', '2002-03', '2003-04', '2004-05', '2005-06', '2006-07', '2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17']
    },
    yAxis: [{
      labels: {
        format: '{value}%',
      },
      title: {
        text: 'Percentage',
      }
    }, {
      labels: {
        format: '{value}',
      },
      title: {
        text: 'Number of players',
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    series: [{
      type: 'column',
      name: 'Points',
      data: [6.47, 9.44, 11.58, 13.59, 13.22, 15.48, 15.03, 16.26, 16.39, 16.19, 16.86, 15.98, 16.14, 16.12, 19.49, 20.18, 22.28],
      tooltip: {
        valueSuffix: '%'
      }
    }, {
      type: 'column',
      name: 'Rebounds',
      data: [8.26, 11.66, 13.11, 15.19, 14.87, 18.42, 17.17, 18.48, 19.28, 19.12, 19.13, 19.08, 19.62, 20.68, 23.95, 24.42, 26.53],
      tooltip: {
        valueSuffix: '%'
      }
    }, {
      type: 'column',
      name: 'Assists',
      data: [4.94, 7.34, 9.85, 12.73, 12.12, 14.71, 13.78, 15.69, 15.77, 15.69, 16.79, 16.71, 17.72, 16.26, 17.60, 20.07, 21.94],
      tooltip: {
        valueSuffix: '%'
      }
    }, {
      type: 'spline',
      name: 'Number of players',
      yAxis: 1,
      data: [36, 46, 60, 59, 70, 76, 67, 66, 67, 73, 80, 81, 83, 90, 99, 99, 114]
    }]
  });

  // streamgraph to show where do the players come from
  Highcharts.chart('continent', {
    chart: {
      type: 'streamgraph',
      marginBottom: 50,
    },
    title: {
      floating: true,
      align: 'left',
      x: 35,
      text: 'Where Do Non-US Players Come From?',
    },
    credits: {
      text: 'Lee Long Hui',
      href: 'https://twitter.com/leelonghui'
    },
    xAxis: {
      maxPadding: 0,
      type: 'categories',
      crosshair: true,
      categories: [
        '2000-01',
        '2001-02',
        '2002-03',
        '2003-04',
        '2004-05',
        '2005-06',
        '2006-07',
        '2007-08',
        '2008-09',
        '2009-10',
        '2010-11',
        '2011-12',
        '2012-13',
        '2013-14',
        '2014-15',
        '2015-16',
        '2016-17'
      ],
      labels: {
        align: 'left',
        reserveSpace: false,
        rotation: 270
      },
      lineWidth: 0,
      margin: 0,
      tickWidth: 0
    },
    yAxis: {
      visible: false,
      startOnTick: false,
      endOnTick: false
    },
    legend: {
      floating: true,
      align: 'left',
      verticalAlign: 'top',
      y: 50,
      x: 25
    },

    plotOptions: {
      series: {
        label: {
          enabled: false,
          minFontSize: 5,
          maxFontSize: 20,
          style: {
            color: 'rgba(255,255,255,0.75)'
          }
        }
      }
    },
    series: [{
      "name": "Africa",
      "data": [5, 5, 5, 3, 5, 4, 3, 3, 3, 4, 7, 8, 6, 6, 5, 8, 12]
    }, {
      "name": "Asia",
      "data": [1, 2, 3, 3, 3, 2, 1, 2, 3, 3, 4, 3, 2, 2, 2, 1, 1]
    }, {
      "name": "Europe",
      "data": [19, 26, 38, 41, 45, 51, 44, 41, 42, 45, 45, 44, 51, 54, 56, 55, 63]
    }, {
      "name": "North America",
      "data": [9, 11, 8, 9, 9, 8, 8, 10, 9, 9, 11, 15, 12, 14, 17, 15, 16]
    }, {
      "name": "Oceania",
      "data": [0, 1, 1, 0, 1, 2, 2, 2, 3, 4, 3, 2, 3, 5, 8, 7, 7]
    }, {
      "name": "South America",
      "data": [2, 1, 5, 3, 7, 9, 9, 8, 7, 8, 10, 9, 9, 9, 11, 13, 15]
    }],



  })

  // sankey diagram
  Highcharts.chart('sankey', {
    title: {
      text: "Non-US Players' Nationality & Team in The 2017-18 season"
    },
    subtitle: {
      text: '<a href="http://stats.nba.com" target="_blank">NBA.com</a>',
    },
    credits: {
      text: 'Lee Long Hui',
      href: 'https://twitter.com/leelonghui'
    },
    series: [{
      type: 'sankey',
      name: 'Players from which country to which team',
      keys: ['from', 'to', 'weight'],
      data: [
        ['Argentina', 'ATL', 1],
        ['Argentina', 'SAS', 1],
        ['Australia', 'BOS', 2],
        ['Australia', 'LAL', 1],
        ['Australia', 'MIL', 1],
        ['Australia', 'PHI', 1],
        ['Australia', 'SAS', 1],
        ['Australia', 'UTA', 2],
        ['Austria', 'TOR', 1],
        ['Bahamas', 'SAC', 1],
        ['Bosnia & Herzegovina', 'LAL', 1],
        ['Bosnia & Herzegovina', 'MIL', 1],
        ['Bosnia & Herzegovina', 'POR', 1],
        ['Brazil', 'CHI', 1],
        ['Brazil', 'HOU', 1],
        ['Brazil', 'TOR', 2],
        ['Brazil', 'UTA', 1],
        ['Cameroon', 'HOU', 1],
        ['Cameroon', 'PHI', 1],
        ['Cameroon', 'TOR', 1],
        ['Canada', 'PHI', 1],
        ['Canada', 'CLE', 1],
        ['Canada', 'DAL', 1],
        ['Canada', 'DEN', 2],
        ['Canada', 'IND', 1],
        ['Canada', 'LAL', 1],
        ['Canada', 'MEM', 1],
        ['Canada', 'MIA', 1],
        ['Canada', 'MIN', 1],
        ['Canada', 'ORL', 1],
        ['China', 'HOU', 1],
        ['Congo', 'DEN', 1],
        ['Congo', 'ORL', 1],
        ['Croatia', 'CLE', 1],
        ['Croatia', 'IND', 1],
        ['Croatia', 'ORL', 1],
        ['Croatia', 'PHI', 1],
        ['Croatia', 'PHX', 1],
        ['Czech Republic', 'WAS', 1],
        ['Dominican Republic', 'BOS', 1],
        ['Egypt', 'BOS', 1],
        ['UK', 'LAL', 1],
        ['UK', 'TOR', 1],
        ['Finland', 'CHI', 1],
        ['France', 'BOS', 1],
        ['France', 'CHA', 1],
        ['France', 'NYK', 1],
        ['France', 'ORL', 1],
        ['France', 'PHI', 1],
        ['France', 'SAS', 2],
        ['France', 'UTA', 1],
        ['France', 'WAS', 1],
        ['France', 'NOP', 1],
        ['Georgia', 'GSW', 1],
        ['Germany', 'ATL', 1],
        ['Germany', 'BOS', 1],
        ['Germany', 'CHI', 1],
        ['Germany', 'DAL', 2],
        ['Greece', 'MIL', 1],
        ['Greece', 'SAC', 1],
        ['Haiti', 'SAC', 1],
        ['Israel', 'GSW', 1],
        ['Italy', 'ATL', 1],
        ['Italy', 'LAC', 1],
        ['Latvia', 'NYK', 1],
        ['Latvia', 'SAS', 1],
        ['Lithuania', 'IND', 1],
        ['Lithuania', 'NYK', 1],
        ['Lithuania', 'TOR', 1],
        ['Mali', 'NOP', 1],
        ['Montenegro', 'CHI', 1],
        ['Montenegro', 'ORL', 1],
        ['New Zealand', 'OKC', 1],
        ['Poland', 'WAS', 1],
        ['Puerto Rico', 'DAL', 1],
        ['Russia', 'BKN', 1],
        ['Senegal', 'MIN', 1],
        ['Serbia', 'DEN', 1],
        ['Serbia', 'DET', 1],
        ['Serbia', 'LAC', 1],
        ['Serbia', 'MIN', 1],
        ['Serbia', 'SAC', 1],
        ['Slovenia', 'MIA', 1],
        ['South Sudan', 'MIL', 1],
        ['Spain', 'CLE', 1],
        ['Spain', 'DEN', 1],
        ['Spain', 'MEM', 1],
        ['Spain', 'NYK', 1],
        ['Spain', 'OKC', 1],
        ['Spain', 'SAS', 1],
        ['Spain', 'UTA', 1],
        ['Spain', 'TOR', 1],
        ['Sweden', 'UTA', 1],
        ['Switzerland', 'HOU', 1],
        ['Switzerland', 'UTA', 1],
        ['Tunisia', 'DAL', 1],
        ['Turkey', 'ATL', 1],
        ['Turkey', 'CLE', 1],
        ['Turkey', 'NOP', 1],
        ['Turkey', 'NYK', 1],
        ['Turkey', 'PHI', 1],
        ['Ukraine', 'MIL', 1],
        ['Ukraine', 'PHX', 1]
      ],
    }]
  });
