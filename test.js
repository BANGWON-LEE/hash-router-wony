import { registerRoute } from './main.js'
import { another } from './pages/another.js'
import { home } from './pages/home.js'
import { sub } from './pages/sub.js'

//1번
registerRoute('/', home())
registerRoute('/sub', sub())
registerRoute('/another', another())
