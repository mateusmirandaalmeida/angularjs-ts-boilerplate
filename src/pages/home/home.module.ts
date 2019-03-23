import { module } from 'angular'
import { StateProvider } from '@uirouter/angularjs'
import { HomePage } from './home'
import HomeTemplate from './home.html'
import './home.scss'

const homeModule = module('app.page.home', [])
    .config(($stateProvider: StateProvider) => {
        $stateProvider
            .state({
                name: 'home',
                url: '/home',
                controller: HomePage,
                template: HomeTemplate,
                controllerAs: '$ctrl',
            })
    }).name

export { homeModule }
