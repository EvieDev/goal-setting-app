import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashboardPage = () => {
  return (
    <div className="welcome-page">
      <Header />
      <main className="main-content">
        <section className="intro">
          <h1>Dashboard Page</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
