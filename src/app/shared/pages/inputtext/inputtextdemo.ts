import { Component } from '@angular/core';
import { DisabledDoc } from 'src/app/shared/doc/inputtext/disableddoc';
import { FloatLabelDoc } from 'src/app/shared/doc/inputtext/floatlabeldoc';
import { HelpTextDoc } from 'src/app/shared/doc/inputtext/helptextdoc';
import { IconsDoc } from 'src/app/shared/doc/inputtext/iconsdoc';
import { ImportDoc } from 'src/app/shared/doc/inputtext/importdoc';
import { InvalidDoc } from 'src/app/shared/doc/inputtext/invaliddoc';
import { SizesDoc } from 'src/app/shared/doc/inputtext/sizesdoc';
import { AccessibilityDoc } from '../../doc/inputtext/accessibilitydoc';
import { BasicDoc } from '../../doc/inputtext/basicdoc';
import { KeyFilterDoc } from '../../doc/inputtext/keyfilterdoc';
import { PropsDoc } from '../../doc/inputtext/propsdoc';
import { ReactiveFormsDoc } from '../../doc/inputtext/reactiveformsdoc';
import { StyleDoc } from '../../doc/inputtext/styledoc';

@Component({
    templateUrl: './inputtextdemo.html',
    styleUrls: ['./inputtextdemo.scss']
})
export class InputTextDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'reactive-forms',
            label: 'Reactive Forms',
            component: ReactiveFormsDoc
        },
        {
            id: 'icons',
            label: 'Icons',
            component: IconsDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'helptext',
            label: 'Help Text',
            component: HelpTextDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDoc
        }
    ];
}
