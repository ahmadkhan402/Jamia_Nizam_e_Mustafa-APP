import { Dimensions } from "react-native"

const Width = (number) => {
    const fullscreen = Dimensions.get('window').width
    if (number <= 0) {
        return number
    } else if (number >= 100) {
        return fullscreen
    } else {
        return fullscreen * (number / 100)

    }

}

const Height = (number) => {
    const fullscreen = Dimensions.get('window').height
    if (number <= 0) {
        return number
    } else if (number >= 100) {
        return fullscreen
    } else {
        return fullscreen * (number / 100)

    }
}

export { Width, Height }