import { heroes } from './../data/heroes';

export const getHerobyId = (id) => {
    return heroes.find(hero => hero.id === id)
}