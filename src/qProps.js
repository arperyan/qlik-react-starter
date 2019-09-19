const qProps = {};

qProps.testList = {
  qInfo: {
    qType: 'visualization',
  },
  qListObjectDef: {
    qDef: {
      qFieldDefs: ['Year'],
    },
    qShowAlternatives: true,
    qAutoSortByState: {
      qDisplayNumberOfRows: 1,
    },
  },
};

qProps.testCube = {
  qInfo: {
    qType: 'visualization',
  },
  qHyperCubeDef: {
    qDimensions: [{
      qDef: {
        qFieldDefs: ['Year'],
        qFieldLabels: ['Years'],
        qSortCriterias: [{
          qSortByAscii: 1,
        }],
      },
    }],
    qMeasures: [{
      qDef: {
        qDef: 'Avg([Accceleration 0-60])',
        qLabel: 'Average',
        qNumFormat: {
          qType: 'M',
          qUseThou: 1,
          qDec: '.',
          qThou: ',',
          qFmt: '$#,##0.00;($#,##0.00)',
        },
      },
      qSortBy: {
        qSortByNumeric: -1,
      },
    }],
  },
};

export default qProps;
