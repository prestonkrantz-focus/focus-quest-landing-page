exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
 
  // Parse form body
  let name, email;
  try {
    const params = new URLSearchParams(event.body);
    name  = params.get('name')  || '';
    email = params.get('email') || '';
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }
 
  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email is required' }) };
  }
 
  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
  const GROUP_ID = '184047994685884163'; // Sentio Beta List
 
  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        fields: { name: name },
        groups: [GROUP_ID]
      })
    });
 
    if (response.status === 200 || response.status === 201) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true })
      };
    } else {
      const errorData = await response.json();
      console.error('MailerLite API error:', errorData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: errorData.message || 'Subscription failed' })
      };
    }
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error, please try again' })
    };
  }
};
 
