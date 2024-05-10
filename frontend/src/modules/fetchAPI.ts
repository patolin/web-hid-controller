export async function fetchAPI(url: string) {
    try {
        console.log('>>>', url)
        const response = await fetch(url, { cache: 'no-store' });
        if (response.ok) {
            console.log('<<<', response)
        } else {
            console.error('Error: ', response.status);
        }
        return response;
      } catch {
        console.error('Promise rejected');
      }
}