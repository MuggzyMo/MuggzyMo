import { linkedIn, github, email } from "./Data";
import resume from "../../assets/files/Morgan_McGuire_Resume.pdf";

function IconLink() {
  return (
    <div>
      <div className="d-flex justify-content-evenly mt-2">
        <h2>
          <a href="https://www.linkedin.com/in/morgan-mcguire-1b7b9222b">
            {linkedIn}
          </a>
        </h2>
        <h2>
          <a href="https://github.com/MuggzyMo">{github}</a>
        </h2>
        <h2>
          <a href="mailto:morgan.mcguire2000@outlook.com">{email}</a>
        </h2>
      </div>
      <div className="fs-4">
        <a href={resume} download="Morgan_McGuire_Resume.pdf">
          Download my resume!
        </a>
      </div>
    </div>
  );
}

export default IconLink;
