function print(n, obj){
    console.log('Problem ' + n, JSON.parse(JSON.stringify(obj)));
}

// PROBLEM 1: 

const employees = [
    {firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true},
    {firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true},
    {firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false},
];

print(1, employees);


// PROBLEM 2: 

const company = [
    {companyName: "Tech Stars", website: "www.techstars.site", employees: employees},
];

print(2, company);


// PROBLEM 3:

const newEmployee = {firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false}

employees.push(newEmployee);

print(3, company);


// PROBLEM 4: 

let totalSalaries = 0;

for (const employee of employees) {
    totalSalaries += employee["salary"];
}

print(4, totalSalaries);


// PROBLEM 5: 

for (const employee of employees) {
    if(employee["raiseEligible"] == true){
        employee["salary"] = employee["salary"]*1.1;
        employee["raiseEligible"] = false;
    }
};

print(5, employees);


// PROBLEM 6: 

const employeeWFH = ['Anna', 'Sam'];

for (const employee of employees){
    for (const name of employeeWFH){
        if(employee["firstName"] == name){
            employee["WFH"] = true;
        }
        else {
            employee["WFH"] = false;
        }
    }
}

print(6, employees);