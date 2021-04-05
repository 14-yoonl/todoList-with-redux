# 정리하기

## work flow

1.  input 태그에 입력

- input.value 를 state에 저장

2.  추가 버튼(엔터키)을 누름(event 발생)

- 이벤드에 연결된 dispatch 함수는 reducer 함수를 호출
- Reducer 함수로 action 함수를 인자로 전달(action 함수 에서 필요로 하는 인자를 함께 전달한다)

3.  action 함수는 받아온 인자로 해당 리턴값을 리턴한다.

- type과 payload

4.  Reducer 함수는 action 함수가 반환한 type값에 맞는 Return값을 리턴

## code flow

### 스토어 생성

- index.js

```
const store = createStore(todoReducer);
```

- 할 일 추가

### 액션 생성

- reducers/Todo.js

```const TODO_INSERT = "TODO_INSERT"; //추가

```

### 액션 함수 정의

```
export const todoInsert = (id, text) => {
  return {
    type: TODO_INSERT,
    payload: {
      id: id,
      text: text,
      isCompleted: false,
    },
  };
};
```

### 리듀서

```
export default function todoReducer(state = initState, { type, payload }) {
  switch (type) {
    case TODO_INSERT:
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          text: payload.text,
          isCompleted: false,
        }),
      };

```

### 할 일 입력

```
<AddButton onClick={addTodo}>추가</AddButton>
```

```
const addTodo = () => {
    if (todoInput.length === 0) {
      alert("내용을 입력해 주세요");
      return;
    }
    dispatch(todoInsert(nextId.current, todoInput));
    nextId.current += 1;
    onRemove();
  };
```


