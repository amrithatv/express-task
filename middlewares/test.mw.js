export function middleware(req,res,next){
    let id = req.query.id;
    if(id>=10){
        res.send("unauthorized request");
        res.next()
    }
}