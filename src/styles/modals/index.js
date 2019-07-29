import { css } from "glamor"

// export const overlayStyle = css({
//   position: "fixed",
//   inset: 0,
//   backgroundColor: "green"
// })

export const largeModalStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "absolute",
  inset: 0,
  border: "1px solid rgb(204, 204, 204)",
  background: "rgb(255, 255, 255) none repeat scroll 0% 0%",
  overflow: "auto",
  borderRadius: 4,
  outline: "currentcolor none medium",
  padding: 20,
  backgroundColor: "#FFF",
  "@media(min-width: 600px)": {
    inset: 100
  },
  "@media(min-width: 900px)": {
    inset: "unset",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 500,
    minHeight: "70%"
  }
})
