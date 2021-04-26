export default interface User{
    id: number,
    primer_nombre: string,
    segundo_nombre: string,
    primer_apellido: string,
    segundo_apellido: string,
    correo: string,
    num_telefono: string,
    direccion_id: number,
    rol: number,
    contrasena: string,
    num_tarjeta: string | null
}

export function instanceOfUser(object: any): object is User {
    return 'id' in object;
  }