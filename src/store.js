import { createStore } from 'redux';

const defaultState = [
  { id: 1, title: 'Велосипед', count: 5 },
  { id: 2, title: 'Самокат', count: 4 },
  { id: 3, title: 'Гантели', count: 7 },
  { id: 4, title: 'Ракетки', count: 1 },
];

function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.map((item) =>
        item.id === action.id
          ? { ...item, count: Math.min(25, item.count + 1) }
          : item
      );

    case 'DECREMENT':
      return state
        .map((item) =>
          item.id === action.id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0);

    case 'ADD_ITEM':
      return [
        ...state,
        { id: action.id, title: action.title, count: 1 },
      ];

    default:
      return state;
  }
}

export const store = createStore(cartReducer);
