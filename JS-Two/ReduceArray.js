const items = [1, 2, 3, 4, 5, ]
const sum = items.reduce((prev, item) => prev + item)

console.log(sum)

const albums = [
    {
        title: 'Race 1',
        images: ['01.jpg', '02.jpg']
    },
    {
        title: 'Race 2',
        images: ['01.jpg', '02.jpg', '03.jpg', '04.jpg']
    }
];

const numImages = albums.reduce((prev, album) => {
    return prev + album.images.length;
}, [])

console.log('IMAGE NUMBER', numImages)

// ALBUM HNUMBER 6


const albumsConcat = [
    {
        title: 'Race 1',
        images: ['01.jpg', '02.jpg']
    },
    {
        title: 'Race 2',
        images: ['01.jpg', '02.jpg', '03.jpg', '04.jpg']
    }
];

const concatImages = albumsConcat.reduce((prev, album) => {
    return prev.concat(album.images)
}, [])

console.log('IMAGE NUMBER', concatImages)

// IMAGE NUMBER [ '01.jpg', '02.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg' ]

