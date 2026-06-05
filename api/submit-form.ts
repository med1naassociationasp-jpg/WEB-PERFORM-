import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstname, lastname, email, mobile, microsip_source } = req.body;

    if (!firstname || !lastname || !email || !mobile || !microsip_source) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const params = new URLSearchParams();
    params.append('firstname', firstname.trim());
    params.append('lastname', lastname.trim());
    params.append('email', email.trim());
    params.append('mobile', mobile.trim());
    params.append('cf_1021', microsip_source.trim());
    params.append('__vtrftk', 'sid:0728edbf570a45cb6acbe9f87942fc5ac7409415,1780597343');
    params.append('publicid', '9fa3a5d787c563b345c156922f70f090');

    console.log('Enviando a Mantic360:', {
      firstname,
      lastname,
      email,
      mobile,
      cf_1021: microsip_source
    });

    fetch('https://perform.mantic360-s1.net/modules/Webforms/capture.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    }).then(response => {
      console.log('Mantic360 Status:', response.status);
    }).catch(error => {
      console.error('Error:', error);
    });

    return res.status(200).json({
      success: true,
      message: '¡Gracias por tu interés! Te contactaremos pronto.'
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Error al procesar la solicitud'
    });
  }
}