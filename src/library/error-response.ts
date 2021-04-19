import { HttpStatus, HttpException } from '@nestjs/common';

const ErrorResponse = (
  message: any,
  status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
) => {
  if (message.message) {
    message = message.message;
  }

  throw new HttpException(message, status);
};
export default ErrorResponse;
