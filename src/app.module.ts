import { module, IModule, bootstrap } from 'angular'
import { appConfig } from './config'
import { pagesModule } from './pages'

import ngSanitaze from 'angular-sanitize'
import uiRouter from '@uirouter/angularjs'
import angularTranslate from 'angular-translate'

export const app: IModule = module('app', [
    ngSanitaze,
    uiRouter,
    angularTranslate,
    pagesModule,
])

app.config(appConfig)

bootstrap(document.querySelector('#app'), ['app'])
