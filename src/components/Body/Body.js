import React from "react";
import { FullsizePicture } from "react-responsive-picture";
import { width, sizeHeight, sizeWidth } from "@material-ui/system";
import Fullsized from "react-responsive-picture/lib/components/FullsizePicture";

const Body = () => (
  <div>
    <div style={{ height: 400}}>
      <FullsizePicture center={true} src="https://firebasestorage.googleapis.com/v0/b/rieno-c0fd1.appspot.com/o/Img%20Principal.png?alt=media&token=158038ef-e461-4da3-8218-c64c5671d79e">
      </FullsizePicture>
    </div>
  </div>
);

export default Body;
