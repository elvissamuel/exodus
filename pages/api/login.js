import cookie from "cookie";


export default async (req, res) => {
    // console.log('working')
  

  const brr = req.body.access_token
  
  //   const bk =  await axios.get(`${process.env.backend_url}/api/me`,{
      //     headers: {
          
          //         "Authorization": `Bearer ${brr}`
          //         },
          //         })
          
          const bk = await fetch(`${process.env.backend_url}/api/me`, { 
              method: 'get', 
              headers: new Headers({
                  'Authorization': 'Bearer '+ brr, 
                  'Content-Type': 'application/x-www-form-urlencoded',
                  "credentials": 'include'
                })
            });
            
            let data =await bk.json()
            // console.log('klklklk',data)
            if(bk.status == 200){

              res.setHeader(
                "Set-Cookie",[
                cookie.serialize("refresh_token", req.body.refresh_token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== "development",
                  maxAge: 60 * 60,
                  sameSite: "strict",
                  path: "/",
                }),
                cookie.serialize("access_token", req.body.access_token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== "development",
                  maxAge: 60 * 60,
                  sameSite: "strict",
                  path: "/",
                }),
                cookie.serialize("username", data.id, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== "development",
                  maxAge: 60 * 60,
                  sameSite: "strict",
                  path: "/",
                }),


              ]
              );

                res.statusCode = 200;
                res.json({ success: true , userdata:data});
            }else{
                res.statusCode = 400;
                res.json({ success: false });
            }
};
