import React from "react";

const About = () => {
  return <div className="my-5">
    <p className="text-lg mb-4">
        Welcome to <strong>FoodBask</strong>, your go-to destination for delicious, easy-to-follow recipes that bring joy to your kitchen. Whether you're a seasoned chef or just starting out, we believe cooking should be a fun and rewarding experience.
    </p>

    <h2 className="text-2xl font-semibold mb-3">What you'll find here</h2>
    <ul className="list-disc list-inside text-lg mb-4">
        <li><strong>Diverse Recipes</strong>: From quick weeknight dinners to elegant dishes for special occasions, we've got something for everyone.</li>
        <li><strong>Healthy Options</strong>: We offer a variety of healthy recipes with nutritional tips to help you make informed choices.</li>
        <li><strong>Step-by-step Guides</strong>: Our recipes come with detailed instructions and visuals to ensure success in your kitchen.</li>
        <li><strong>Culinary Tips & Tricks</strong>: Learn expert tips to elevate your cooking skills, from mastering knife techniques to perfecting your pasta.</li>
    </ul>
    <p className="text-lg mb-4">
    We're more than just a recipe website - we're a community of food enthusiasts. We invite you to explore our recipes, share your creations, and 
    connect with us on social media. Have a favorite recipe you'd like to see? Let us know - we're always excited to hear from you!
    </p>
  </div>;
};

export default About;
