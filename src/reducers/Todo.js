// 액션을 정의한다
const TODO_INSERT = "TODO_INSERT"; //추가
const TODO_REMOVE = "TODO_REMOVE"; //제거
const TODO_UPDATE = "TODO_UPDATE"; //수정
const TODO_TOGGLE = "TODO_TOGGLE"; //토글 (maybe 체크박스)

//액션 생성 함수 정의

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

export const todoRemove = (id) => {
  return {
    type: TODO_REMOVE,
    payload: {
      id: id,
    },
  };
};

export const todoUpdate = (id, text) => {
  return {
    type: TODO_UPDATE,
    payload: { id: id, text: text },
  };
};

export const todoToggle = (id) => {
  return {
    type: TODO_TOGGLE,
    payload: { id: id },
  };
};

//초기 상태를 만든다.
const initState = {
  todos: [
    {
      id: 1,
      text: "TODOLIST 만들기",
      isCompleted: false,
    },
  ],
};

//리듀서 생성
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
    // ...state - state를 복사하고 그자리에 새로운 객체로 대체한다 (일반 리스트 생성 로직 ) 요까진 알고있음
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    // 삭제 로직 요것도 알고있음
    case TODO_UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
        ),
      };
    // 수정 로직 기존 배열의 id 와 액션이 일어난 놈의 id가 같은면 기존배열의 text를 입력한 값으로 바꿔라 : 아님 말고
    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    // 토글 로직 (아마 체크박스) 이미 false인 값을 비교한다 기존의 id와 선택한놈의 id가 같으면 기존배열의 isCompleted를 그 반대로 바꿔라 : 아님말고
    default:
      return { ...state };
    //모든 액션타입과 일치하는 것이 없으면 그냥 원래대로 둬라
  }
}
