// Write your solution in this file!
let employee = {
    name : "Sam",
    streetAddress : "123 Nairobi"
};

//non destructive code
function updateEmployeeWithKeyAndValue(employee, key , value) {

    return  {
        ...employee,
        [key]: value
    };
};

//destructive code
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

//deletes the first non destructive code
function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}