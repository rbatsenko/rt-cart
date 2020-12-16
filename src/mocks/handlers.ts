import { rest } from 'msw';
import { api } from '../api/api';
import { itemsMock } from './data/items';

export const handlers = [
  rest.get(api.items, (req, res, ctx) => {
    return res(ctx.json(itemsMock));
  }),
];
