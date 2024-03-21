import { page } from './lib.js'
import { showExample } from './views/exampleView.js';

page('/', showExample)

page.start()