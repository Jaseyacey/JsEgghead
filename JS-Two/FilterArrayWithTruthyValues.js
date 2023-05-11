var items = [1, 2, 3, 4, 5, ]
var filtered = items.filter(x => x > 3)

console.log('ITEMS', items)
console.log('FILTERED', filtered)

var people = [
    {
        name: 'Jason',
        pets: ['Dog', 'Cat']
    },
    {
        name: 'John',
        pets: ['Horse', 'Fish']
    },
    {
        name: 'Ben',
        pets: []
    }
]

var filtered = people.filter(x => x.pets)

console.log('FILTER PEOPLE', filtered);


// FILTER LESSONS
var lessons = [
    { title: 'Javascript Array methods in depth - concat', views: 960, tags: ['array', 'concat'] },
    { title: 'Javascript Array methods in depth - slice', views: 1050, tags: ['array', 'slices'] },
    { title: 'Javascript Array methods in depth - join', views: 2025, tags: ['functions', 'bind']},
];

var minViews = 1000;
var searchTerm = 'array';

var filtered = lessons
// filter out search terms by calling indexOf and checking if value is greater than -1
    .filter(x => x.tags.indexOf(searchTerm) > -1)
    // call filter again and check if the min views variable we set 
    .filter(x => x.views > minViews)
    // Sort results using numeric sort
    .sort((a, b) => b.views - a.views)
    .map(x => `<li>${x.title}</li>`)

    console.log(`<ul>${filtered}</ul>`)