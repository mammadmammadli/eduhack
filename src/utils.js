import { createRoutine } from 'redux-saga-routines';
import { put, takeLatest } from 'redux-saga/effects';


function* sagaWorker(action) {
    const routine = createRoutine(action.type);

    try {
        yield put(routine.request());
        const response = yield action.payload;

        yield put(routine.success(response));
    } catch (error) {
        yield put(routine.failure(error.message));
    }
}

// tslint:disable-next-line:typedef
export function* generateAsyncSagaWatcher(actionName) {
    yield takeLatest(actionName, (action) => sagaWorker(action));
}

export function getInitialAsyncData(initialData = null) {
    return {
        data: initialData,
        error: null,
        status: 'IDLE',
    };
}

export function generateAsyncReducer(actionType) {
    return (
        state = getInitialAsyncData(),
        action,
    ) => {
        const routineAction = createRoutine(actionType);

        switch (action.type) {
            case routineAction.TRIGGER:
                return state;
            case routineAction.SUCCESS:
                // const payload = action.payload ? ((action.payload).data ? (action.payload).data : action.payload) : action.payload;
                return {
                    ...state,
                    data: action.payload,
                    status: 'SUCCESS'
                };
            case routineAction.FAILURE:
                return {
                    ...state,
                    status: 'ERROR',
                    error: action.payload,
                };
            case routineAction.REQUEST:
                return {
                    ...state,
                    status: 'PENDING',
                };
            default:
                return state;
        }
    };
}

export const isSuccess = branch => branch.status === 'SUCCESS';
export const isInitial = branch => branch.status === 'IDLE';
export const isPending = branch => branch.status === 'PENDING';
export const isError = branch => branch.status === 'ERROR';
