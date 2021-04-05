import React, { useRef, useState } from "react";
import { AddButton, Input, TodoInputBox } from "../Styled/todoInput-styled";
import { useDispatch } from "react-redux";
import { todoInsert } from "../reducers/Todo";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");
  // 해당 컴포에서만 쓸 상태는 굳이 전역으로 관리할 필요가 없다.
  let nextId = useRef(2);
  //useRef 가 뭐하는거지?
  const dispatch = useDispatch();
  //dispatch하는 함수도 훅스로 관리 하는듯 이건 검색이 필요

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
  };
  // input에 입력 값 받아오기
  const onRemove = () => {
    setTodoInput("");
  };
  // 입력후 input 비우기

  //엔터키 이벤트
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
    //엔터키를 입력하면 해당 함수를 실행 시켜라
  };

  //Todo 저장
  const addTodo = () => {
    if (todoInput.length === 0) {
      alert("내용을 입력해 주세요");
      return;
    }
    dispatch(todoInsert(nextId.current, todoInput));
    nextId.current += 1;
    onRemove();
  };
  return (
    <TodoInputBox>
      <Input
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        value={todoInput}
        placeholder="할 일을 입력하세요!"
      />
      <AddButton onClick={addTodo}>추가</AddButton>
    </TodoInputBox>
  );
};

export default TodoInput;
