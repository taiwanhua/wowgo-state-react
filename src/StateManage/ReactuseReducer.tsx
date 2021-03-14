import * as React from 'react'
import { ReactReduxContextValue } from 'react-redux';

/**
 * 
 * @param reducers 由 reducer 組成的物件 
 * @returns React.useReducer 的第一個參數
 * @example
 * // 創建 reducer (reducer1, reducer2... )
 * const reducer = (state: any, action: any) => {
 *    switch (action.type) {
 *        case "INCREMENT":
 *            return {
 *                ...state,
 *                a: state.a + action.step
 *            };
 *        case "DECREMENT":
 *            return {
 *                ...state,
 *            };
 *        default:
 *            return state;
 *    }
 *}
 *
 * const combineReactReducer = combineReactReducers({ 
 *     reducer,
 *     reducer1,
 *     ...
 * });
 */
export const combineReactReducers = (reducers: any) => (state: any, action: any) =>
    Object.keys(reducers).reduce( // use for..in loop, if you prefer it
        (acc, prop) => ({
            ...acc,
            [prop]: reducers[prop](acc[prop], action),
        }),
        state
    );

/**
* 透過 React.createContext 創建的 Context
*/
const Context = React.createContext({})

// const initialState = { a: { a: 100 }, b: { b: 300 } }; // some state for props a, b
// const rootReducer = combineReactReducers({ a, b });

// const StoreProvider = (props: any) => {
//     const [state, dispatch] = React.useReducer(rootReducer, initialState);
//     // Important(!): memoize array value. Else all context consumers update on *every* render
//     const store = React.useMemo(() => [state, dispatch], [state]);
//     return (
//         <Context.Provider value={store}>
//             {props.children}
//         </Context.Provider>
//     );
// };

export interface ReactProviderProps {
    /** 
     * 需要使用本Context的所有子組件 
     */
    children?: React.ReactNode;
    /** 
     * 透過 createWowgoStore(reducer) 創建的Store，
     * 註 : reducer: (initialState: any, action: any) => (any) 
    */
    store: {}
}


/**
 * 
 * @param props 
 * @returns WowgoReactProvider
 * 
 * @example
 * 
 * const combineReactReducer = combineReactReducers({ 
 *     reducer,
 *     reducer1,
 *     ...
 * });
 * 
 * // 對應 combineReactReducer 的狀態初始值
 * const initialState={ reducer: {}, reducer1: {}, ...}
 * 
 * const App = () => {
 *     const [stroe, dispatch] = React.useReducer(combineReactReducer, initialState); 
 *     
 *     // 還可以把 useState 放進 WowgoReactProvider 使用，稍後使用 useWowgoReactSelector 取得值
 *     // const [SomeState, setSomeState] = React.useState(null) 
 *      
 *     return (
 *       <WowgoReactProvider store={{ stroe, dispatch, SomeState, setSomeState }}>
 *         <Components ... />
 *       </WowgoReactProvider>
 *     );
 * }
 *
 * export default App;
 * 
 */
export const WowgoReactProvider: React.FC<ReactProviderProps> = (props) => {
    // console.log(props)
    return (
        <Context.Provider value={props.store}>
            {props.children}
        </Context.Provider>
    )
}


/**
 * 
 * @param selector 篩選函數
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
 *  const todo = useWowgoReactSelector<S, number>(state => state.reducer1.todo)
 * 
 *  return (
 *      <p>
 *          {todo}
 *      </p>
 *  )
 * 
 * export default AboutPage
 */
export const useWowgoReactSelector = <Type, TSelected = unknown>(
    selector: (state: Type) => TSelected,
    // equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected => {

    const contextValue: any = React.useContext(Context);
    const selectValue = selector(contextValue);

    return selectValue;
}