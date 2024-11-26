import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <Header />
      <main className="main-content">
        <section className="intro">
          <h1>Welcome to GoalSetter</h1>
          <h2>Achieve your dreams, one step at a time</h2>
        </section>

        <section className="actions">
          <Button text="Get Started" type="primary" />
          <Button text="Login" type="secondary" />
        </section>

        <h3>Why Choose Us?</h3>
        {/* <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul> */}
      </main>
      <Footer />
    </div>
  );
};

export default WelcomePage;
