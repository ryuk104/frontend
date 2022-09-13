import { error } from '@sveltejs/kit';


export async function load({ fetch }) {
  const res = await fetch('https://run.mocky.io/v3/d1a39d21-9f98-4719-94de-84cc746e265d')
  const textchannelprofile = await res.json()

  
if (res.ok) {
  return {
  textchannelprofile
}
}
  
throw error(500, 'fetch failed');
  }
  