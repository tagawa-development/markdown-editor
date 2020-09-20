import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'
import { History } from './pages/history'
import { useStateWithStorage } from './hooks/use_state_with_storage'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
const StorageKey = '/editor:text'

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`
const Main: React.FC = () => {
  const [text, setText] = useStateWithStorage('', StorageKey)

  return (
    <>
      <GlobalStyle />
      <Router>
        <Route exact path="/editor">
          <Editor text={text}
            setText={setText} />
        </Route>
        <Route exact path="/history">
          <History setText={setText} />
        </Route>
        <Redirect to="/editor" path="*" />
      </Router>
    </>
  )
}
render(<Main />, document.getElementById('app'))