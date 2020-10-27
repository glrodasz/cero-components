export const shouldShowHelpText = ({
  editMode,
  inputValue,
  focusHelpText,
  blurHelpText,
}) => editMode && inputValue && (focusHelpText || blurHelpText)
