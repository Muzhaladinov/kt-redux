import { useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { Provider } from 'react-redux';

function Cart() {
  const items = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleAdd() {
    const title = prompt('Введите название товара:');
    if (!title || !title.trim()) return;
    const id = Date.now();
    dispatch({ type: 'ADD_ITEM', id, title: title.trim() });
  }

  return (
    <div className="app">
      <h1>Корзина</h1>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <span className="item-title">{item.title}</span>
            <div className="controls">
              <button
                onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}
              >
                −
              </button>
              <span className="count">{item.count}</span>
              <button
                onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}
                disabled={item.count >= 25}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="add-btn" onClick={handleAdd}>
        + Добавить товар
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}
