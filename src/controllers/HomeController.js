import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'marcus',
      sobrenome: 'marques',
      email: 'teste@gmail.com',
      idade: 18,
      peso: 47.76,
      altura: 1.65,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
