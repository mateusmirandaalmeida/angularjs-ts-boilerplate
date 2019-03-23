import { module } from 'angular'
import { homeModule } from './home/home.module'

const pagesModule = module('app.page', [
    homeModule,
]).name

export { pagesModule }
