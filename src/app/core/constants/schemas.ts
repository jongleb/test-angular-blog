import { normalize, schema } from 'normalizr';

const news = new schema.Entity('news');
const event = new schema.Entity('events');

export const newsSchema = news;
export const eventSchema = event;
