import { APP_ROUTES } from "./app-routes";

export const POST_AUTH_ROUTES = [
    {
        path:APP_ROUTES.root,
     loadChildren:() => import('../../pages/post-auth-pages/post-auth-pages.module').then(m=>m.PostAuthPagesModule)
    }
]