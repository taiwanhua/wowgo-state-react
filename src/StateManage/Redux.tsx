import * as React from 'react'

import {
    Provider,
    createStoreHook,
    createDispatchHook,
    createSelectorHook,
    ReactReduxContextValue
} from 'react-redux'
import { AnyAction, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * 透過 React.createContext 創建的 Context
 */
const Context = React.createContext({} as ReactReduxContextValue<any, AnyAction>)

/**
 * WowgoStore hook
 */
export const useWowgoStore = createStoreHook(Context)

/**
 * @returns dispatch 函數
 * 
 * @example
 * const AboutPage = (props: any) => {
 * 
 *  const todo = useWowgoDispatch()
 * 
 *  return (
 *      <button onClick={() => {  dispatch({ type: "INCREMENT", step: 1 }) }}>
 *          INCREMENT
 *      </button>
 *  )
 * 
 */
export const useWowgoDispatch = createDispatchHook(Context)

/**
 * 
 * @param selector 篩選函數
 * @param equalityFn 判斷篩選函數
 * @returns 篩選過後的狀態值
 * 
 * @example
 * 
 * export interface S {
 *     todo: number
 * }
 * 
 * const AboutPage = (props: any) => {
 * 
 *  const todo = useWowgoSelector<S, number>(state => state.reducer1.todo)
 * 
 *  return (
 *      <p>
 *          {todo}
 *      </p>
 *  )
 * 
 * export default AboutPage
 */
export const useWowgoSelector = createSelectorHook(Context)

/**
 * 創建 WowgoStore，用以傳入 WowgoProvider
 * @param reducer (initialState: 初始狀態, action: 更新狀態的action) 
 * @example
 * 
 * // 先創建 reducer (reducer1, reducer2...)
 * function reducer1(state = { todo1: 0 }, action) {
 *
 *  switch (action.type) {
 *    case "INCREMENT":
 *      return {
 *        ...state,
 *        todo1: state.todo1 + action.step
 *      };
 *    case "DECREMENT":
 *      return {
 *        ...state,
 *        todo1: state.todo1 - action.step
 *      };
 *    default:
 *      return state;
 *  }
 *}
 * 
 *  const combinedReducer = combineReducers({
 *     reducer1,
 *     reducer2,
 *     ...
 * })
 *
 * const Stroe = createReduxStore(combinedReducer)
 */
export const createWowgoStore = (reducer: (initialState: any, action: any) => (any)) => createStore(reducer, composeWithDevTools());

export interface ProviderProps {
    /** 
     * 需要使用本Context的所有子組件 
     */
    children?: React.ReactNode;
    /** 
     * 透過 createWowgoStore(reducer) 創建的Store，
     * 註 : reducer: (initialState: any, action: any) => (any) 
    */
    store: Store<any, any>
}

/**
 * 
 * @param props 
 * @returns WowgoProvider
 * 
 * @example
 * const App = () => {
 * return (
 *   <ReduxProvider store={Stroe}>
 *     <Components ... />
 *   </ReduxProvider>
 * );
 * }
 *
 * export default App;
 * 
 */
export const WowgoProvider: React.FC<ProviderProps> = (props) => {
    // console.log(props)
    return (
        <Provider context={Context} store={props.store}>
            {props.children}
        </Provider>
    )
}
