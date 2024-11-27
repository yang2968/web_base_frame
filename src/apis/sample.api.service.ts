import rest from './rest';

// 최근 패치 버전을 가져오는 API
async function getCurrentPatchVersion(): Promise<number[]> {
  const response = await rest.get(`/data-dragon/api/versions.json`);
  if (response.status === 200) {
    return response.data;
  }
  return [];
}

const sampleService = {
  getCurrentPatchVersion,
};

export default sampleService;
