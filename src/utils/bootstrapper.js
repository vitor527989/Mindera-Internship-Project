const events = [
    {
        event: 'Open Day \'18',
        days: ['Day 01', 'Day 02', 'Day 03', 'Day 04', 'Day 05', 'Day 06', 'Day 07', 'Day 08', 'Day 09', 'Day 10']
    },
    {
        event: 'Graduate Program',
        days: ['Day 01', 'Day 02', 'Day 03', 'Day 04', 'Day 05', 'Day 06', 'Day 07', 'Day 08', 'Day 09', 'Day 10']
    },
    {
        event: 'Meet Mindera Code & Culture',
        days: ['Day 01', 'Day 02', 'Day 03', 'Day 04', 'Day 05', 'Day 06', 'Day 07', 'Day 08', 'Day 09', 'Day 10']
    },
]

const lists = ['List 01', 'List 02', 'List 03', 'List 04', 'List 05', 'List 06', 'List 07', 'List 08', 'List 09', 'List 10', 'List 11', 'List 12', 'List 13']

const descriptions = ['Description 01', 'Description 02', 'Description 03', 'Description 04', 'Description 05', 'Description 06',
    'Description 07', 'Description 08', 'Description 09', 'Description 10']

const vacancies = ['Frontend Software Engineer (m/f)', 'Product Designer', 'Test Automation Engineer (m/f)', 'Office & People Operations (m/f)',
    'Technical Product Owner (m/f)', 'Android Developer (m/f)', 'Golang Software Developer (m/f)', 'Payroll & Accounting Specialist (m/f)',
    '.Net Software Engineer - Umbraco (m/f)', 'Backend Software Engineer - Java (m/f)', 'iOS Developer (m/f)', 'Infrastructure Engineer (m/f)']

/**
 * The function was giving out an error if i just returned the events due to the amount of information
 * The solution was creating a promise that returns all information about the events
 */
function getEvents () {
  return new Promise((res, rej) => {
    setTimeout(() => res(events), 500)
  })
}

function getLists() {
    return lists;
}

function getDescriptions() {
    return descriptions;
}

function getVacancies() {
    return vacancies;
}
module.exports = {
    getEvents,getLists,getDescriptions,getVacancies
    
}