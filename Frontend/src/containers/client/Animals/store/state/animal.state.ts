import { IAnimalResponse } from './../../../../../api/animals';
import { IRequestState, DEFAULT_REQUEST_STATE } from "../../../../../api";
import { DEFAULT_SINGLE_LOCATION } from '../../../../admin/Locations/store/state/index';

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
    status: '',
    locationType: DEFAULT_SINGLE_LOCATION,
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
