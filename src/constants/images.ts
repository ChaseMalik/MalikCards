const getLinksFromGooglePhotosResponse = (path: string) => {
    const response = require(`../images/${path}.json`);
    return response.mediaItems.sort((a, b) => {
        return a.filename.split('.')[0] - b.filename.split('.')[0];
    }).map(item => {
        const src = `${item.baseUrl}=w${item.mediaMetadata.width}-h${item.mediaMetadata.height}`;
        return { src };
    });
}

const MAGIC = getLinksFromGooglePhotosResponse('2018-magic');
const CHEER = getLinksFromGooglePhotosResponse('2016-cheer');
const WONDER = getLinksFromGooglePhotosResponse('2014-wonder');
const JOY = getLinksFromGooglePhotosResponse('2012-joy');
const PEACE = getLinksFromGooglePhotosResponse('2010-peace');
const HOPE = getLinksFromGooglePhotosResponse('2008-hope');

export const ALL_IMAGES = [MAGIC, CHEER, WONDER, JOY, PEACE, HOPE];