import { getPetMock } from 'libs/api/client/pet/pet.msw';
import { getStoreMock } from 'libs/api/client/store/store.msw';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...getPetMock(), ...getStoreMock());
