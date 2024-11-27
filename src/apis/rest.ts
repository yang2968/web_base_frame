import axios from 'axios';

const VITE_ENV_VAR = import.meta.env.VITE_ENV_VAR;

/**
 * Axios 기반의 서버와 통신하는 모듈입니다.
 *
 * @author heewoong
 * @since 2024-11-27

 */

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
});

/**
 * 인증 토큰을 가져옵니다.
 * 추후 보안을 강화하여 토큰을 가져오는 로직을 바꿔야 합니다.
 *
 * @returns {string} - 토큰
 */
const getAuthorization = () => {
  // return { Authorization: VITE_ENV_VAR };
  return { Authorization: VITE_ENV_VAR };
};

/**
 * 요청 함수를 생성합니다.
 *
 * @param {string} method - 요청 메서드 (get, post, put, patch, delete)
 * @returns {function} - 요청 함수
 */
const createApi =
  (method) =>
  async (path, data = {}) => {
    try {
      const config = {
        headers: { ...getAuthorization() },
        ...(method === 'get' || method === 'delete' ? { params: data } : {}),
      };
      const response = await axiosInstance[method](
        path,
        method === 'get' || method === 'delete' ? config : data,
        config
      );
      return { status: response.status, data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // 서버에서 응답이 왔지만 에러인 경우 (4xx, 5xx 에러)
          return { status: error.response.status, data: error.response.data };
        } else if (error.request) {
          // 요청은 보냈지만 응답을 받지 못한 경우
          return {
            status: 0,
            data: { message: '네트워크 오류가 발생했습니다.' },
          };
        } else {
          // 요청 설정 과정에서 오류가 발생한 경우
          return {
            status: 0,
            data: { message: '요청 설정 중 오류가 발생했습니다.' },
          };
        }
      }
      // axios 에러가 아닌 다른 에러의 경우
      return {
        status: 500,
        data: { message: '알 수 없는 오류가 발생했습니다.' },
      };
    }
  };

export default {
  /**
   * GET 요청을 보냅니다.
   * GET 요청은 리소스를 조회할 때 사용합니다.
   * @param {string} path - 요청할 경로
   * @param {object} params - 요청할 파라미터
   * @returns {Promise<{status: number, data: any}>} - 요청 결과 (ex. { status: 200, data: { ... } })
   */
  get: createApi('get'),

  /**
   * POST 요청을 보냅니다.
   * POST 요청은 새로운 리소스를 생성할 때 사용합니다.
   * @param {string} path - 요청할 경로
   * @param {object} body - 요청할 데이터
   * @returns {Promise<{status: number, data: any}>} - 요청 결과 (ex. { status: 200, data: { ... } })
   */
  post: createApi('post'),

  /**
   * PUT 요청을 보냅니다.
   * PUT 요청은 특정 리소스를 업데이트할 때 사용합니다.
   * @param {string} path - 요청할 경로
   * @param {object} body - 요청할 데이터
   * @returns {Promise<{status: number, data: any}>} - 요청 결과 (ex. { status: 200, data: { ... } })
   */
  put: createApi('put'),

  /**
   * PATCH 요청을 보냅니다.
   * PATCH 요청은 특정 리소스의 일부를 업데이트할 때 사용합니다.
   * @param {string} path - 요청할 경로
   * @param {object} body - 요청할 데이터
   * @returns {Promise<{status: number, data: any}>} - 요청 결과 (ex. { status: 200, data: { ... } })
   */
  patch: createApi('patch'),

  /**
   * DELETE 요청을 보냅니다.
   * DELETE 요청은 특정 리소스를 삭제할 때 사용합니다.
   * @param {string} path - 요청할 경로
   * @param {object} params - 요청할 파라미터
   * @returns {Promise<{status: number, data: any}>} - 요청 결과 (ex. { status: 200, data: { ... } })
   */
  delete: createApi('delete'),
};
