import { registerHashRouter } from './main.js'
import { another } from './pages/another.js'
import { home } from './pages/home.js'
import { notFound } from './pages/notFound.js'
import { sub } from './pages/sub.js'

//1번

registerHashRouter('/', home())
registerHashRouter('/sub', sub())
registerHashRouter('/another', another())
registerHashRouter('*', notFound())
