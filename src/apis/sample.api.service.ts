import rest from './rest';

/**
 * https://sampleapis.com/api-list/beers
 */
async function getBeers(): Promise<any[]> {
  const response = await rest.get('/api/sample/beers/ale');
  console.log(response);

  if (response.status === 200) {
    return response.data;
  }
  return [];
}

const sampleService = {
  getBeers,
};

export default sampleService;
