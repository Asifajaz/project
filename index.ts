import inquirer from 'inquirer';
const result  = await inquirer.prompt([
    {message:'Enter first number', type: 'number', name: 'firstnumber'},
    {message:'Enter second number', type: 'number', name: 'secondnumber'},
    {message:'select one of the operator  to perform your operation',
     type: 'list',
     name: 'operator',
     choices: ['Addition', 'subtraction', 'multiply', 'division'], 
},
]);

//condition

if(result.operator === 'Addition'){
    console.log(result.firstnumber + result.secondnumber);
}
else if (result.operator === 'subtraction'){
    console.log(result.firstnumber - result.secondnumber);
}
else if(result.operator === 'multiply'){
    console.log(result.firstnumber * result.secondnumber);
}
else if(result.operator === 'divison'){
    console.log(result.firstnumber / result.secondnumber);
}
else{
    console.log(('please select valid operator'));  
}
