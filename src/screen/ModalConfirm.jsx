import styles from "./ModalConfirm.module.css";
function ModalConfirm(props) {
  const {
    containerClass = "",
    containerStyle = {},
    headerClass = "",
    headerStyle = {},
    headerText = "",
    headerTextClass = "",
    headerTextStyle = null,
    LeftIcon = null,
    leftIconClass = "",
    leftIconStyle = null,
    RightIcon = null,
    rightIconClass = "",
    rightIconStyle = null,

    Separator = () => {
      return <hr style={{ margin: "0px" }} />;
    },

    bodyClass = "",
    bodyStyle = null,
    stackedButtons = false,
    bottomButtons = true,

    messageText = "",
    messageTextClass = "",
    messageTextStyle = {},
    MessageIcon = null,
    messageIconClass = "",
    messageIconStyle = {},

    buttonsContainerClass = "",
    buttonsContainerStyle = {},

    confirmButtonText = "Oui",
    confirmButtonTooltip = "",
    ConfirmButtonIcon = null,
    confirmButtonClass = "",
    confirmButtonStyle = {},

    cancelButtonText = "Non",
    cancelButtonTooltip = "",
    CancelButtonIcon = null,
    cancelButtonClass = "",
    cancelButtonStyle = {},

    onConfirm = () => {},
    onCancel = () => {},

  } = props;
  return (
    <div
      className={`${styles.modalConfirm} ${containerClass}`}
      style={containerStyle}
    >
      <div
        className={`${styles.modalHeader} ${headerClass}`}
        style={headerStyle}
      >
        {LeftIcon && (
          <div
            className={`${styles.leftIcon} ${leftIconClass}`}
            style={leftIconStyle}
          >
            {<LeftIcon/>}
          </div>
        )}
        {headerText && (
          <div
            className={`${styles.headerText} ${headerTextClass}`}
            style={headerTextStyle}
          >
            {headerText}
          </div>
        )}
        {RightIcon && (
          <div
            className={`${styles.rightIcon} ${rightIconClass}`}
            style={rightIconStyle}
          >
            {<RightIcon/>}
          </div>
        )}
      </div>
      {Separator && <Separator />}
      <div
        className={`${styles.modalBody} ${
          bottomButtons && styles.bottom
        } ${bodyClass}`}
        style={bodyStyle}
      >
        <div
          className={`${styles.messageText} ${messageTextClass}`}
          style={messageTextStyle}
        >
          <span className="me-1">
            {MessageIcon != null && <MessageIcon/> }
          </span>

          {/*TODO class style ... */ }
          <span>{messageText}</span>
        </div>
        <div
          className={`${styles.buttonsContainer} ${
            stackedButtons && styles.stacked
          } ${buttonsContainerClass}`}
          style={buttonsContainerStyle}
        >
          <button title={cancelButtonTooltip}>
            <span></span>
            {cancelButtonText}
          </button>
          <button title={confirmButtonTooltip}>
            <span>{ConfirmButtonIcon && <ConfirmButtonIcon/>}</span>
            {confirmButtonText}
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default ModalConfirm;
