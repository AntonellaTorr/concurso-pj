import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
});

// Organismos
export const getOrganismos = () => api.get('/organismos').then(r => r.data);
export const createOrganismo = (data: any) => api.post('/organismos', data).then(r => r.data);
export const updateOrganismo = (codigo: string, data: any) => api.put(`/organismos/${codigo}`, data).then(r => r.data);
export const deleteOrganismo = (codigo: string) => api.delete(`/organismos/${codigo}`);

// Expedientes
export const getExpedientes = () => api.get('/expedientes').then(r => r.data);
export const getExpediente = (org: string, tipo: string, numero: number, anio: number) =>
  api.get(`/expedientes/${org}/${tipo}/${numero}/${anio}`).then(r => r.data);
export const createExpediente = (data: any) => api.post('/expedientes', data).then(r => r.data);
export const updateExpediente = (org: string, tipo: string, numero: number, anio: number, data: any) =>
  api.put(`/expedientes/${org}/${tipo}/${numero}/${anio}`, data).then(r => r.data);
export const deleteExpediente = (org: string, tipo: string, numero: number, anio: number) =>
  api.delete(`/expedientes/${org}/${tipo}/${numero}/${anio}`);
export const removePersonaFromExpediente = (
  org: string, tipo: string, numero: number, anio: number, dni: string
) => api.delete(`/expedientes/${org}/${tipo}/${numero}/${anio}/personas/${dni}`);

export const addPersonaToExpediente = (
  org: string, tipo: string, numero: number, anio: number,
  data: { personaDni: string; vinculoId: number }
) => api.post(`/expedientes/${org}/${tipo}/${numero}/${anio}/personas`, data).then(r => r.data);

// Personas
export const getPersonas = () => api.get('/personas').then(r => r.data);
export const createPersona = (data: any) => api.post('/personas', data).then(r => r.data);
export const updatePersona = (dni: string, data: any) => api.put(`/personas/${dni}`, data).then(r => r.data);
export const deletePersona = (dni: string) => api.delete(`/personas/${dni}`);
export const getExpedientesByPersona = (dni: string) => api.get(`/personas/${dni}/expedientes`).then(r => r.data);

// Lookups
export const getCiudades = () => api.get('/ciudades').then(r => r.data);
export const getFueros = () => api.get('/fueros').then(r => r.data);
export const getTipoVinculos = () => api.get('/tipovinculos').then(r => r.data);

// Estadísticas
export const getEstadisticas = () => api.get('/estadisticas').then(r => r.data);