export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};

export type LoginRequest = {
  correo: string;
  clave: string;
};

export type RegisterRequest = {
  nombres: string;
  apellidos: string;
  genero: string;
  f_nacimiento: string;
  correo: string;
  clave: string;
};