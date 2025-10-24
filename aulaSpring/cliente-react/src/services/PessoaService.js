import axios from 'axios';

const isCodespaces = window.location.hostname.includes('github.dev') || window.location.hostname.includes('codespaces');
const API_BASE_URL = isCodespaces 
  ? `https://expert-winner-97545wxw66jrc777j-8080.app.github.dev/api/pessoas`
  : 'http://localhost:8080/api/pessoas';

class PessoaService {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async listarPessoas() {
    try {
      const response = await this.api.get('');
      return response.data;
    } catch (error) {
      console.error('Erro ao listar pessoas:', error);
      throw error;
    }
  }

  async buscarPessoaPorId(id) {
    try {
      const response = await this.api.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar pessoa com ID ${id}:`, error);
      throw error;
    }
  }

  async criarPessoa(pessoa) {
    try {
      const response = await this.api.post('', pessoa);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar pessoa:', error);
      throw error;
    }
  }

  async deletarPessoa(id) {
    try {
      await this.api.delete(`/${id}`);
      return true;
    } catch (error) {
      console.error(`Erro ao deletar pessoa com ID ${id}:`, error);
      throw error;
    }
  }
}

export default new PessoaService();
