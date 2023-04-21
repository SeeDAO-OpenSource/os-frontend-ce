import config from "../config.json"

/* eslint-disable */
// import { authHeader } from '../helpers';

export const avatarService = {
  getAvatar
}

function getAvatar(id, size = 120) {
  return `${config.avatar.baseurl}/${config.avatar.variant}/${size}/${id}?colors=${config.avatar.color1},${config.avatar.color2},${config.avatar.color3},${config.avatar.color4},${config.avatar5}`
}
