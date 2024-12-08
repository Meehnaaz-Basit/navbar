# Navbar with Mega Menu

A responsive **Navbar with Mega Menu** using **Material Tailwind**.

## Steps to Set Up

1. **Install Material Tailwind:**
   ```bash
   npm install @material-tailwind/react
   ```

````

2. **Install Heroicons (if needed):**
```bash
npm install @heroicons/react
````

3. \*\* Add this to your `tailwind.config.js` file:

```bash
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
```
