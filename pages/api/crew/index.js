import Database from '../../../database/db'
import { crew } from '../../../database/crew_data';


const data = async (req, res) => {
    const data = await Database.getAll(crew);
    res.status(200).json({ data, length: data.length });
};

export default data;