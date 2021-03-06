import { Request , Response } from "express";
import CreateIncidentsService from "../services/CreateIncidentsService";
import DeleteIncidentsService from "../services/DeleteIncidentsService";
import FindIncidentService from "../services/FindIncidentService";


export default class IncidentsController{

    public async create (request: Request, response: Response) {

        const { ongId } = request.ong;
        const { title, description, value } = request.body;

        const createIncidentsService = new CreateIncidentsService();
        const incident = await createIncidentsService.execute({ong_id: ongId, title, description, value});

        return response.status(201).json({ incident })        
    };

    public async find (request: Request, response: Response){

        const { ongId } = request.ong;

        const findIncidentService = new FindIncidentService();

        const incidents = await findIncidentService.execute(ongId);

        return response.status(200).json({ incidents });
    }

    public async delete (request: Request, response: Response){

        const { id } = request.params;

        const deleteIncidentsService = new DeleteIncidentsService();

        deleteIncidentsService.execute(id);

        return response.status(204).json({message:"Deletado com Sucesso!"});
    }

};