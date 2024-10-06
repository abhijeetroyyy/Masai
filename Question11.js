
const company = {
    name: "Tech Solutions Inc.",
    departments: {
      engineering: {
        manager: {
          name: "John Doe",
          age: 35,
          position: "Engineering Manager",
          salary: 100000,
        },
        employees: [
          { name: "Alice", age: 28, position: "Software Engineer", salary: 80000 },
          { name: "Bob", age: 30, position: "Senior Software Engineer", salary: 90000 },
        ],
      },
      sales: {
        manager: {
          name: "Jane Smith",
          age: 40,
          position: "Sales Manager",
          salary: 95000,
        },
        employees: [
          { name: "Charlie", age: 32, position: "Sales Representative", salary: 60000 },
          { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
        ],
      },
      marketing: {
        manager: {
          name: "Emily Johnson",
          age: 37,
          position: "Marketing Manager",
          salary: 90000,
        },
        employees: [
          { name: "Eva", age: 31, position: "Marketing Specialist", salary: 70000 },
          { name: "Frank", age: 33, position: "Marketing Coordinator", salary: 65000 },
        ],
      },
    },
  };
  function extractManagerDetails(company) {
    const { departments } = company;
    const managers = [];

    for (const dept in departments) {
        const { manager: { name, age, position, salary } } = departments[dept];
        managers.push({ name, age, position, salary });
    }

    return managers;
}
function calculateAverageSalary(company) {
    const { departments } = company;
    let totalSalary = 0;
    let totalCount = 0;

    for (const dept in departments) {
        const { manager: { salary: managerSalary }, employees } = departments[dept];
        totalSalary += managerSalary;
        totalCount += 1;

        for (const { salary } of employees) {
            totalSalary += salary;
            totalCount += 1;
        }
    }

    return (totalSalary / totalCount).toFixed(2);
}
function findHighestPaidEmployee(company) {
    const { departments } = company;
    let highestPaid = { name: '', salary: 0 };

    for (const dept in departments) {
        const { manager: { name: managerName, salary: managerSalary }, employees } = departments[dept];

        if (managerSalary > highestPaid.salary) {
            highestPaid = { name: managerName, salary: managerSalary };
        }

        for (const { name, salary } of employees) {
            if (salary > highestPaid.salary) {
                highestPaid = { name, salary };
            }
        }
    }

    return highestPaid;
}

  

  console.log(extractManagerDetails(company));
  // Output:
  // [
  //   { name: "John Doe", age: 35, position: "Engineering Manager", salary: 100000 },
  //   { name: "Jane Smith", age: 40, position: "Sales Manager", salary: 95000 },
  //   { name: "Emily Johnson", age: 37, position: "Marketing Manager", salary: 90000 }
  // ]
  
  console.log(calculateAverageSalary(company));
  // Output: 77777.78 (rounded to two decimal places)
  
  console.log(findHighestPaidEmployee(company));
  // Output: { name: "John Doe", salary: 100000 }
  
    