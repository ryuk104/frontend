
import { BASE_URL } from "$lib/config";

export async function load({ fetch }) {
  const res = await fetch(`${BASE_URL}/api/user?page=0&limit=5`);

  return {
  users: await res.json(),
};
}
