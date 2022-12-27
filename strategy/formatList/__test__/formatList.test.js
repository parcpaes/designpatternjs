import { TextProcessor } from '../TextProcessor.js';
import {Format} from '../format-container.js';



describe('Format List',()=>{
    beforeEach(()=>{
        document.body.innerHTML = '<div></div>';
    });
    it('it should return Markdown list',()=>{
        let textProcessor = new TextProcessor(Format.MarkDownFormatList);
        textProcessor.appendList(["foo", "bar", "baz"]);

        let actual = textProcessor.toString();
        const expected = [' * foo', ' * bar', ' * baz'];

        expect(actual).toMatch(expected.join('\n'));
    });

    it('should return HTML list',()=>{
        let textProcessor = new TextProcessor(Format.HtmlFormatList);
        textProcessor.appendList(["alpha", "beta", "gamma"]);

        const actual = textProcessor.toString();
        const expected= '<ul><li>alpha</li><li>beta</li><li>gamma</li></ul>';

        expect(actual).toMatch(expected);
    });
})