export default function standardOptionsMiddleware(reqOptions) {
  const updatedReqOptions = {
    ...reqOptions,
    credentials: (reqOptions.credentials ?? 'same-origin'),
    headers: (reqOptions.headers ?? {}),
    responseType: (reqOptions.responseType ?? 'json')
  };


  if (!updatedReqOptions.headers.Accept) {
    switch (updatedReqOptions.responseType) {
      case 'json':
        updatedReqOptions.headers.Accept = 'application/json';
        break;

      case 'text':
        updatedReqOptions.headers.Accept = 'text/plain';
        break;
    }
  }


  if ('body' in updatedReqOptions && !updatedReqOptions.headers['Content-Type']) {
    updatedReqOptions.headers['Content-Type'] = 'application/json';
  }


  if (updatedReqOptions.headers['Content-Type'] === 'application/json'
      && updatedReqOptions.body
      && (typeof updatedReqOptions.body !== 'string')) {
    updatedReqOptions.body = JSON.stringify(updatedReqOptions.body);
  }


  return updatedReqOptions;
}
