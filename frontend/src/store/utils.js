import defaultAvatar from "../assets/users/defaultAvatar.svg"

export const getAvatar = (user) => {
    return user.profile_picture ? user.profile_picture : defaultAvatar
}