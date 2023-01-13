import Database from '../../../database/db'
import { technology } from '../../../database/technology_data';


const data = async (req, res) => {
    const data = await Database.getAll(technology);
    res.status(200).json({ data, length: data.length });
};

export default data;