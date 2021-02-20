import {createGlobalStyle} from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobleStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <>
          <GlobleStyle />
          <TodoTemplate>
              <TodoHead/>
              <TodoList/>
              <TodoCreate />
          </TodoTemplate>
        </>
    );
}

export default App;
