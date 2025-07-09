function TodoModalTrigger({ onOpen }: { onOpen: () => void }) {
  return <button onClick={onOpen}> Todo 추가하기</button>;
}

export default TodoModalTrigger;
