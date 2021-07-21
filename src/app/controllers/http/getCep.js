import axios from 'axios'

export const getCep = async(cep)  => {
    const {
        logradouro, bairro, localidade, uf,
      } = await (await axios.get(`http://viacep.com.br/ws/${cep}/json/`)).data;

      return {logradouro, bairro, localidade, uf}
}

