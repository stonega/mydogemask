import axios from 'axios';

import { MEMPOOL_BASE_URL, MYDOGE_BASE_URL } from './helpers/constants';

export const mydoge = axios.create({
  baseURL: MYDOGE_BASE_URL,
});

export const dogeMempool = axios.create({
  baseURL: MEMPOOL_BASE_URL,
});
