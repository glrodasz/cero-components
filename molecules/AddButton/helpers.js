export const shouldShowHelpText = ({
  isEditable,
  inputValue,
  focusHelpText,
  blurHelpText,
}) => isEditable && inputValue && (focusHelpText || blurHelpText)
