const Middleware = require('../helpers/middleware')
const confirm = require('./confirm')
const resolve = require('./resolve')
const complete = require('./complete')

const middleware = new Middleware()

// 判断目标路径类型，执行对应操作
middleware.use(confirm)
// 处理模版
middleware.use(resolve)
// 完成
middleware.use(complete)

module.exports = (template, project, options) => {
  const context = {
    template,
    project,
    options,
    src: '', // 模版地址
    dest: '', // 目标地址
    config: Object.create(null),
    answers: Object.create(null),
    files: [],
  }

  middleware.run(context)
}
