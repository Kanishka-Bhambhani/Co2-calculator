var assert = require('assert');
var co2Calculator = require('../co2-calculator.js');

describe('suite-1', () => {
    it('calculateCo2Emission test 1', () => {
      assert.equal( co2Calculator.calculateCo2Emission('large-petrol-car',1800.5,'km') , 507741 );
    });
    it('calculateCo2Emission test 3', () => {
      assert.equal( co2Calculator.calculateCo2Emission('large-petrol-car',1800.5,'m') , 507.741 );
    });
    it('calculateCo2Emission test 4', () => {
      assert.equal( co2Calculator.calculateCo2Emission('large-petrol-car',1800.5,) ,  507741 );
    });
    it('calculateCo2Emission test 5', () => {
      assert.equal( co2Calculator.calculateCo2Emission('large-petrol-car',) ,  undefined );
    });	
  });

describe('suite-2', () => {
    it('Negative Distance test', () => {
      assert.equal( co2Calculator.validateDistance('-100') , false ) 
	});
    it('string Distance test', () => {
      assert.equal( co2Calculator.validateDistance('abc') , false ) 
	});
    it('Positive Distance test', () => {
      assert.equal( co2Calculator.validateDistance(1000) , true );
    });
  });

describe('suite-3', () => {
    it('Unit Of Distance test in km', () => {
      assert.equal( co2Calculator.validateUnitOfDistance('km') , true )
	});
    it('Unit Of Distance test in m', () => {
      assert.equal( co2Calculator.validateUnitOfDistance('m') , true )
	});
    it('Number for Unit Of Distance test', () => {
      assert.equal( co2Calculator.validateUnitOfDistance(1000) , false )
	});
    it('String for Unit Of Distance test', () => {
      assert.equal( co2Calculator.validateUnitOfDistance('abc') , false )
    });
  });

describe('suite-4', () => {
    it('Unit of Output test', () => {
      assert.equal( co2Calculator.validateOutput('kg') , true )
	});
    it('Unit Of Output test', () => {
      assert.equal( co2Calculator.validateOutput('g') , true )
	});
    it('Number for Unit Of Output test', () => {
      assert.equal( co2Calculator.validateOutput(1000) , false )
	});
    it('String for Unit Of Output test', () => {
      assert.equal( co2Calculator.validateOutput('abc') , false );
    });
  });

describe('suite-5', () => {
    it('Print co2 emissions based on unitOfEmission test 1', () => {
      assert.equal( co2Calculator.printCo2Emission(507741,'kg') , '507.741kg' );
    });
    it('Print co2 emissions based on unitOfEmission test 2', () => {
      assert.equal( co2Calculator.printCo2Emission(507741,'g') , '507741g' );
    });
    it('Print co2 emissions based on unitOfEmission test 3', () => {
      assert.equal( co2Calculator.printCo2Emission(507741,) ,  '507.741kg' );
    });
    it('Print co2 emissions based on unitOfEmission test 4', () => {
      assert.equal( co2Calculator.printCo2Emission(undefined,'kg') ,  'Incorrect Data' );
    });	
  });
