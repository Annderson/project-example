import { SagaIterator } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

import { Types } from 'data/user/actions';

// eslint-disable-next-line @typescript-eslint/no-empty-function
function* userLogin(): SagaIterator {}

function* permissionSaga(): SagaIterator {
  yield takeLatest(Types.LOGIN, userLogin);
}

export default permissionSaga;
