const {Song} = require('../models');
const config = require('../config/index')


const createPartData = (url_title) => {
    return [
        {
            heading: "Сопрано 1",
            audioSrc: `${config.s3.bucketUrl}audios/Soprano/${url_title}1.mp3`
        },
        {
            heading: "Сопрано 2",
            audioSrc: `${config.s3.bucketUrl}audios/Soprano/${url_title}2.mp3`
        },
        {
            heading: "Альт",
            audioSrc: `${config.s3.bucketUrl}audios/Alt/${url_title}.mp3`
        },
        {
            heading: "Тенор",
            audioSrc: `${config.s3.bucketUrl}audios/Tenor/${url_title}.mp3`
        },
        {
            heading: "Бас",
            audioSrc: `${config.s3.bucketUrl}audios/Bass/${url_title}.mp3`
        }
    ];
}

const createNotesData = (url_title) => {
    // let data = [];
    return [
        {
            original: `${config.s3.bucketUrl}notes/${url_title}1.jpg`,
            thumbnail: `${config.s3.bucketUrl}notes/${url_title}1.jpg`,
        },
        {
            original: `${config.s3.bucketUrl}notes/${url_title}2.jpg`,
            thumbnail: `${config.s3.bucketUrl}notes/${url_title}2.jpg`,
        },
        {
            original: `${config.s3.bucketUrl}notes/${url_title}3.jpg`,
            thumbnail: `${config.s3.bucketUrl}notes/${url_title}3.jpg`,
        }
    ];


    // return  data;
}

const createSong = async ({title, url_title}) => {
    let song = new Song({
        title: title,
        url_title: url_title,
        partData: createPartData(url_title),
        notes: createNotesData(url_title)
    });
    return await song.save();
}

const getAllSongs = async () => {
    return Song.find({})

}


const getSongByTitle = async (url_title) => {
    return Song.findOne({url_title: url_title})

}


module.exports = {
    createSong,
    getSongByTitle,
    getAllSongs
};