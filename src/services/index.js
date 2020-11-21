import api from '../config/api';

export const getClima = () =>
  api.get(`/v1/clima/clima-doze-horas`);
