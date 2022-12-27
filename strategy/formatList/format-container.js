import {HtmlFormatList} from './HtmlFormatList.js';
import { MarkDownFormatList} from './MarkDownFormatList.js';

const Format = {};
function registerFormat(constructor) {
    Format[constructor.name] = new constructor();
}

registerFormat(HtmlFormatList);
registerFormat(MarkDownFormatList);

export { Format };