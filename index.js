// Write your solution in this file!
const employee = {
    name: 'Micheal Scott',
    streetAddress: 'Scranton Avenue',
}

function updateEmployeeWithKeyAndValue (employee, key, value){
 const newEmployeeInfo = {...employee}
 newEmployeeInfo[key] = value
 return newEmployeeInfo  
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployeeInfo = {...employee}
    delete newEmployeeInfo[key]
    return newEmployeeInfo
}

function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key]
    return employee
}