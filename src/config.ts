import * as path from 'path';
import * as nodemailer from 'nodemailer';
export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || '3306';
export const DB_NAME = process.env.DB_NAME || 'infotpm';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';

export const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const RAILWAY_VOLUME_MOUNT_PATH =
  process.env.RAILWAY_VOLUME_MOUNT_PATH || path.join(__dirname, '..');

// Crea un objeto de transporte de correo
export const transporter = nodemailer.createTransport({
  // Configura los detalles del servidor de correo
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // Usar SSL
  name: 'RemesaEspana',
  auth: {
    user: 'info@remesaespana.com', // Tu dirección de correo electrónico
    pass: 'True123$123', // Tu contraseña de correo electrónico
  },
});
