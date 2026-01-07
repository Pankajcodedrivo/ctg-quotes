import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const messages = [
  <>
    Some carriers may require additional information to provide an accurate quote.
    <br />
    We’ll notify you by message if needed.
  </>,
  <>
    We gather real information to provide real quotes.
    <br />
    Please be accurate with all your information.
  </>,
  <>
    You only have to fill this out once. Your profile stays with you for life and
    <br />
    can be updated anytime — no repeating your information ever again.
  </>,
  <>
    Your information is only shared with agencies generating your quotes.
    <br />
    You’ll always know who has it. No spam. No surprises.
  </>,
];

interface Props {
  apiDone: boolean;
  onComplete: () => void;
}

const ProfileCreationLoader = ({ apiDone, onComplete }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
    if (index === messages.length - 1 && apiDone) {
      // ✅ API done AND all messages shown
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [index, apiDone, onComplete]);

  return (
    <div className="profile-creation">
      <div className="container text-center">
        <div className="spinner-border mb-3"></div>

        <h2>Creating Your Account...</h2>
        <p>{messages[index]}</p>

        <div className="bottom-footer">
          <div className="sub-footer text-center">
            <p className="copiright">
              © 2025 <span>CTG Quotes.</span> All rights reserved.{" "}
              <Link to="/">Privacy Policy</Link> |{" "}
              <Link to="/">Terms & Conditions</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreationLoader;
