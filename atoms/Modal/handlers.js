// Sync with ./Modal.module.css#L13-L17
const FADE_OUT_ANIMATION_TIME = 400

export const createHandlerClick = () => (event) => {
  event?.stopPropagation()
}

export const createHandlerClose =
  ({ onClose, setOnFadeOut }) =>
  () => {
    setOnFadeOut(true)
    setTimeout(onClose, FADE_OUT_ANIMATION_TIME)
  }

export const createHandlerSecondaryAction =
  ({ onSecondaryAction }) =>
  () => {
    onSecondaryAction()
  }
