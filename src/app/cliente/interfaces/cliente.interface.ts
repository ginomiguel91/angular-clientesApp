export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  createAt: Date;
}

export interface ClienteAll {
  message: string;
  status: number;
  clienteDto: ClienteDto;
}

export interface ClienteDto {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  createAt: Date;
}
