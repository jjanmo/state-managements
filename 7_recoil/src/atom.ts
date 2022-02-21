import { atom } from 'recoil';

export const counterState = atom<number>({
  key: 'count',
  default: 0,
});
