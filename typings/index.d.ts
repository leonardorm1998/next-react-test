declare module '@zeit/next-css'
declare module 'redux-multi'

declare module '*.png'
declare module '*.jpg'
declare module '*.gif'

export type Reducer<S, A extends AnyAction> = (state: S, action: A) => S;
