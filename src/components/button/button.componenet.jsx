import "./button.styles.scss";

const Button = ( {children, style , ...otherProps  }) => {
    const BUTTON_TYPE_CLASSES = {
        google: "google-sign-in",
        inverted: "inverted"
    };
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[style]}`} {...otherProps}>{children}</button>
    )

};

export default Button;