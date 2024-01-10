export const TOILET_STYLE: { WESTERN: number; JAPANESE: number } = {
  WESTERN: 1,
  JAPANESE: 2,
};

export const GENDER: { MALE: number; FEMALE: number } = {
  MALE: 1,
  FEMALE: 2,
};

export const FLOORS: { value: number; text: string }[] = [
  { value: 1, text: "1階" },
  { value: 2, text: "2階" },
  { value: 3, text: "3階" },
  { value: 4, text: "4階" },
];

export const RADIO_DATA: { id: string; text: string; value: number }[] = [
  {
    id: "male",
    text: "男性用トイレ",
    value: GENDER.MALE,
  },
  {
    id: "female",
    text: "女性用トイレ",
    value: GENDER.FEMALE,
  },
];

export const JSON: {
  floor: number;
  gender: number;
  id: number;
  toiletStyle: number;
  state: Boolean;
}[] = [
  {
    floor: 1,
    gender: GENDER.MALE,
    id: 1,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 1,
    gender: GENDER.MALE,
    id: 2,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 1,
    gender: GENDER.FEMALE,
    id: 1,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 1,
    gender: GENDER.FEMALE,
    id: 2,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 2,
    gender: GENDER.MALE,
    id: 1,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: true,
  },
  {
    floor: 2,
    gender: GENDER.MALE,
    id: 2,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 2,
    gender: GENDER.FEMALE,
    id: 1,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 2,
    gender: GENDER.FEMALE,
    id: 2,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: true,
  },
  {
    floor: 3,
    gender: GENDER.MALE,
    id: 1,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: true,
  },
  {
    floor: 3,
    gender: GENDER.MALE,
    id: 2,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 3,
    gender: GENDER.MALE,
    id: 3,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 3,
    gender: GENDER.FEMALE,
    id: 1,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 3,
    gender: GENDER.FEMALE,
    id: 2,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: true,
  },
  {
    floor: 3,
    gender: GENDER.FEMALE,
    id: 3,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: true,
  },
  {
    floor: 4,
    gender: GENDER.MALE,
    id: 1,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: true,
  },
  {
    floor: 4,
    gender: GENDER.MALE,
    id: 2,
    toiletStyle: TOILET_STYLE.JAPANESE,
    state: false,
  },

  {
    floor: 4,
    gender: GENDER.FEMALE,
    id: 1,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: false,
  },
  {
    floor: 4,
    gender: GENDER.FEMALE,
    id: 2,
    toiletStyle: TOILET_STYLE.WESTERN,
    state: true,
  },
];
