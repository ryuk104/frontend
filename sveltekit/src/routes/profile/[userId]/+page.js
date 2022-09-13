


export async function load({ params, fetch }) {
  try {
    const { userId } = params;
    const res = await fetch(`${BASE_URL}/api/user/${userId}`);

    const data = await res.json();

    return {
  user: data.data.user,
  posts: data.data.posts,
};
  } catch (error) {
    console.log(error);
  }
}

import { bookData } from '../../../testdb/user.js';
