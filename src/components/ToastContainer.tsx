import React from "react";
import { Toast } from "react-bootstrap";
import { createPortal } from "react-dom";

const Wrapper = {
  position: 'absolute',
  right: 0,
  top: 0,
}

export const ToastContainer = ({ toasts }) => {
    return createPortal(
        <div>
            {toasts.map(item => (
                <Toast key={item.id} id={item.id}>{item.content}</Toast>
            ))}
        </div>,
        document.body
    );
}