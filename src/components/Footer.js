import React from "react";

export default function Footer(props) {
  return (
    <div >
      <div className={`bg-${props.mode=="light"?"info":props.mode} text-${props.mode=="light"?"dark":"light"} text-center p-2`}>Created by Pummy © Jun 2023</div>
    </div>
  );
}
