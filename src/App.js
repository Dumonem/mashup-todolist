import {createGlobalStyle} from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import {TodoProvider} from "./TodoContext"

const GlobleStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <TodoProvider>
          <GlobleStyle />
          <TodoTemplate>
              <TodoHead/>
              <TodoList/>
              <TodoCreate />
          </TodoTemplate>
        </TodoProvider>
    );
}

export default App;
