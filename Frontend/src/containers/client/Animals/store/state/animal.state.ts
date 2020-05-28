import { IAnimalResponse } from './../../../../../api/animals';
import { IRequestState, DEFAULT_REQUEST_STATE } from "../../../../../api";
import { DEFAULT_SINGLE_TAG } from '../../../../../store/state/tags.state';

export interface IAnimalItemState extends IAnimalResponse {
  isLoading: boolean;
  isLoaded: boolean;
  requestState: IRequestState;
}

export const DEFAULT_ANIMAL_ITEM_STATE: IAnimalItemState = {
  data: {
    number: 0,
    name: '',
    kindOfAnimal: '',
    gender: '',
    description: '',
    imageIds: [],
    tags: [],
    character: '',
    status: DEFAULT_SINGLE_TAG,
    locationTypeId: '',
    locationName: '',
    bannerText: '',
    isDonationActive: false,
    birthday: '',
    coverImage: 0,
    createdAt: '',
    images: [],
  },
  self: '',
  isLoaded: false,
  isLoading: false,
  requestState: { ...DEFAULT_REQUEST_STATE }
};
