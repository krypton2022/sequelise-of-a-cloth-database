// importing the model
import salemodel from "../model/salesmodel.js";

// get all sales
export const allSales =async(req,res)=>{
    try{
        const sales=await salemodel.findAll();
        if(sales.length===0){
            res.status(404).json({
                message:"an error occurred"
            });
        }else{
            res.status(200).json({
                message:"All sales"+sales.length,
                data:sales
            });
        }

    }catch(error){
        console.log(error.message)
    }

    };


    // getting a single sale

    export const singlesale=async(req,res)=>{
        try{
            // to grab the id from the url
            const id=req.params.id;
            const sale=await salemodel.findAll({
                where:{id:id}
            });

            //check if there is  an actual object properties/attributies from the response

            if (sale.lenght===0){
                res.status(404).json({message:`no such id:${id}`});
                console.Console.log(salesTable[0].id)
            }else{
                // return result
                res.status(200).json({data:sale[0]})
            }


        }catch(error){
            res.status(404).json({
                message:error.message
            });

        }

    };


    // create a new record

    export const newsale=async(req,res)=>{
        try{
            const sale=await salemodel.create(req.body);
            res.status(201).json({data:sale});

        }catch(error){
            res.status(404).json({message:error.message})

        }
    }


    // update a sale record

export const updateSale=async(req,res)=>{
    try{
        const id=req.params.id;
        const updatedsale= await salemodel.update(req.body,{where:{id:id}})
            if(updatedsale[0]===0){
                res.status(404).json({message:`no such id:${id}`});
            }else{
                // return result
                res.status(200).json({message:'updated sucessfully',
            data:updateSale});
            }
    }catch(e){
        res.status(500).json({message:e.message});
    }
}


// deleting a sale record

export const deleteSale=async (req,res)=>{

    try{
        const id=req.params.id;
        const deletedsale= await salemodel.destroy({where:{id:id}});

        // check for wrong id
        if(removedsale===0){
            res.status(404).json({message:`no such id:${id}`});
        }else{
            // return the result
            res.status(200).json({
                message:"sucessfully deleted",
                data:removedsale
            });
        }

    }catch(e){
            res.status(400).json({
                message:e.message
            })
    }
}