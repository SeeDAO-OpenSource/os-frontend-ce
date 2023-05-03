const AVATAR_BASE_URL = "https://source.boringavatars.com"
const AVATAR_VARIANT = "beam"
const AVATAR_COLOR1 = "264653"
const AVATAR_COLOR2 = "2a9d8f"
const AVATAR_COLOR3 = "e9c46a"
const AVATAR_COLOR4 = "f4a261"
const AVATAR_COLOR5 = "e76f51"

export default class AvatarService {
    static getAvatar(id: string, size: number = 120) {
        return `${AVATAR_BASE_URL}/${AVATAR_VARIANT}/${size}/${id}?colors=${AVATAR_COLOR1},${AVATAR_COLOR2},${AVATAR_COLOR3},${AVATAR_COLOR4},${AVATAR_COLOR5}`
    }
}

