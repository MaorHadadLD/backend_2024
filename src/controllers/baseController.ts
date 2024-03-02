import { Request, Response } from 'express'

class BaseController {
    ItemModel: any;
    constructor(ItemModel: any) {
        this.ItemModel = ItemModel;
    }
    async get =  (req: Request, res: Response) {
    console.log('get');
    try {
        if (req.query.name) {
           const item = await ItemModel.find({name: req.query.name});
           res.status(200).send(item);
        } else {
            const item = await ItemModel.find();
            res.status(200).send(item);
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    } 
    }
const getById = async (ItemModel,req: Request, res: Response) => {
    console.log(req.params.id);
    try{
        const item = await ItemModel.findById(req.params.id);
        if (item) {
            res.status(200).send(item);
        } else {
            res.status(404).send("not found");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};

const post = async (ItemModel,req: Request, res: Response) => {
    console.log("post");
    try{
        const item = await ItemModel.create(req.body);
        res.status(201).send(item);
    } catch (error) {
        res.status(400).send(error.massage);
    }
};


const put = (ItemModel,req: Request, res: Response) => {
    console.log("student put");
    res.status(400).send("Not implemented");
};

const remove = async (ItemModel,req, res) => {
    res.send("student delete");
    try {
        await ItemModel.findByIdAndDelete(req.params.id);     
        return res.status(200).send();  
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    };
};
}

export default BaseController;