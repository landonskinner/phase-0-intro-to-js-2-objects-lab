// Write your solution in this file!
const employee = {
    name: "Mr. Bob",
    streetAddress: "200 Main St."
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updateEmployee = {...obj};
    updateEmployee[key] = value;
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const updateEmployee = {...obj};
    delete updateEmployee[key];
    return updateEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}