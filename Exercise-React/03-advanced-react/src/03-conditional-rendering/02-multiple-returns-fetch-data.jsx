import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        } else {
          return res.json();
        }
      })
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }

  const { name, avatar_url, bio, company, html_url } = user;
  return (
    <div>
      <h2>{name}</h2>
      <img
        style={{ width: "250px", borderRadius: "24px" }}
        src={avatar_url}
        alt={name}
      />
      <h3>{bio}</h3>
      <h3>{company}</h3>
      <a
        style={{ fontSize: "30px", fontWeight: "400", color: "black" }}
        href={html_url}
      >
        {html_url}
      </a>
    </div>
  );
};
export default MultipleReturnsFetchData;
