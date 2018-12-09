import { range } from 'lodash';

const getImagesForRange = (folder: string, count: number) => {
    return range(0, count)
        .map(index => require(`../images/${folder}/${index}.jpg`))
        .map(src => ({ src }));
}

export const HOPE = getImagesForRange('2008-hope', 14);
export const PEACE = getImagesForRange('2010-peace', 14);
