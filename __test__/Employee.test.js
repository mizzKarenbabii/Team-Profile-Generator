const Employee = require ("../lib/Employee");


test('Testing output of name constructor', ()=> {
    var name = 'Karen'
    const employee = new Employee(name, 8, 'email@email')
    expect(employee.name).toBe(name)

});

test('Testing getName()', ()=> {
    var name = 'Karen'
    const employee = new Employee(name, 8, 'email@email')
    expect(employee.getName()).toBe(name)

});

test( 'Testing id constructor', () => {
    var id = 3
    const employee = new Employee("karen", id, "email@email.com")
    expect(employee.id).toBe(id)
});

test('testing email constructor', () => {
    var email = 'email@email.com'
    const employee = new Employee("karen", 4, email)
    expect(employee.email).toBe(email)
});

test('Testing getRole()', ()=> {
    var role = 'Employee'
    const employee = new Employee('Karen', 8, 'email@email')
    expect(employee.getRole()).toBe(role)

});