const Intern = require('../lib/Intern')

test ('testing output of school constructor', ()=> {
    var school = 'VCU'
    const intern = new Intern ('Karen', 3, 'email@email.com', school)
    expect(intern.school).toBe(school)
});

