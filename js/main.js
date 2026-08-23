import { getProfile } from "./scripts/api.js";

const searchForm = document.querySelector(`.search-form`);
const searchUsername = document.getElementById(`search_username`);
const infoImage = document.querySelector(`.info-image`);
const infoUsername = document.querySelector(`.info-username`);
const infoBio = document.querySelector(`.info-bio`);

searchForm.addEventListener(`submit`, async (e) => {
  e.preventDefault();
  const username = searchUsername.value;

  const data = await getProfile(username);

  const dataUser = {
    name: data.name,
    login: data.login,
    bio: data.bio,
    public_repos: data.public_repos,
    company: data.company,
    following: data.following,
    followers: data.followers,
    avatar: data.avatar_url,
  };

  console.log(dataUser);

  function displayProfile() {
    infoImage.setAttribute(`src`, dataUser.avatar);
    infoUsername.textContent = `${dataUser.name}`;
    infoBio.textContent = infoBio.textContent =
      !dataUser.bio || dataUser.bio === "null"
        ? "Bio belum tersedia"
        : dataUser.bio;
  }

  displayProfile();
});
