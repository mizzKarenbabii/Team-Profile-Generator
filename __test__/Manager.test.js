const Manager = require('../lib/Manager')

test('testing output of officenumber constructor', ()=> {
    var officenumber = 'officenumber'
    const manager = new Manager('Karen', 3, 'email@email.com', officenumber)
    expect(manager.officenumber).toBe(officenumber)
});
