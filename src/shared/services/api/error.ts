export class ApiError extends Error {
  message: string;

  constructor (message: string = 'Произошла ошибка, повторите запрос через пару минут') {
    super(message);

    this.message = message;
  }
}
