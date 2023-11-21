import cookie from "cookie";
export default async (req, res) => {

    // console.log('zxpppp', req)
    const brr = req.body.access_token
const bk = await fetch(`${process.env.backend_url}/api/me`, { 
    method: 'get', 
    headers: new Headers({
        'Authorization': 'Bearer '+ brr, 
        'Content-Type': 'application/x-www-form-urlencoded',
        "credentials": 'include'
      })
  });

  let data =await bk.json()
  // res.data = data
  if(bk.status == 200){
      // console.log('klklklk',data)

    res.statusCode = 200;
    res.json({ success: true , userdata:data});
}else{
    res.setHeader(
        "Set-Cookie",[
        cookie.serialize("access_token", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          expires: new Date(0),
          sameSite: "strict",
          path: "/",
        }),
        cookie.serialize("refresh_token", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          expires: new Date(0),
          sameSite: "strict",
          path: "/",
        }),
    
        cookie.serialize("username", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          expires: new Date(0),
          sameSite: "strict",
          path: "/",
        }),
      ]
      );
    res.statusCode = 401;
    res.json({msg: 'error occured'})
}
// console.log('ooooo',res.statusCode)
// return res
}