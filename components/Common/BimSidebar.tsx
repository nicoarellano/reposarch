import React from "react";
import * as OBC from "openbim-components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";

export default function BimSidebar() {
  const sidebarStyle: React.CSSProperties = {
    gridArea: "sidebar",
    backgroundColor: "#202932",
    borderRightColor: "#3c4854",
    borderRightWidth: "1px",
    display: "flex",
    flexDirection: "column",
    rowGap: "12px",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div style={sidebarStyle}>
        <span className={OBC.Button.Class.Base + "material-icons"}>
          <HomeRoundedIcon />
        </span>
        <span className={OBC.Button.Class.Base + "material-icons"}>
          <MenuOpenRoundedIcon />
        </span>
      </div>
    </>
  );
}
