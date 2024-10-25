import testModel from "../Model/test.model.js"

export async function test(req, res){
    res.status(400).json({msg: "gvodfvuv"});
}


export async function write(req, res) {
    try {
        let data = req.body;
        let result = await testModel.create({ name: data.name, age: data.age });
        console.log(result);
        res.status(201).json({msg: "Write successful!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Write error"});
    }
}

// export async function read(req,res){
//     try{
//         let result = await testModel.find();
//         console.log((result));
//         res.json(result);
//     }catch(error){
//         console.log(error);
//         res.status(500).json({msg: "Write error"});
//     }
// }
export async function read(req,res){

    try {
        let{limit,skip}=req.query;
        let result=await testModel.find({},{}).sort({age: -1});
        console.log(result);
        res.json(result);
        
    } catch (error) {
    console.log(error);
    res.status(500).json({msg:"read error"})        
    }
}
export async function update(req,res){

    try {
       let id = req.query.id;
       let data = req.body;
    let result = await testModel.updateOne({ _id:id},data);
        res.json(result);
        
    } catch (error) {
    console.log(error);
    res.status(500).json({msg:"update error"})        
    }
}
export async function del(req,res){

    try {
       let id = req.query.id;
    let result = await testModel.deleteMany({ _id:id});
        res.json(result);
        
    } catch (error) {
    console.log(error);
    res.status(500).json({msg:"delete error"})        
    }
}