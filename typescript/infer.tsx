interface Module {
  count: number;
  message: string;
  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}

type Result = {
  asyncMethod<T, U>(input: T): Action<U>;
  syncMethod<T, U>(action: T): Action<U>;
};

interface Action<T> {
  payload?: T;
  type: string;
}

type FuncNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type x = FuncNames<{ x: number; y: Function; q: Function }>;

type connect = (m: Module) => {
  [F in FuncNames<Module>]: Module[F] extends <T, U>(
    input: Promise<infer T>,
  ) => Promise<Action<infer U>>
    ? <T, U>(input: T) => Action<U>
    : Module[F] extends <T, U>(action: Action<infer T>) => Action<infer U>
    ? <T, U>(action: T) => Action<U>
    : never;
};

type R = ReturnType<connect>;
