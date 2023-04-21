import axios from "axios"

const DISCORD_API_USERSELF = "https://discordapp.com/api/v6/users/@me"
const DISCORD_CLIENT_ID = "1027413936938684467"
const DISCORD_AUTH_URL = "https://discord.com/api/oauth2/authorize"
const DISCORD_AUTH_REDIRECT_URL = `${window.location.origin}/my/profile`
const DISCORD_CDN_AVATARS = "https://cdn.discordapp.com/avatars"

export default class DiscordService {
  getClientId() {
    return DISCORD_CLIENT_ID
  }
  getAuthUrl() {
    return DISCORD_AUTH_URL
  }
  getRedirectUrl() {
    console.log("DISCORD_AUTH_REDIRECT_URL:", DISCORD_AUTH_REDIRECT_URL)
    return DISCORD_AUTH_REDIRECT_URL
  }
  getUser(tokenType, accessToken) {
    return new Promise((resolve, reject) => {
      axios
        .get(DISCORD_API_USERSELF, {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then((res) => {
          resolve(res.data)
        })
        .catch((error) => reject(error))
    })
  }

  getAvatar(userId, avatorId) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${DISCORD_CDN_AVATARS}/${userId}/${avatorId}`, {
          responseType: "arraybuffer"
        })
        .then((res) => {
          resolve(
            `data:image/jpeg;base64,${Buffer.from(res.data, "binary").toString(
              "base64"
            )}`
          )
        })
        .catch((error) => reject(error))
    })
  }

  getDiscordAuth(){
    return {
        client_id: this.getClientId(),
        redirect_uri: this.getRedirectUrl(),
        response_type: 'token',
        scope: 'identify guilds',
      }
  }

  getDiscordAuthLink(){
    const params = new URLSearchParams();
    const auth = this.getDiscordAuth();
    const keys = Object.keys(auth);
    keys.forEach((k) => {
      params.append(k, auth[k]);
    });
    return `${this.getAuthUrl()}?${params
      .toString()
      .replace(/%3A/gi, ':')
      .replace(/%2F/gi, '/')}`;

  }
}
