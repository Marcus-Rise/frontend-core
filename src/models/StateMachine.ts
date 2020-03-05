type State = string;

type Transition = string[];

interface ITransitionMap {
    [key: string]: Transition;
}

/**
 * Машина состояний для визуальных компонент
 */
export class StateMachine {
    get state(): string {
        return this._state;
    }

    /**
     * Текущее состояние
     */
    private _state: State;

    /**
     * Карта переходов между состояниями
     */
    private readonly _transitions: ITransitionMap;

    constructor(initialState: State, transitions: ITransitionMap) {
        this._state = initialState;
        this._transitions = transitions;
    }

    /**
     * Переход к следующему состоянию
     * @param nextState следующее состояние
     * @param method метод, исполяемый при успешном переходе
     * @param params параметры метода
     */
    public transition(nextState: State, method?: Function, ...params: unknown[]): State {
        const transitionsArray: State[] = this._transitions[this._state];
        let resultState: State;

        if (transitionsArray.indexOf(nextState) === -1) {
            resultState = this._state;
        } else {
            if (method) {
                method(...params);
            }

            this._state = nextState;

            resultState = this._state;
        }

        return resultState;
    }
}
