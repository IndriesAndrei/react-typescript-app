import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

//define type of variable with :
// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[]; // array of strings only
// let numbers: number[]; // array of only numbers
// let role:[number, string]; // tuple -> order and only what type
// let ageUnion: number | string; // union -> we can add type number or string
// let anyType: any; // any type->we can add numbers, booleans, tuples, etc.

// // functions type
// let printName: (name: string) => void; // void returns undefined
// let printName: (name: string) => never; // never returns nothing

// // unknown type / recommended instead of any
// let personName: unknown;

// // objects
// type Person = {
//   name: string;
//   age?: number; // ?: optional
// }
// let person: Person ={
//   name: 'Andrei',
// };

// let lotsOfPeople: Person[];

// interface Car {
//   name: string;
//   age?: number;
// }

// interface Ferrari extends Car {
//   color: string;
// }

// we want App to be functional component type React.FC
const App: React.FC = () => {
  // useState value will be string
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo:todo, isDone: false}]);
      setTodo('')
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField 
        todo={todo} 
        setTodo={setTodo} 
        handleAdd={handleAdd}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
