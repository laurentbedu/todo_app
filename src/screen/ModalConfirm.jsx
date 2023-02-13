import "./ModalConfirm.css";
function ModalConfirm(props) {
  const {
    modalClass = "",
    modalStyle = {},
    headerText = null,
    headerClass = "",
    headerStyle = {},
    bodyText = null,
    //class, style
    bodyClass = "",
    bodyStyle = {},
    footerText = null,
    footerClass = "",
    footerStyle = {},
    yesButtonText = "✓",
    //class, style
    noButtonText = "✗",
    //class, style
    buttonPosition = "", // after|bottom + buttonSpacing""|left|right
    buttonGrouping = "",
    YesIcon,
    NoIcon,
    TextIcon
  } = props;

  return (
    <div className={"modal-container" + modalClass} style={ modalStyle }>
      {headerText != null && (
        <div className={"modal-header " + headerClass} style={ headerStyle }>
          {headerText}
        </div>
      )}
      {bodyText != null && ( 
        <div
          className={`modal-body ${buttonPosition} ${bodyClass}`}
          style={ bodyStyle }
        >
            
          <div className={"modal-body-text "}>
            {TextIcon && <span className=""><TextIcon/></span>} {bodyText}
            {/* //TODO Revoir Icon Position */}
          </div>
          <div className={"modal-body-buttons "}>
              <button className="yes-button">{yesButtonText}</button>
              <button className="no-button">{noButtonText}</button>
          </div>
        </div>
      )}
      {footerText != null && (
        <div className={"modal-footer " + footerClass} style={ footerStyle }>
          {footerText}
        </div>
      )}
    </div>
  );
}

export default ModalConfirm;
