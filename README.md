# Co2 calculator is application developed to calculate Co2 emission from vehicles.

This is designed using node js & npm. Follow below steps to setup and use it in your machine.

# make sure you have installed node js in your machine. If not download from below link and install.
    https://nodejs.org/

# install dependencies
    npm i 

# running the app 
- first navigate to downloaded code root folder( i.e. co2-calculator) from command line.

- Run program using below command.
    node co2-calculator.js <options>.

- find below example.

    I:\projects\angular-ground\co2-calculator>node co2-calculator.js --transportation-method large-petrol-car --unit-of-distance km --distance 1800.5
    --output kg
    Your trip caused 507.741kg of CO2-equivalent.

    I:\projects\angular-ground\co2-calculator>node co2-calculator.js unit-of-distance=km  --distance 15 --transportation-method medium-diesel-car
    Your trip caused 2.565kg of CO2-equivalent.

# run unit test
    to run unit test enter below command.
    npm test
