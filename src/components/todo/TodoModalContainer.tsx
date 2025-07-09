import { useState } from 'react';
import TodoModal from './TodoModal';
import TodoModalTrigger from './TodoModalTrigger';
import TodoHour from './TodoHour';

export default function TodoModalContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TodoModalTrigger onOpen={() => setIsOpen(true)} />
      <TodoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
