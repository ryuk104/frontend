import { error } from '@sveltejs/kit';


  export async function load({ params, fetch, url }) {
  const id = url.params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const userprofile = await res.json()


if (res.ok) {
  return {
  userprofile
}
}

throw error(500, 'fetch failed');
}
