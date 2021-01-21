import iView from 'view-design'
import router from '@/router'
import moment from 'moment'

const CODE_OK = 0
const CODE_FAIL = 1
const CODE_NEED_LOGIN = 2

function ok (resp) {
  return resp.data.code === CODE_OK
}

function fail (resp) {
  return resp.data.code === CODE_FAIL
}

function needLogin (resp) {
  return resp.data.code === CODE_NEED_LOGIN
}

function messageIfSuccess (resp) {
  if (ok(resp)) {
    iView.Message.success({
      background: true,
      content: resp.data.message
    })
  }
}

function messageIfFail (resp) {
  if (fail(resp)) {
    iView.Message.warning({
      background: true,
      content: resp.data.message
    })
  }
}

function redirectIfNeedLogin (resp) {
  if (needLogin(resp)) {
    router.replace({
      path: '/login' + '#' + moment.now()
    })
  }
}

export {
  ok,
  fail,
  messageIfSuccess,
  messageIfFail,
  needLogin,
  redirectIfNeedLogin,
}
