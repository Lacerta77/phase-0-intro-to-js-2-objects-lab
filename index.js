// Employee Object
const employee = {
    name: 'Kevin',
    streetAddress: '10 Farms Circle'
}
//test 1
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = {...employee};
    newemployee[key] = value;
    return newemployee;
}
//test 2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
//test 3
function deleteFromEmployeeByKey(employee, key) {
    const newemployee = { ...employee };
    delete newemployee[key];
    return newemployee;
}
//test 4
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newemployee = { ...employee };
    delete employee[key];
    delete newemployee[key];
    return employee;
}