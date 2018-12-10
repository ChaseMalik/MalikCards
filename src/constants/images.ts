import { range } from 'lodash';

const getImagesForRange = (folder: string, count: number = 14) => {
    return range(0, count)
        .map(index => require(`../images/${folder}/${index}.jpg`))
        .map(src => ({ src }));
}

const MAGIC = getImagesForRange('2018-magic', 1);
const CHEER = getImagesForRange('2016-cheer');
const WONDER = getImagesForRange('2014-wonder');
const JOY = getImagesForRange('2012-joy');
const PEACE = getImagesForRange('2010-peace');
const HOPE = getImagesForRange('2008-hope');

export const ALL_IMAGES = [MAGIC, CHEER, WONDER, JOY, PEACE, HOPE];