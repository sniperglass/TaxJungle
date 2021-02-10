import defaultAvatar from "../assets/users/defaultAvatar.svg"
import avatarLarge from "../assets/icons/avatarLarge.png"

export const getAvatar = (user) => {
    return user.profile_picture ? user.profile_picture : avatarLarge
}