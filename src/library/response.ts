const response = (data: any, message = '', status: number, meta: any = {}) => {

  if (data === null) {
    data = null;
  } else {
    if (data.data) {
      data = data.data;
    }
    if (data.meta) {
      meta = data.meta;
    }
    if (data.status) {
      status = data.status;
    }
  }

  return { data, message, meta, statusCode: status };
};
export default response;
