const config = {
  title: "I luv Dorin",
  description: {
    long: "I luv Dorin",
    short: "I luv Dorin",
  },
  keywords: [],
  author: "yeom2",
  email: "",
  site: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    github: "",
  },
};
export { config };
