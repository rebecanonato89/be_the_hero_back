import { getRepository, Repository } from "typeorm";
import Incidents from "../models/Incidents";
import IIncidentsRepository from "./interface/IIncidentsRepository";
import ICreateIncidentsDTO from "../dto/ICreateIncidentsDTO";


class IncidentsRepository implements IIncidentsRepository {

    private ormRepository: Repository <Incidents>;

    constructor () {
        this.ormRepository = getRepository(Incidents);
    }

     async create(dataIncidents: ICreateIncidentsDTO): Promise<Incidents> {

        const incidents = this.ormRepository.create(dataIncidents);

        await this.ormRepository.save(incidents);

        return incidents;

    }


    
}

export default IncidentsRepository;