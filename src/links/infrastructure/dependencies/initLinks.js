//repository
import LinkLocalMapRepository from '../repository/LinkLocalMapRepository.js';
const LinkRepository  = new LinkLocalMapRepository()
//use case
import CreateLink from '../../application/CreateLink.js';

const createLink = new CreateLink({LinkRepository})

//controller
import {LinkController} from '../controller/LinkController.js';

const linkController = new LinkController({
createLink,
});

export default linkController;
