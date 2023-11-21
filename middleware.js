import { NextResponse } from 'next/server'
// import UserStore from './store/userStore'
// import store from 'store';


export async function middleware(request) {
    const currentUser = request.cookies.get('username')
    const access_token = request.cookies.get('access_token');
    const refresh_token = request.cookies.get('refresh_token');

    // console.log('rrr',currentUser)
   
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if(!currentUser){
            return NextResponse.redirect(new URL('/', request.url))}
                

        const bk = await fetch(`${process.env.backend_url}/api/me`, { 
            method: 'get', 
            headers: new Headers({
                'Authorization': 'Bearer '+ access_token, 
                'Content-Type': 'application/x-www-form-urlencoded',
                "credentials": 'include'
              })
          });
          
          let data = await bk.json()

       
          console.log('ppp', bk.status)
          console.log('ppp2we', data.id != currentUser)
     
          if(data.id != currentUser){
            return NextResponse.redirect(new URL('/', request.url))
          }
        // return NextResponse.redirect(new URL('/', request.url))
}


if(request.nextUrl.pathname.startsWith('/auth')){
  if(currentUser){
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

}
}

