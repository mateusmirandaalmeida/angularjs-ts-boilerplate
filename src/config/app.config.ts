import { UrlRouterProvider } from '@uirouter/angularjs'
import ptJson from '../i18n/locale-pt.json'

const appConfig = ($urlRouterProvider: UrlRouterProvider, $translateProvider) => {

    $urlRouterProvider.otherwise('home')
    $translateProvider.translations('pt', ptJson).preferredLanguage('pt').useSanitizeValueStrategy('sanitize')

}

export { appConfig }
