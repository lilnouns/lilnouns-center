import { images, bgcolors, palette } from './image-data.json';
import { buildSVG } from './svg-builder';
import { NounData, NounSeed } from './types';
const { bodies, accessories, heads, glasses } = images;

/**
 * Get encoded part and background information using a Noun seed
 * @param seed The Noun seed
 */
 export const getNounData = (seed: NounSeed): NounData => {
    return {
      parts: [
        bodies[seed.body],
        accessories[seed.accessory],
        heads[seed.head],
        glasses[seed.glasses],
      ],
      background: bgcolors[seed.background],
    };
  };

  /**
   * Generate a random Noun seed
   * @param randomNumberGenerator
   */
export const getRandomNounSeed = (randomNumberGenerator: () => number): NounSeed => {
    return {
      background: Math.floor(randomNumberGenerator() * bgcolors.length),
      body: Math.floor(randomNumberGenerator() * bodies.length),
      accessory: Math.floor(randomNumberGenerator() * accessories.length),
      head: Math.floor(randomNumberGenerator() * heads.length),
      glasses: Math.floor(randomNumberGenerator() * glasses.length),
    };
  };

/**
 * Gets a random lil noun SVG (reproducible via random seed)
 */
export const generateRandomLilNoun = (randomSeed: number) => {
    const rng = mulberry32(randomSeed);
    const seed = getRandomNounSeed(rng);
    const data = getNounData(seed);
    return buildSVG(data.parts, palette, data.background);
}

function mulberry32(a: number) {
    return function () {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}
