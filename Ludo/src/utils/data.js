export const boxes = [
  // green
  [
    // green first row
    {
      id: 13,
      isSafe: false,
      next: 14,
      nextHomeBox: null,
    },
    {
      id: 14,
      isSafe: true,
      next: 15,
      nextHomeBox: null,
    },
    {
      id: 15,
      isSafe: false,
      next: 16,
      nextHomeBox: null,
    },
    {
      id: 16,
      isSafe: false,
      next: 17,
      nextHomeBox: null,
    },
    {
      id: 17,
      isSafe: false,
      next: 18,
      nextHomeBox: null,
    },
    {
      id: 18,
      isSafe: false,
      next: 19,
      nextHomeBox: null,
    },
    // green second row
    {
      id: 12,
      isSafe: false,
      next: 13,
      nextHomeBox: 53,
    },
    {
      id: 53,
      isSafe: true,
      next: 54,
      nextHomeBox: 54,
    },
    {
      id: 54,
      isSafe: true,
      next: 55,
      nextHomeBox: 55,
    },
    {
      id: 55,
      isSafe: true,
      next: 56,
      nextHomeBox: 56,
    },
    {
      id: 56,
      isSafe: true,
      next: 57,
      nextHomeBox: 57,
    },
    {
      id: 57,
      isSafe: true,
      next: 1000, // winning point
      nextHomeBox: null,
    },
    // green third row
    {
      id: 11,
      isSafe: false,
      next: 12,
      nextHomeBox: null,
    },
    {
      id: 10,
      isSafe: true,
      next: 11,
      nextHomeBox: null,
    },
    {
      id: 9,
      isSafe: true,
      next: 10,
      nextHomeBox: null,
    },
    {
      id: 8,
      isSafe: false,
      next: 9,
      nextHomeBox: null,
    },
    {
      id: 7,
      isSafe: false,
      next: 8,
      nextHomeBox: null,
    },
    {
      id: 6,
      isSafe: false,
      next: 7,
      nextHomeBox: null,
    },
  ],
];

export const pieces = [
  {
    name: "red1",
    boxId: 1,
  },
];

