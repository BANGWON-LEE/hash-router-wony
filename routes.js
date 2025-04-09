import { registerHashRouter, registerNotFoundRouter } from './main.js'
import { another } from './pages/another.js'
import { home } from './pages/home.js'
import { notFound } from './pages/notFound.js'
import { sub } from './pages/sub.js'
import { subPath } from './pages/subPath.js'

//1번

registerHashRouter('#/', home())
registerHashRouter('#/sub', sub())
registerHashRouter('#/sub/:id', subPath())
// registerHashRouter('/sub/:title/:content', params => `<div>${params}</div>`)
registerHashRouter('#/another', another())
registerNotFoundRouter(notFound())
