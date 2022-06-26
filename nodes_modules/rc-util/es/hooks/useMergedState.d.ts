/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
export default function useControlledState<T, R = T>(defaultStateValue: T | (() => T), option?: {
    defaultValue?: T | (() => T);
    value?: T;
    onChange?: (value: T, prevValue: T) => void;
    postState?: (value: T) => T;
}): [R, (value: T, ignoreDestroy?: boolean) => void];
