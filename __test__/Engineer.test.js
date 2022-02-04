const Engineer = require('../lib/Engineer')

test('Testing output of name constructor', ()=> {
    var github = 'username'
    const engineer = new Engineer('Karen', 8, 'email@email', github)
    expect(engineer.github).toBe(github)

});