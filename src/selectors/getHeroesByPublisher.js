import { heroes } from './../data/heroes';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['Marvel Comics', 'DC Comics'];
    
    if(!validPublishers.includes(publisher)) throw new Error(`Publiser '${publisher} is not correct'`);
    
    return heroes.filter(hero => hero.publisher === publisher);
}