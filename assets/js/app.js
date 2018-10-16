import 'phoenix_html'
import { handleIntercomLaunch } from './launcher.js'
import handleTimeOptions from './callback.js'
import "accordion"

handleIntercomLaunch()
handleTimeOptions()

var el = document.querySelector(".accordion");
new Accordion(el);
