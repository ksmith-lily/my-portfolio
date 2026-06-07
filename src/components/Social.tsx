import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Social () {
  return (
    <div className="flex justify-end py-2 gap-2 flex-row">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-black/10 dark:hover:bg-white/10 px-2 py-1 rounded-lg lg:text-2xl text-lg"
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-black/10 dark:hover:bg-white/10 px-2 py-1 rounded-lg lg:text-2xl text-lg"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  )

}