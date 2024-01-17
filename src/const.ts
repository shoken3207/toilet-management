export const TOILET_STYLE: { WESTERN: number; JAPANESE: number } = {
  WESTERN: 1,
  JAPANESE: 2,
};

export const GENDER: { MALE: number; FEMALE: number } = {
  MALE: 0,
  FEMALE: 1,
};

export const FLOORS: { value: number; text: string }[] = [
  { value: 1, text: "1階" },
  { value: 2, text: "2階" },
  { value: 3, text: "3階" },
  { value: 4, text: "4階" },
];

export const API_BASE_URL = "http://10.24.111.104:3000/api";
