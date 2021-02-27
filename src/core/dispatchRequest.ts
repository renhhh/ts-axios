/*
 * @Author: renhhh
 * @Date: 2021-02-23 15:01:21
 * @Description:
 */
import { AxiosRequestConfig, AxiosPromise, AxiosReponse } from '../types'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders, flattenHeaders } from '../helpers/header'
import transform from './transform'
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transform(config.data, config.headers, config.transformRequest)
  config.headers = flattenHeaders(config.headers, config.method!)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}


function transformResponseData(res: AxiosReponse): AxiosReponse {
  res.data = transform(res.data,res.headers,res.config.transformReponse)
  return res
}
