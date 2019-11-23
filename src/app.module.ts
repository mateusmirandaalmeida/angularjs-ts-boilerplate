import angular, { module, IModule, bootstrap } from 'angular'

angular.lowercase = text => text.toLowerCase()

import { appConfig } from './config'
import { pagesModule } from './pages'

import ngSanitaze from 'angular-sanitize'
import uiRouter from '@uirouter/angularjs'
import angularTranslate from 'angular-translate'
import './app.module.scss'
import mbgComponents from '@mobiage/components'

export const app: IModule = module('app', [
    ngSanitaze,
    uiRouter,
    angularTranslate,
    pagesModule,
    mbgComponents,
])

app.config(appConfig)

bootstrap(document.querySelector('#app'), ['app'])
