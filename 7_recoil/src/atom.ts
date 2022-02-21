import { atom } from 'recoil';

const counterState = atom<number>({
  key: 'count',
  default: 0,
});
