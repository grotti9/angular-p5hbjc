import './polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {NgbdTableCompleteModule} from './app/table-complete.module';

platformBrowserDynamic()
    .bootstrapModule(NgbdTableCompleteModule)
    .then(ref => {
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;
    })
    .catch(err => console.error(err));
