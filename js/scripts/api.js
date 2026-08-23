async function getProfile(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(`HTTP Status: ${response.status}`);
    }

    const data = await response.json();
    if (!data) {
      throw new Error(`Cannot Access Data`);
    }
    return data;
  } catch (error) {
    console.log(`Terjadi kesalahan: ${error.message}`);
  }
}

export { getProfile };
