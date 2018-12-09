import { range } from 'lodash';

const getImagesForRange = (folder: string, count: number) => {
    return range(0, count)
        .map(index => require(`../images/${folder}/${index}.jpg`))
        .map(src => ({ src }));
}

export const CHEER = getImagesForRange('2016-cheer', 13);
export const WONDER = getImagesForRange('2014-wonder', 13);
export const JOY = getImagesForRange('2012-joy', 14);
export const PEACE = getImagesForRange('2010-peace', 14);
export const HOPE = getImagesForRange('2008-hope', 14);

export const ALL_IMAGES = [CHEER, WONDER, JOY, PEACE, HOPE];