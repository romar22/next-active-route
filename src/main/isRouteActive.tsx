import { NextRouter } from "next/router"

const isRouteActive = (router: NextRouter, url: string, levelCheck:number = 1): string | boolean => {
    if(router.pathname === url) return true;

    if (url === undefined) return false;

    const routeChunks: string [] = router.pathname.split('/')
    const routeCheck: string [] = url.replace(/\/$/,"").split('/')

    if(routeChunks.length < routeCheck.length) return false;
    for(let i = 0, check = 0; i < routeChunks.length; i++){
        if(routeChunks[i] === '') continue

        if(check === levelCheck) return true;

        if(routeChunks[i][0] !== '[' && routeChunks[i][routeChunks.length - 1] !== ']'){
            if(routeCheck[i] !== routeChunks[i]){
                return false;
            }
        }

        check++;
    }

    return true;
}


export default isRouteActive; 