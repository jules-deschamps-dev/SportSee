const VITE_API_URL = import.meta.env.VITE_API_URL;


/**
 * Récuèpe un utilisateur de la bdd d'après son id
 * @param id l'identifiant de l'utilisateur
 * @returns 
 */
export const fetchData = async (id: string, endpoint: string): Promise<any> => {
  const userId = parseInt(id, 10);
  const mock = import.meta.env.VITE_USE_MOCK === 'true';
  if (mock == true) return fetchDataFromMock(userId, endpoint);
  return fetchDataFromApi(userId, endpoint);
};


/**
 * 
 * @param id 
 * @param endpoint 
 * @returns 
 */
const fetchDataFromMock = async (id: number, endpoint: string): Promise<any> => {
  if (endpoint == "") endpoint = "info";

  const data = await fetch('../../public/data.json');
  const jsonData = await data.json();
  const mockData = jsonData[endpoint];

  let filteredData = await mockData.find((item: any) => item.userId === id);

  return filteredData
}

/**
 * 
 * @param id 
 * @param endpoint 
 * @returns 
 */
const fetchDataFromApi = async (id: number, endpoint: string): Promise<any> => {
  const response = await fetch(`${VITE_API_URL}/user/${id}/${endpoint}`);
  if (!response.ok) throw new Error('user_unknow');
  let data = await response.json();
  return data.data;
}
