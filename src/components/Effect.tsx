import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type UserData = {
  name: string;
  email: string;
  phone: string;
  website: string;
};

export default function Effect() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [userData, setUserData] = useState<UserData | null>(null);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  // ✅ Apply theme to BODY (fix)
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // ✅ Fetch data
  useEffect(() => {
    const controller = new AbortController();

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: UserData = await response.json();
        setUserData(data);
      } catch (error: unknown) {
        if (error instanceof DOMException && error.name === "AbortError") {
          console.log("Fetch aborted");
        } else if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    fetchUserData();

    return () => controller.abort();
  }, []);

  return (
    <main className="main">
      <div className="card">
        <header className="header">
          <h1 className="title">User Profile</h1>

          <button onClick={toggleTheme} className="theme-btn">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </header>

        <section className="section">
          {userData ? (
            <dl className="list">
              <div className="item">
                <dt>Name</dt>
                <dd>{userData.name}</dd>
              </div>
              <div className="item">
                <dt>Email</dt>
                <dd>{userData.email}</dd>
              </div>
              <div className="item">
                <dt>Phone</dt>
                <dd>{userData.phone}</dd>
              </div>
              <div className="item">
                <dt>Website</dt>
                <dd>{userData.website}</dd>
              </div>
            </dl>
          ) : (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
