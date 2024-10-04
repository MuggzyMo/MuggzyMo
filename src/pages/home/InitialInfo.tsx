import Spongebob from "../../assets/images/Spongebob.gif";
import Homer from "../../assets/images/Homer.gif";
import Image from "../../components/Image";
import Profile from "../../assets/images/Profile.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components/App.css";
import IconLink from "./IconLink";

function IntialInfo() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <Image
          classNameString="img-thumbnail p-2 custom-thumbnail"
          source={Spongebob}
        ></Image>
        <div className="d-flex flex-column mb-3 text-center ">
          <h1>Morgan McGuire</h1>
          <IconLink></IconLink>
        </div>
        <Image
          classNameString="img-thumbnail p-2 custom-thumbnail"
          source={Homer}
        ></Image>
      </div>
      <div className="text-center">
        <Image
          classNameString="rounded-circle profile-pic custom-border"
          source={Profile}
        ></Image>
      </div>
    </>
  );
}

export default IntialInfo;
