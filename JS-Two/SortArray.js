var lessons = [
    { title: 'Javascript Array methods in depth - concat', views: 1000 },
    { title: 'Javascript Array methods in depth - slice', views: 1050 },
    { title: 'Javascript Array methods in depth - join', views: 1025 },
];

// Sort the array from highest to lowest with a compare function
var list = lessons.sort((a, b) => b.views - a.views)
    .map(x => ` <li>${x.title} (${x.views})</li>`)
    .join('\n');

// Create an HTML string with the sorted and formatted list
var output = `<ul>${list}</ul>`;

// Log the output to the console
console.log(output);
