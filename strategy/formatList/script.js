import { TextProcessor } from './TextProcessor.js';
import {Format} from './format-container.js';

let textProcessor = new TextProcessor(Format.MarkDownFormatList);
textProcessor.appendList(["foo", "bar", "baz"]);
textProcessor.setListStrategy(Format.HtmlFormatList);
textProcessor.appendList(["alpha", "beta", "gamma"]);
