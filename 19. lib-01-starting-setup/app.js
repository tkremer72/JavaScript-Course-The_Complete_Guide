const customers = ['Max', 'Anna', 'Manuel', 'Thomas', 'Adam', 'Brian', 'Amanda', 'Kyle', 'Gabriel', 'Elijah', 'Olivia', 'Andrew'];

const activeCustomers = ['Thomas', 'Brian', 'Amanda', 'Max', 'Manuel', 'Anna'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);