module.exports = {
    getAll
};

const skills = [
    {text: 'Learn Kung Fu', done: true},
    {text: 'Master the art of underwater basket weaving', done: false},
    {text: 'Become ruler of the planet', done: false},
];

function getAll() {
    return skills;
};