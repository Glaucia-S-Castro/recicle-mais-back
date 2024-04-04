import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MailerService {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.SUA_API_KEY; 
  }

  async sendEmail(to: string, subject: string, html: string): Promise<void> {
    const payload = {
      from: {

        email: 'MS_pK7BdD@trial-pq3enl6y8nrg2vwr.mlsender.net', 
      },
      to: [
        {
          email: to,
        },
      ],
      subject: subject,
      html: html,
    };

    try {
      const response = await axios.post('https://api.mailersend.com/v1/email', payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
      });

    
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error.response.data);
      throw new Error('Erro ao enviar e-mail');
    }
  }
}
