import { Service } from '../models/Service';

const mock = [
  new Service(1, 'Nova entrega', require('../assets/favicon.png'), 'Uma longa descrição', 'Agende uma nova entrega'),
  new Service(2, 'Excluir entrega', require('../assets/favicon.png'), 'Uma longa descrição', 'Realize a exclusão de uma entrega'),
  new Service(3, 'Listar entregas', require('../assets/favicon.png'), 'Uma longa descrição', 'Liste todas entregas agendadas'),
  new Service(4, 'Pesquisar entrega', require('../assets/favicon.png'), 'Uma longa descrição', 'Realize a busca por uma entrega'),
  new Service(5, 'Alterar entrega', require('../assets/favicon.png'), 'Uma longa descrição', '[Serviço não implementado]'),
  new Service(6, 'Confirmar entrega', require('../assets/favicon.png'), 'Uma longa descrição', '[Serviço não implementado]'),
];

export default mock;
