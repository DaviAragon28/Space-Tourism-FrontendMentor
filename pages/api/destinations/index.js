import Database from '../../../database/db'
import { destinations } from '../../../database/destinations_data';


const data = async (req, res) => {
    const data = await Database.getAll(destinations);
    res.status(200).json({ data, length: data.length });
};

export default data;