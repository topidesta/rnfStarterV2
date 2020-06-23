import {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

import AppStateHandler from 'src/AppState/AppStateHandler';
import Asyncstorage from '@react-native-community/async-storage';
import Axios from 'axios-observable';
import config from 'react-native-ultimate-config';
import {useState} from 'react';
import useToast from './useToast';

function useHTTP() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {errorToast} = useToast();

  const initiateRequest = async (
    requestConfig: AxiosRequestConfig,
    requestResolver?: (responseData: AxiosResponse<any>) => void,
    errorResolver?: (responseData: AxiosError<any>) => void,
    options: any = {},
  ) => {
    try {
      setLoading(true);
      setError(false);
      const responseData = await Axios.request({
        baseURL: config.API_URL,
        headers: {
          token: AppStateHandler.getValue('token'),
        },
        ...requestConfig,
      }).toPromise();
      setLoading(false);
      setError(false);

      if (requestResolver) {
        requestResolver(responseData);
      }
      logger(requestConfig.url, responseData);
      if (responseData.status !== 200 && !options.hideToast) {
        errorToast('Something went wrong');
      }
    } catch (e) {
      logger(requestConfig.url, e, true);
      setLoading(false);
      setError(true);
      if (errorResolver && e.response) {
        errorResolver(e);
      }
      if (e.response) {
        const {data, status} = e.response;
        switch (status) {
          case 401: {
            Asyncstorage.clear();
            AppStateHandler.resetState();
            AppStateHandler.setValue('loading', false);
            errorToast('Please Login again');
            break;
          }
          default: {
            if (!options?.hideToast) {
              errorToast(data?.data?.message || 'Something went wrong');
            }
            break;
          }
        }
      } else {
        if (!options?.hideToast) {
          errorToast('Failed to connect with server');
        }
      }
    }
  };

  const logger = (
    endPoint: string | undefined,
    log: any,
    isError?: boolean,
  ) => {
    if (__DEV__) {
      if (isError) {
        console.log(endPoint, log.response);
      } else {
        console.log(endPoint, log);
      }
    }
  };

  return {
    loading,
    error,
    initiateRequest,
  };
}

export default useHTTP;
